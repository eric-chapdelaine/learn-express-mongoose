let Author = require('../models/author');

get_author_list = async () => {
  try {
    let authors = await Author.find({}).exec();
    return authors.map(function(a) {
      return {'name': a.name, 'lifespan': a.lifespan};
    })
  } catch (err) {
    console.log('Could not get authors ' + err);
  }
};

exports.show_all_authors = function(res) {
  get_author_list()
    .then((data) => res.send(data))
    .catch((_) => res.send(_));
}
