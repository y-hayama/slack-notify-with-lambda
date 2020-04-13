const rp = require('request-promise');

exports.handler = async (event) => {
    console.log(JSON.stringify(event));

    let url = process.env.HOOK_URL;
    
    let option = {
        'url': url,
        'header': {
            'Content-Type': 'application/json'
        },
        'method': 'POST',
        'json': true,
        'body': {
            'blocks': [
        		{
        		    "type": "section",
        			"text": {
        				"type": "mrkdwn",
        				"text": "*Timestamp:* " + event.Records[0].Sns.Timestamp
        			}
    	    	},
    	    	{
        		    "type": "section",
        			"text": {
        				"type": "mrkdwn",
        				"text": "*Title:* " + event.Records[0].Sns.Subject
        			}
    	    	},
    	    	{
        		    "type": "section",
        			"text": {
        				"type": "mrkdwn",
        				"text": "*Message:* " + event.Records[0].Sns.Message
        			}
    	    	}
        	]
        }
    };
    let result = await rp(option).promise();
    console.log(result);
};
