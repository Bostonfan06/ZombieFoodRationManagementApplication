$(document).ready(function () {
  getPosts()

  function getPosts () {
    $.get('/api/items', function (data) {
      for (var i = 0; i < data.length; i++) {
        var row = createNewRow(data[i], i)
        $('#itemBody').append(row)
      }
    })
  }

  // function initializeRows () {
  //   blogContainer.empty()
  //     var postsToAdd = []
  //     for (var i = 0; i < posts.length; i++) {
  //       postsToAdd.push(createNewRow(posts[i]))
  //     }
  //       blogContainer.append(postsToAdd)
  //     }

  function createNewRow (item, index) {
    var row = '<tr>' +
      '<th scope="row">' + (index + 1) + '</th>' +
      '<td>' + item.ItemName + '</td>' +
      '<td>' + item.Category + '</td>' +
      '<td>' + item.Units + '</td>' +
      '<td>' + item.ExpirationDate + '</td>' +
      '<td>Glenn</td>' +
      '<td>' +
        '<button>delete</button>' +
        '<button>edit</button>' +
      '</td>' +
    '</tr>'

    return row
  }
})
