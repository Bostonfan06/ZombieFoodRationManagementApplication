$(document).ready(function () {
  var todayDate = new Date()

  getItems()

  $(document).on('click', 'button.delete', function (r) {
    deleteItem($(this).attr('data-value'))
  })

  function getItems () {
    var expired = 0
    var expiringSoon = 0

    $.get('/items', function (data) {
      for (var i = 0; i < data.length; i++) {
        var row = createNewRow(data[i], i)
        $('#itemBody').append(row)
        var itemDate = convertToDateObj(data[i].ExpirationDate)
        var itemDatePrevWeek = convertToDateObj(data[i].ExpirationDate)

        itemDatePrevWeek.setDate(itemDatePrevWeek.getDate() - 7)
        todayDate.setHours(0, 0, 0, 0)
        itemDate.setHours(0, 0, 0, 0)
        itemDatePrevWeek.setHours(0, 0, 0, 0)

        if (itemDate < todayDate) {
          expired += 1
        } else if (itemDatePrevWeek < todayDate) {
          expiringSoon += 1
        }
      }
      $('#warning-container').append('<h5>' + expired + ' item(s) have expired!</h4>')
      $('#warning-container').append('<h5>' + expiringSoon + ' item(s) are expiring soon!</h4>')
    })
  }

  function convertToDateObj (date) {
    var dateArr = date.split('-')
    var dd = dateArr[2]
    var mm = dateArr[1] - 1
    var yyyy = dateArr[0]
    var dateObj = new Date(yyyy, mm, dd)
    return dateObj
  }

  function caculateAndPostExpiration (itemDate, itemDatePrevWeek) {
    itemDatePrevWeek.setDate(itemDatePrevWeek.getDate() - 7)
    todayDate.setHours(0, 0, 0, 0)
    itemDate.setHours(0, 0, 0, 0)
    itemDatePrevWeek.setHours(0, 0, 0, 0)

    if (itemDate < todayDate) {
      expired
    } else if (itemDatePrevWeek < todayDate) {
      console.log('two')
    }
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
