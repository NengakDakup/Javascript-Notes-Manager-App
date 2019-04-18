//to get the user click on the button
document.querySelector('.create_note_btn').addEventListener("click", function(){
  var value = document.querySelector('.create_note_input').value;
  if (value) {
    addNote(value);
    data.todo.push(value);
  }
  dataObjectUpdated();
  console.log(value);
});

document.querySelector('.create_note_input').addEventListener('keydown', function(e){
  var value = this.value;
  if (e.code === 'Enter' && value) {
    addItemTodo(value);
    this.value = "";
    data.todo.push(value);
  }
  dataObjectUpdated();
})
