var fetch = function (bookTitle) {
    $.ajax({
      method: "GET",
      url: 'https://www.googleapis.com/books/v1/volumes?q=intitle:' + bookTitle,
      success: function(data) {
        console.log(data);
        // createBookArray(data);
        renderBook(data);
        // console.log(bookList);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus);
      }
    }); 
  };
// var bookList = {
//   bookArray: []
// }
// var createBookArray = function(data){
//   for (var i =0; i < 10; i++){
//     var title = data.items[i].volumeInfo.title;
//     var author = data.items[i].volumeInfo.authors;
//     var description = data.items[i].volumeInfo.description;
//     var img = data.items[i].volumeInfo.imageLinks.thumbnail;
//     var chosenBook = {
//       bookTitle: title,
//       bookDescription: description,
//       bookAuthor: author,
//       bookImg:img
//     }; 
//     bookList.bookArray.push(chosenBook);
//   }
// }

var renderBook = function(data){ 
    var source = $('#books-template').html();
    var template = Handlebars.compile(source);
    var newHTML = template(data); 
    $('.bookList').append(newHTML);
}
  $('.fetch').on('click', function(){
    var bookTitle = $(this).siblings('.input').val();   
    fetch(bookTitle);
    $(this).siblings('.input').val(""); 
  });

  