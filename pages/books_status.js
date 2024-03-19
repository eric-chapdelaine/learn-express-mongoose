let BookInstance = require('../models/bookinstance');
let Book = require('../models/book')

get_available_books = async () => {
  try {
    let books = await BookInstance.find({status: 'Available'}).populate('book').exec();
    return books.map(function(b) {
      return {'title': b.book.title, 'status': b.status};
    });
  } catch (err) {
    console.log('Could not get books ' + err);
  }
}

exports.show_all_books_status = function(res) {
  get_available_books()
    .then((data) => res.send(data))
    .catch((_) => res.send(_));

}