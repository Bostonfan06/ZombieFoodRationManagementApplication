$(document).ready(function () {
  // Grabbing references to the "survivor-name" input and survivor container, and the table "tbody"

  var survivorList = $('tbody')
  var survivorContainer = $('.survivor-container')
  var lastName = $('#Lastname')
  var firstName = $('#Firstname')
  // Adding listeners to form to create an object and button to delete object
  var audio = new Audio('../assets/audio/zomAudio2.wav')
  audio.play()

  $('#createSurvivor').on('click', function handleFormSubmit (event) {
    event.preventDefault()

    if (!firstName.val().trim() || !lastName.val().trim()) {
      return
    }
    var newSurvivor = {
      firstName: firstName.val().trim(),
      lastName: lastName.val().trim()
    }
    postSurvivor(newSurvivor)
  })

  function postSurvivor (Survivor) {
    $.post('/api/survivor', Survivor, function () {
      console.log('posted')
    }).then(function () {
      $('#Firstname').empty()
      $('#Lastname').empty()
      location.reload()
    })
  }

  function getSurvivors () {
    $.get('/api/survivor', function (data) {
      for (var i = 0; i < data.length; i++) {
        var row = createSurvivorRow(data[i], i)
        $('#survivorBody').append(row)
      }
    })
  }
  getSurvivors()

  function createSurvivorRow (survivor, index) {
    var survivorRow = '<tr>' +
      '<th scope="row">' + (index + 1) + '</th>' +
      '<td>' + survivor.FirstName + '</td>' +
      '<td>' + survivor.LastName + '</td>' +
      '<td>' + survivor.SurvivorItems + '</td>' +
      '<td>' + survivor.SurvivorItems + '</td>' +
    '</tr>'

    return survivorRow
  }

  function upsertSurvivor (survivorData) {
    $.post('/api/survivor', survivorData).then(getSurvivors)
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
