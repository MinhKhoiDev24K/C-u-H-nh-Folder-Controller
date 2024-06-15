const express = require('express');
const route = require("./routes/client/index.route");
const app = express();
const port = 3000;

// cấu hình pug
app.set("views","./views");
app.set('view engine', 'pug');

//gọi route
route(app);


app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
})