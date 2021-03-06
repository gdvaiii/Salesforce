const express = require("express");
const path = require("path");
var Request = require("request");
const bodyParser = require("body-parser");

const app = express();


const port = process.env.PORT || "8000";
app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});
  app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });

  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  );
  
  app.use(bodyParser.json());
  var speech='hi';
  
  app.post("/echo", function(req, res) {




	
  if(""+req.body.queryResult.intent.displayName==="Create Account")
  {
 Request.post({
    "headers": { "content-type": "application/json" },
    "url": "https://gdvaiii-developer-edition.ap24.force.com/googlehome/services/apexrest/Dialogflowrest",
    "body": JSON.stringify(req.body.queryResult.parameters)
}, (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    speech=""+JSON.parse(body);
	console.dir("post responce "+speech);
 var speechResponse = {
      google: {
        expectUserResponse: true,
        richResponse: {
          items: [
            {
              simpleResponse: {
                textToSpeech: speech
              }
            }
          ]
        }
      }
    };
    

    return res.json({
      payload: speechResponse,
      //data: speechResponse,
      fulfillmentText: speech,
	  //fulfillmentMessages:card,
      speech: speech,
      displayText: speech,
      source: "salesforce api"
    });
});
  }

 if(""+req.body.queryResult.intent.displayName==="Account detail")
 {  

	Request.get("https://gdvaiii-developer-edition.ap24.force.com/googlehome/services/apexrest/Dialogflowrest", (error, response, body) => {
      if(error) {
          return console.dir(error);
      }
   
      console.dir(JSON.parse(body));  
	 speech=""+JSON.parse(body);
	 
	  var speechResponse = {
      google: {
        expectUserResponse: true,
        richResponse: {
          items: [
            {
              simpleResponse: {
                textToSpeech: speech
              }
            }
          ]
        }
      }
    };
    

    return res.json({
      payload: speechResponse,
      //data: speechResponse,
      fulfillmentText: speech,
	  //fulfillmentMessages:card,
      speech: speech,
      displayText: speech,
      source: "salesforce api"
    });
	 
	   
  });
}

/******** CONTACT  *******************/

	
  if(""+req.body.queryResult.intent.displayName==="Create Contact")
  {
 Request.post({
    "headers": { "content-type": "application/json" },
    "url": "https://gdvaiii-developer-edition.ap24.force.com/googlehome/services/apexrest/Dialogflowrestcontact",
    "body": JSON.stringify(req.body.queryResult.parameters)
}, (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    speech=""+JSON.parse(body);
	console.dir("post responce "+speech);
    var speechResponse = {
      google: {
        expectUserResponse: true,
        richResponse: {
          items: [
            {
              simpleResponse: {
                textToSpeech: speech
              }
            }
          ]
        }
      }
    };
    

    return res.json({
      payload: speechResponse,
      //data: speechResponse,
      fulfillmentText: speech,
	  //fulfillmentMessages:card,
      speech: speech,
      displayText: speech,
      source: "salesforce api"
    });
});
  }

 if(""+req.body.queryResult.intent.displayName==="Contact Detail")
 {  

Request.get("https://gdvaiii-developer-edition.ap24.force.com/googlehome/services/apexrest/Dialogflowrestcontact", (error, response, body) => {
      if(error) {
          return console.dir(error);
      }
   
      console.dir(JSON.parse(body));  
	 speech=""+JSON.parse(body);
	  var speechResponse = {
      google: {
        expectUserResponse: true,
        richResponse: {
          items: [
            {
              simpleResponse: {
                textToSpeech: speech
              }
            }
          ]
        }
      }
    };
    

    return res.json({
      payload: speechResponse,
      //data: speechResponse,
      fulfillmentText: speech,
	  //fulfillmentMessages:card,
      speech: speech,
      displayText: speech,
      source: "salesforce api"
    });
	   
  });
}

/*******************CASE*******************/

	
  if(""+req.body.queryResult.intent.displayName==="Create Case")
  {
 Request.post({
    "headers": { "content-type": "application/json" },
    "url": "https://gdvaiii-developer-edition.ap24.force.com/googlehome/services/apexrest/Dialogflowrestcase",
    "body": JSON.stringify(req.body.queryResult.parameters)
}, (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    speech=""+JSON.parse(body);
	console.dir("post responce "+speech);
    var speechResponse = {
      google: {
        expectUserResponse: true,
        richResponse: {
          items: [
            {
              simpleResponse: {
                textToSpeech: speech
              }
            }
          ]
        }
      }
    };
    

    return res.json({
      payload: speechResponse,
      //data: speechResponse,
      fulfillmentText: speech,
	  //fulfillmentMessages:card,
      speech: speech,
      displayText: speech,
      source: "salesforce api"
    });
});
  }

 if(""+req.body.queryResult.intent.displayName==="Case Details")
 {  

Request.get("https://gdvaiii-developer-edition.ap24.force.com/googlehome/services/apexrest/Dialogflowrestcase", (error, response, body) => {
      if(error) {
          return console.dir(error);
      }
   
      console.dir(JSON.parse(body));  
	 speech=""+JSON.parse(body);
	   var speechResponse = {
      google: {
        expectUserResponse: true,
        richResponse: {
          items: [
            {
              simpleResponse: {
                textToSpeech: speech
              }
            }
          ]
        }
      }
    };
    

    return res.json({
      payload: speechResponse,
      //data: speechResponse,
      fulfillmentText: speech,
	  //fulfillmentMessages:card,
      speech: speech,
      displayText: speech,
      source: "salesforce api"
    });
	   
	   
  });
}


/**********TASK***************/

	
  if(""+req.body.queryResult.intent.displayName==="Create Task")
  {
 Request.post({
    "headers": { "content-type": "application/json" },
    "url": "https://gdvaiii-developer-edition.ap24.force.com/googlehome/services/apexrest/Dialogflowresttask",
    "body": JSON.stringify(req.body.queryResult.parameters)
}, (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    speech=""+JSON.parse(body);
	console.dir("post responce "+speech);
   var speechResponse = {
      google: {
        expectUserResponse: true,
        richResponse: {
          items: [
            {
              simpleResponse: {
                textToSpeech: speech
              }
            }
          ]
        }
      }
    };
    

    return res.json({
      payload: speechResponse,
      //data: speechResponse,
      fulfillmentText: speech,
	  //fulfillmentMessages:card,
      speech: speech,
      displayText: speech,
      source: "salesforce api"
    });
});
  }

 if(""+req.body.queryResult.intent.displayName==="Task Details")
 {  

Request.get("https://gdvaiii-developer-edition.ap24.force.com/googlehome/services/apexrest/Dialogflowresttask", (error, response, body) => {
      if(error) {
          return console.dir(error);
      }
   
      console.dir(JSON.parse(body));  
	 speech=""+JSON.parse(body);
	 var speechResponse = {
      google: {
        expectUserResponse: true,
        richResponse: {
          items: [
            {
              simpleResponse: {
                textToSpeech: speech
              }
            }
          ]
        }
      }
    };
    

    return res.json({
      payload: speechResponse,
      //data: speechResponse,
      fulfillmentText: speech,
	  //fulfillmentMessages:card,
      speech: speech,
      displayText: speech,
      source: "salesforce api"
    });
  });
}



  /* Request.post({
    "headers": { "content-type": "application/json" },
    "url": "https://gdvaiii-developer-edition.ap24.force.com/googlehome/services/apexrest/Dialogflowrest",
    "body": JSON.stringify(req.body.queryResult.parameters)
}, (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    speech=JSON.parse(body);
    console.dir(JSON.parse(body));
});
*/
   /* var speech =
      req.body.queryResult &&
      req.body.queryResult.parameters &&
      req.body.queryResult.parameters.Name
        ? req.body.queryResult.parameters.Name
        : "Seems like some problem. Speak again.";
*/
console.log("speach >> "+speech);
//speech='hello am ';
      console.log(req.body.queryResult.intent.displayName);  
    var card = [
        {
          "card": {
            "title": "card title",
            "subtitle": "card text",
            "imageUri": "https://assistant.google.com/static/images/molecule/Molecule-Formation-stop.png",
            "buttons": [
              {
                "text": "button text",
                "postback": "https://assistant.google.com/"
              }
            ]
          }
        }
      ];
    
    var speechResponse = {
      google: {
        expectUserResponse: true,
        richResponse: {
          items: [
            {
              simpleResponse: {
                textToSpeech: speech
              }
            }
          ]
        }
      }
    };
    

  /*  return res.json({
      payload: speechResponse,
      //data: speechResponse,
      fulfillmentText: speech,
	  //fulfillmentMessages:card,
      speech: speech,
      displayText: speech,
      source: "salesforce api"
    }); */
  });
 
 app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "pug");
  app.use(express.static(path.join(__dirname, "public")));
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
