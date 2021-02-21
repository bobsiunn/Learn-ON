const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port =process.env.PORT || 3001;
const route = require('./routes/index');
const { uploadImageMulterMiddleware } = require("./middleware");


app.use(bodyParser.json());
app.use('/api', route);
app.use("/api/video", require("./routes/index"));

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})