const fetch = function (queryType, queryValue) {
  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
    success: function (data) {
      const book = data.items?.[0]?.volumeInfo;
      if (!book) {
        $("body").append(`<p>Book not found.</p>`);
        return;
      }
      console.log(data.items?.[0]?.volumeInfo?.title);
      $("body").append(
        `<p>${data.items?.[0]?.volumeInfo?.title || "No title found"}</p>`
      );
    },
  });
};

// function handleClick() {
//   const isbn = $("#isbn-input").val();
//   if (!isbn) {
//     alert("Please enter an ISBN.");
//     return;
//   }
//   fetchBook(isbn);
// }
