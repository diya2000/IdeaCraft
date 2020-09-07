

const express=require("express");
const request=require("request");
const app=express();
const bodyParser=require("body-parser");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req,res){
  var name=req.body.name;
  var email=req.body.email;
  console.log(name,email);
  var data={
    members:[
      {email_address:email,
      status:"subscribed",
      merge_fields:{
      NAME:name
    }}
    ]
  }
  var jasonData=JSON.stringify(data);
  var options={
    url:" https://us19.api.mailchimp.com/3.0/lists/c7520cc1c0",
  method:"POST",
headers:
{
  "Authorization":"anyString 6ea9e65b0fa169a6f49d9b3fa8de3ddc-us19"
},
body:jasonData}
  request(options,function(error,response,body){
  if(error){
  res.sendFile(__dirname+"/failure.html");
  }
  else{

    if(response.statusCode==200){
      console.log("done");
    }
    else{
    console.log("failed");
    }
  }
  });
});

app.listen(process.env.PORT||3000);


//api key
//6ea9e65b0fa169a6f49d9b3fa8de3ddc-us19
//list id
//c7520cc1c0
