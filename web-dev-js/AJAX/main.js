const fetchBook = function (ISBN) {
  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${ISBN}`,
    success: function (data) {
      const book = data.items?.[0]?.volumeInfo;
      if (!book) {
        $("body").append(`<p>Book not found.</p>`);
        return;
      }

      $("body").append(
        `<p>${data.items?.[0]?.volumeInfo?.title || "No title found"}</p>`
      );
    },
  });
};

function handleClick() {
  const isbn = $("#isbn-input").val();
  if (!isbn) {
    alert("Please enter an ISBN.");
    return;
  }
  fetchBook(isbn);
}
