$(document).ready(function () {
  getItems()

  $(document).on('click', 'button.delete', function (r) {
    deleteItem($(this).attr('data-value'))
  })

  function getItems () {
    $.get('/items', function (data) {
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
      '<td>' + 'glenn' + '</td>' +
      '<td>' +
        '<button class="delete" data-value="' + item.ItemId + '">delete</button>' +
        '<button class="edit" data-value="' + item.ItemId + '">edit</button>' +
      '</td>' +
    '</tr>'

    return row
  }

  function deleteItem (id) {
    $.ajax({
      method: 'DELETE',
      url: '/items/' + id
    })
      .then(function () {
        $('#itemBody').empty()
        getItems()
      })
  }
})
