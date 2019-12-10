const express = require("express");
const path = require("path");
var Request = require("request");
const bodyParser = require("body-parser");

const app = express();
var speech=''
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
  
  app.post("/echo", function(req, res) {



if(req.body.queryResult){
	
  if(req.body.queryResult.intent.displayName=='Create Account')
  {
	   Request.post({
    "headers": { "content-type": "application/json" },
    "url": "https://googleassistantrashid-developer-edition.na136.force.com/services/apexrest/Dialogflowrest",
    "body": JSON.stringify(req.body.queryResult.parameters)
}, (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    speech+=JSON.parse(body);
    console.dir(JSON.parse(body));
});
  }

 if(req.body.queryResult.intent.displayName=='account detail')
 {  
    Request.get("https://googleassistantrashid-developer-edition.na136.force.com/services/apexrest/Dialogflowrest", (error, response, body) => {
      if(error) {
          return console.dir(error);
      }

      
     

    console.log("arr "+JSON.parse(body)) ;
        speech+=JSON.parse(body);
      console.dir(JSON.parse(body));
  });
 }
}
  /* Request.post({
    "headers": { "content-type": "application/json" },
    "url": "https://googleassistantrashid-developer-edition.na136.force.com/services/apexrest/Dialogflowrest",
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
console.log("  ss>>"+speech);
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
    
    return res.json({
      payload: speechResponse,
      //data: speechResponse,
      fulfillmentText: speech,
	  fulfillmentMessages:card,
      speech: speech,
      displayText: speech,
      source: "webhook-echo-sample"
    });
  });
 
 app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "pug");
  app.use(express.static(path.join(__dirname, "public")));