const fetch = function (queryValue, queryType = "isbn") {
  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
    success: function (data) {
      if (!data.items || data.items.length === 0) {
        $("body").append(`<p>No books found.</p>`);
        return;
      }

      data.items.forEach((item) => {
        const info = item.volumeInfo;
        const title = info.title || "No title";
        const authors = info.authors?.join(", ") || "Unknown author";
        const isbn = info.industryIdentifiers?.[0]?.identifier || "No ISBN";

        $("body").append(`
          <div style="margin-bottom: 10px;">
            <p><strong>Title:</strong> ${title}</p>
            <p><strong>Author(s):</strong> ${authors}</p>
            <p><strong>ISBN:</strong> ${isbn}</p>
          </div>
        `);
      });
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
