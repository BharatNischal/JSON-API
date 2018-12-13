var express   =   require("express"),
    app       =   express(),
    mongoose  =   require("mongoose"),
    todoRoute =  require("./routes/todo.js"),
    bodyParser = require("body-parser");


app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/views'));
//mongoose setup
mongoose.set("debug",true);
mongoose.connect("mongodb://localhost/todo_api");
mongoose.Promise = Promise;

//Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function (req,res) {
  res.sendFile("index.html");
});

app.use("/api/todos",todoRoute);

app.listen(3000,function () {
  console.log("server has started");
});
