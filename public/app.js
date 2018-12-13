$("h1 i").on("click",function () {
  $("input").fadeToggle(600);
});

//XHR Request
$(document).ready(function () {
  $.getJSON('/api/todos')
  .then(function (todos) {
    todos.forEach(addTodo)
  })
});
$("input").keypress(function (event) {
    if (event.which === 13) {
      var text = $(this).val();
      $(this).val("");
      $.post('api/todos',{name:text})
      .then(addTodo);
      }
    });
$('ul').on('click','span',function (event) {
  event.stopPropagation(); //This is used to stop click event to reach li as span is inside li
  var li = $(this).parent();
  var deleteUrl = '/api/todos/' + li.data('id');
  $.ajax({
    method:'DELETE',
    url: deleteUrl
  })
  .then(function (message) {
    li.remove();
    console.log(message);
  })
  .catch(function (err) {
    console.log(err);
  });
});

$('ul').on('click','li',function () {
  var li = $(this);
  var isDone = !li.data('completed');
  var updateUrl = '/api/todos/' + li.data('id');
  $.ajax({
    method:'PUT',
    url:updateUrl,
    data:{completed:isDone}
  })
  .then(function () {
    li.toggleClass('completed');
    li.data('completed',isDone);
  });
});

function addTodo(todo) {
    var newTodo = $('<li><span><i class="far fa-trash-alt"></i></span>'+todo.name+'</li>');
    newTodo.data('id',todo._id);
    newTodo.data('completed',todo.completed);
    if (todo.completed) {
      newTodo.addClass('completed');
    }
    $('ul').append(newTodo);
}
