const productRouter = require("./products.route")
const homeRouter = require("./home.route");
module.exports=(app)=>{

    //trang chủ
    app.use('/', homeRouter);
  // trang product
    app.use('/products',productRouter);
}
