$(document).ready(function () {
  // Grabbing references to the "survivor-name" input and survivor container, and the table "tbody"

  var lastName = $('#Lastname')
  var firstName = $('#Firstname')
  // Adding listeners to form to create an object and button to delete object
  var audio = new Audio('../assets/audio/zomAudio2.wav')
  audio.play()

  // button clicks
  $(document).on('click', 'button.delete', function (r) {
    var id = $(this).attr('data-value')
    console.log(id)
    deleteSurvivor(id)
  })

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
      '<td>' + survivor.Items.length + '</td>' +
      '<td>' +
        '<button class="delete item-options animated infinite pulse" data-value="' + survivor.id + '">delete</button>' +
      '</td>' +
    '</tr>'

    return survivorRow
  }

  function deleteSurvivor (id) {
    $.ajax({
      method: 'DELETE',
      url: '/api/survivor/' + id
    })
      .then(function () {
        $('#survivorBody').empty()
        getSurvivors()
      })
  }
})
