var notes = {
  title: [],
  title_content: []
};

//to get the user click on mainactivity button so it can display a form for inputing the note title
document.querySelector('.create_note_btn').addEventListener("click", function(){
  var value = document.querySelector('.create_note_input').value;
  if (value) {
    displayEditor(value);
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

//display or hide the main editor
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
    renderNotes(title);
    notes.title.push(title);
    notes.title_content.push(content);
  }
});

document.querySelector('.discard_note_btn').addEventListener("click", function(){
  displayEditor();
  document.querySelector('#create_note_toggle');
});

function renderNotes(title) {
  //creating the icons
  var editBtnicon = '<i class="fa fa-edit"></i>'; //declare the edit btn inner icon
  var deleteBtnicon = '<i class="fa fa-trash-alt"></i>'; //declare the idelete btn inner icon

  var listContainer = document.querySelector('.notes'); //main ul container for list items

  //create the list item for the note
  var listNote = document.createElement('li');
  listNote.classList += 'list_note';
  listNote.innerText = title;

  //create the div where the buttons will stay
  var btnsDiv = document.createElement('div');
  btnsDiv.classList += 'buttons';

  //creating the buttons
  var editBtn = document.createElement('button'); //create the edit button
  editBtn.classList += 'edit'; //add the neccesary classes tot he buttons so styling can be applied
  editBtn.innerHTML = editBtnicon; //append the icons to the buttons

  var deleteBtn = document.createElement('button'); //create the delete button
  deleteBtn.classList += 'remove'; //add the neccesary classes tot he buttons so styling can be applied
  deleteBtn.innerHTML = deleteBtnicon; //append the icons to the buttons

  btnsDiv.appendChild(editBtn);
  btnsDiv.appendChild(deleteBtn);
  listNote.appendChild(btnsDiv);

  listContainer.insertBefore(listNote, listContainer.childNodes[0]);

  document.querySelector('.remove').addEventListener("click", function(){
    var liItem = this.parentNode.parentNode;
    var ulItem = liItem.parentNode;
    var value = liItem.innerText;

    ulItem.removeChild(liItem);
  });
}



function deleteNote() {
  var liItem = this.parentNode.parentNode;
  var ulItem = item.parentNode;
  var value = liItem.innerText;

  ulItem.removeChild(liItem);
}
