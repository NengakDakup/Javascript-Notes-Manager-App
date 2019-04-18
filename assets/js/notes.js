

//to get the user click on the button
document.getElementById('addItem').addEventListener("click", function(){
  var value = document.getElementById('item').value;
  if (value) {
    addItemTodo(value);
    document.getElementById('item').value = '';

    data.todo.push(value);
  }
  dataObjectUpdated();
});

document.getElementById('item').addEventListener('keydown', function(e){
  var value = this.value;
  if (e.code === 'Enter' && value) {
    addItemTodo(value);
    this.value = "";
    data.todo.push(value);
  }
  dataObjectUpdated();
})
