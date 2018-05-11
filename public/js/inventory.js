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
      '<td>' + item.Survivor.FirstName + '</td>' +
      '<td>' +
        '<button class="delete item-options animated infinite pulse" data-value="' + item.id + '">delete</button>' +
      // one day... one day..
      // '<button class="edit item-options animated infinite pulse" data-value="' + item.ItemId + '">edit</button>' +
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
