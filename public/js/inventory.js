$(document).ready(function () {
  getPosts()

  $(document).on('click', 'button.delete', function (r) {
    console.log('this thing: ' + $(this)[0])
    console.log('arrr: ' + r[0])
  })

  function getPosts () {
    $.get('/api/items', function (data) {
      for (var i = 0; i < data.length; i++) {
        var row = createNewRow(data[i], i)
        $('#itemBody').append(row)
      }
    })
  }

  function createNewRow (item, index) {
    var row = '<tr>' +
      '<th scope="row">' + (index + 1) + '</th>' +
      '<td>' + item.ItemName + '</td>' +
      '<td>' + item.Category + '</td>' +
      '<td>' + item.Units + '</td>' +
      '<td>' + item.ExpirationDate + '</td>' +
      '<td>Glenn</td>' +
      '<td>' +
        '<button class="delete" data-value="' + item.ItemId + '">delete</button>' +
        '<button class="edit" data-value="' + item.ItemId + '">edit</button>' +
      '</td>' +
    '</tr>'

    return row
  }

  function deletePost (id) {
    $.ajax({
      method: 'DELETE',
      url: '/api/items/' + id
    })
      .then(function () {
        getPosts(postCategorySelect.val())
      })
  }
})
