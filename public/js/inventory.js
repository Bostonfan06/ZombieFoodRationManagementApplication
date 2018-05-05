$(document).ready(function() {
    getPosts();

    function getPosts(item) {
        itemId = item || "";
        if (authorId) {
          authorId = "/?author_id=" + authorId;
        }
        $.get("/api/posts" + authorId, function(data) {
          console.log("Posts", data);
          posts = data;
          if (!posts || !posts.length) {
            displayEmpty(author);
          }
          else {
            initializeRows();
          }
        });
      }

    function initializeRows() {
      blogContainer.empty();
        var postsToAdd = [];
        for (var i = 0; i < posts.length; i++) {
          postsToAdd.push(createNewRow(posts[i]));
        }
        blogContainer.append(postsToAdd);
      }

      function createNewRow(post) {

      }
}