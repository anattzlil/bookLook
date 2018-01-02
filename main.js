var fetch = function (isbn) {
    $.ajax({
      method: "GET",
      url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn,
      success: function(data) {
        var title = data.items[0].volumeInfo.title;
        var author = data.items[0].volumeInfo.authors;
        var description = data.items[0].volumeInfo.description;
        var img = data.items[0].volumeInfo.imageLinks.thumbnail;
        console.log(data);
        renderBook(title, description, author, img);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus);
      }
    }); 
  };

var renderBook = function(title, description, author, img){
    var bookContainer = '<h1>' + title + '</h1>' +
        '<p>' + description + '</p>' +
        '<h3>written by: ' + author + '</h3>' +
        '<img src="' +img+ '"></img>';
    $('.bookList').append(bookContainer);
    // var dataArray = []
    // var source = $('#books-template').html();
    // var template = Handlebars.compile(source);
    // var newHTML = template(fetch); 
    // $('.bookList').append(newHTML);
}
  $('.fetch').on('click', function(){
    var isbn = $(this).siblings('.input').val();   
    fetch(isbn);
  });

  