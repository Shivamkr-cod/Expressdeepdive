const path=require('path');

const express = require("express");

const userrouter = require("./routes/userrouter");
const hostrouter = require("./routes/hostrouter");
const rootdir=require("./utils/pathutil");

const app = express();

app.use(express.urlencoded());
app.use(userrouter);
app.use(hostrouter);

app.use((req,res,next)=>{
res.sendFile(path.join(rootdir,'views','404.html'));
});

const port = 3002;
app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
