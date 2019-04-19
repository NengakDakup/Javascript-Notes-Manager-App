var notes = {
  title: [],
  title_content: []
};

//to get the user click on mainactivity button so it can display a form for inputing the note title
document.querySelector('.create_note_btn').addEventListener("click", function(){
  var value = document.querySelector('.create_note_input').value;
  if (value) {
    addNote(value);
    document.querySelector('.create_note_input').value = "";
  }
});

//get any keydown press for the enter key so it can also be added instaed of only clicking
document.querySelector('.create_note_input').addEventListener('keydown', function(e){
  var value = this.value;
  if (e.code === 'Enter' && value) {
    displayEditor(value);
    this.value = "";
  }
});

function displayEditor(value) {
  if (value) {
    document.querySelector('.note_editor').style.display = "unset";
    document.querySelector('.create_note_input_main').value = value;
  } else {
    document.querySelector('.note_editor').style.display = "none";
    document.querySelector('.create_note_input_main').value = "";
    document.querySelector('.content').value = "";
  }
}


//add an event listener for the main note editor action buttons
document.querySelector('.save_note_btn').addEventListener("click", function(){
  var content = document.querySelector('.content').value;
  var title = document.querySelector('.create_note_input_main').value;
  if (content && title) {
    displayEditor();
  }
});
