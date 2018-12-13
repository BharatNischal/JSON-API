var express =  require("express"),
    router  =  express.Router(),
    Todo    =  require("../models/todos.js");


router.get("/",function functionName(req,res) {
  Todo.find({})
  .then(function (todos) {
    res.json(todos);
  })
  .catch(function (err) {
    res.send(err);
  });
});

router.post("/",function (req,res) {
  Todo.create(req.body)
  .then(function (newTodo) {
    res.json(newTodo);
  })
  .catch(function (err) {
    console.log(err);
  });
});

router.get("/:todoId",function (req,res) {
  Todo.findById(req.params.todoId)
  .then(function (foundTodo) {
    res.json(foundTodo);
  })
  .catch(function (err) {
    console.log(err);
  });
});

router.put("/:todoId",function (req,res) {
  Todo.findByIdAndUpdate({_id:req.params.todoId},req.body)
  .then(function (updatedTodo) {
    res.json(updatedTodo);
  })
  .catch(function (err) {
    console.log(err);
    res.send(err);
  });
});

router.delete("/:todoId",function (req,res) {
  Todo.remove({_id:req.params.todoId})
  .then(function () {
    res.send("removed");
  })
  .catch(function (err) {
    console.log(err);
  });
});

module.exports = router;
