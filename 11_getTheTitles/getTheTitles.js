const getTheTitles = function(books) {
return Array.from(books).map(function(book)
{
    return book.title;
})
};

// Do not edit below this line
module.exports = getTheTitles;
