$(document).ready(function () {
  // Getting references to the name input and survivor container, as well as the table body 
  var FirstNameInput = $(#"survivor-FirstName";) //new
  var LastNameInput = $(#"survivor-LastName";) //new
  var survivorList = $("tbody");
  var survivorContainer = $(".survivor-container");//new
    
 // Adding event listeners to the form to create a new object, and the button to delete 
  // an Survivor
  $(document).on("submit", "#Survivor-form", handleSurvivorFormSubmit);
  $(document).on("click", ".delete-survivor", handleSurvivorButtonPress);

  // Getting the initial list of Authors 
  getSurvivors(); 

   // A function to handle what happens when the form is submitted to create a new Author 
   function handleSurvivorFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out 
    if (!FirstnameInput.val().trim() || !LastnameInput.val().trim() {
      return;
    }
    // Calling the upsertAuthor function and passing in the value of the name input 
    upsertSurvivor({
      Firstname: FirstnameInput
        .val()
        .trim(),
      LastName: LastNameInput
      .val()
      .trim()
    });
  }



  // Function for creating a new list of row for Survivor
  function upsertSurvivor (survivorData) {
    $.post('/api/survivor', survivorData).then(getSurvivors)
    }

  function createSurvivorRow (survivorData) {
    var newTr = $('<tr>')
        newTr.data('survivor', survivorData)
        newTr.append('<td>' + survivorData.name + '</td>')
        newTr.append('<td>' + survivorData.Posts.length + '</td>')
        newTr.append("<td><a href='/inventory?survior_id=" + survivorData.id + "'>Go to Posts</a></td>")
        newTr.append("<td><a href='/ims?survivor_id=" + survivorData.id + "'>Create a Post</a></td>")
        newTr.append("<td><a style='cursor:pointer; color:red' class='delete-survivor'>Delete Survivor</a></td>")
        
        return newTr

    }

  function getSurvivors () {
    $.get('/api/survivor', function (data) {
      var rowsToAdd = []
            for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createSurvivorRow(data[i])
        )
            }
      renderSurvivorList(rowToAdd)
            nameInput.val('')
        })
    }

  function renderSurvivorList (rows) {
    survivorList.children().not(':last').remove()
        survivorContainer.children('.alert').remove()
        if (rows.length) {
      console.log(rows)
            survivorList.prepend(rows)
        } else {
      renderEmpty()
        }
  }

  function renderEmpty () {
    var alertDiv = $('<div>')
        alertDiv.addClass('alert alert-danger')
        alertDiv.text('You must create a Survivor before you can create a Post.')
        survivorContainer.append(alertDiv)
    }

  function handleDeleteButtonPress () {
    var listItemData = $(this).parent('td').parent('tr').data('survivor')
        var id = listItemData.id
        $.ajax({
      method: 'DELETE',
      url: '/api/survivor/' + id
    }).then(getSurvivors)
        
    }
})
