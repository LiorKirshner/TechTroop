$(document).ready(function () {
  $("#searchBTN").click(function () {
    const searchTerm = $("#search").val();

    $.ajax({
      method: "GET",
      url: `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&limit=1`,
      success: function (data) {
        const gifUrl = data.data[0].embed_url;

        $("#gif-container").append(
          `<iframe src="${gifUrl}" frameborder="0"></iframe>`
        );
      },
      error: function () {
        $("#gif-container").text("😿 שגיאה בטעינת ה־GIF");
      },
    });
  });
});
