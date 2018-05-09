$(document).ready(function () {
  // Getting jQuery references to the post body, title, form, and survivor select
  var itemNameInput = $('#ItemName')
  var categoryInput = $('#Category')
  var expirationDateInput = $('#ExpirationDate')
  var unitsInput = $('#Units')
  var survivorInput = $('#Survivor')
  // Adding an event listener for when the form is submitted
  $('#ims').on('submit', handleFormSubmit)
  // Gets the part of the url that comes after the "?" (which we have if we're updating a post)
  // var url = window.location.search
  // var itemId
  // var survivorId
  // // Sets a flag for whether or not we're updating a post to be false initially
  var updating = false
  var newOption
  appendSurvivorOptions()
  function appendSurvivorOptions () {
    $.get('/survivors', function (data) {
      for (var i = 0; i < data.length; i++) {
        $('#Survivor').append('<option data-value=" + + ">' + data[i].FirstName + '</option>').attr('data-value', data[i].SurvivorId)
      }
    })
  }

  // // If we have this section in our url, we pull out the post id from the url
  // // In '?post_id=1', postId is 1
  // if (url.indexOf('?item_id=') !== -1) {
  //   itemId = url.split('=')[1]
  //   getItemData(itemId, 'item')
  // }
  // // Otherwise if we have an survivor_id in our url, preset the survivor select box to be our survivor
  // else if (url.indexOf('?survivor_id=') !== -1) {
  //   survivorId = url.split('=')[1]
  // }

  // Getting the survivors, and their posts
  // getsurvivors()

  // A function for handling what happens when the form to create a new post is submitted
  function handleFormSubmit (event) {
    event.preventDefault()
    // Wont submit the post if we are missing a body, title, or survivor
    if (!itemNameInput.val().trim() || !categoryInput.val().trim() || !expirationDateInput.val().trim() || !unitsInput.val() || !survivorInput.val().trim()) {
      return
    }
    console.log('am I even in here?')
    // Constructing a newPost object to hand to the database

    var newItem = {
      ItemName: itemNameInput
        .val()
        .trim(),
      Category: categoryInput
        .val()
        .trim(),
      Units: unitsInput
        .val()
        .trim(),
      ExpirationDate: expirationDateInput
        .val()
        .trim(),
      SurvivorId: 
    }

    // If we're updating a post run updatePost to update a post
    // Otherwise run submitPost to create a whole new post
    //   if (updating) {
    //     newItem.id = itemId
    //     updateItem(newItem)
    //   } else {
    //     console.log('submitting item')
    //     submitItem(newItem)
    //     console.log('submitted item')
    //   }]
    // }

    // Submits a new post and brings user to blog page upon completion
    function submitItem (item) {
      $.post('/items', item, function () {
        window.location.href = '/inventory'
      })
    }
    // convertToSurvivorId('Rick')

    // function convertToSurvivorId (survivorName) {
    //   var survivorId
    //   console.log('here')
    //   $.get('/survivors', function (data) {
    //     for (var i = 0; i < data.length; i++) {
    //       console.log('iteration ' + i + ' data: ' + data[i])
    //       if (data[i].FirstName === survivorName) {
    //         survivorId = data[i].SurvivorId
    //       }
    //     }
    //     return survivorId
    //   })
    // }

    // Gets post data for the current post if we're editing, or if we're adding to an survivor's existing posts
    function getItemData (id, type) {
      var queryUrl
      switch (type) {
        case 'item':
          queryUrl = '/api/items/' + id
          break
        case 'surivor':
          queryUrl = '/api/survivors/' + id
          break
        default:
          return
      }
      $.get(queryUrl, function (data) {
        if (data) {
          console.log(data.survivorId || data.id)
          // If this post exists, prefill our cms forms with its data
          titleInput.val(data.title)
          bodyInput.val(data.body)
          SurvivorId = data.SurvivorId || data.id
          // If we have a post with this id, set a flag for us to know to update the post
          // when we hit submit
          updating = true
        }
      })
    }

    // A function to get survivors and then render our list of survivors
    function getSurvivors () {
      $.get('/api/survivors', rendersurvivorList)
    }
    // Function to either render a list of survivors, or if there are none, direct the user to the page
    // to create an survivor first
    function renderSurvivorsList (data) {
      if (!data.length) {
        window.location.href = '/survivors'
      }
      $('.hidden').removeClass('hidden')
      var rowsToAdd = []
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createSurvivorRow(data[i]))
      }
      survivorSelect.empty()
      console.log(rowsToAdd)
      console.log(survivorSelect)
      survivorSelect.append(rowsToAdd)
      survivorSelect.val(survivorId)
    }

    // Creates the survivor options in the dropdown
    function createsurvivorRow (survivor) {
      var listOption = $('<option>')
      listOption.attr('value', survivor.id)
      listOption.text(survivor.name)
      return listOption
    }

    // Update a given post, bring user to the blog page when done
    function updateItem (item) {
      $.ajax({
        method: 'PUT',
        url: '/api/items',
        data: post
      })
        .then(function () {
          window.location.href = '/inventory'
        })
    }
  }
})
