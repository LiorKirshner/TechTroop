const SongsManager = function () {
  let _songs = {
    sax: "3JZ4pnNtyxQ",
    "how long": "CwfoyVa980U",
  };
  const addSong = function (name, url) {
    let videoId = url.split("?v=")[1];
    _songs[name] = videoId;
  };
  const getSong = function (name) {
    const url = "https://www.youtube.com/watch?v=" + _songs[name];
    return console.log(url);
  };
  const getall = function () {
    for (let name in _songs) {
      getSong(name);
    }
  };
  return {
    addSong,
    getSong,
    getall,
  };
};

const songsManager = SongsManager();
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ");
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U");
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8");

//songsManager.getSong("sax"); // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
songsManager.getall();
