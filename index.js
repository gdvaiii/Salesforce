const express = require("express");
const path = require("path");

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
  
  app.post("/echo", function(req, res) {
	 console.log(req); 
    var speech =
      req.body.queryResult &&
      req.body.queryResult.parameters &&
      req.body.queryResult.parameters.echoText
        ? req.body.queryResult.parameters.echoText
        : "Seems like some problem. Speak again.";
    
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
      speech: speech,
      displayText: speech,
      source: "webhook-echo-sample"
    });
  });
 
 app.set("views", path.join(__dirname, "views"));
  app.set("view engine", "pug");
  app.use(express.static(path.join(__dirname, "public")));