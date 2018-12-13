var mongoose    =   require("mongoose");

var todoSchema  = new mongoose.Schema({
  name:{
    type:String,
    required:'This is compulsary field'
  },
  completed:{
    type:Boolean,
    default:false
  },
  created_date:{
    type:Date,
    default:Date.now
  }
});

var Todo = mongoose.model("todo",todoSchema);

module.exports = Todo;
