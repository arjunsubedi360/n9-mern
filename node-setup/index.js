const express= require("express");
const app = express();
app.listen(4000,function(){
    app.listenerCount("weather.html");
})