const apiKey = "YOUR_API_KEY"; // שים פה את המפתח שלך
const searchTerm = "cats";

$.ajax({
  method: "GET",
  url: `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&limit=1`,
  success: function (data) {
    const gifUrl = data.data[0].embed_url;
    $("#gif-container").html(
      `<iframe src="${gifUrl}" frameborder="0"></iframe>`
    );
  },
  error: function () {
    $("#gif-container").text("😿 שגיאה בטעינת ה־GIF");
  },
});
