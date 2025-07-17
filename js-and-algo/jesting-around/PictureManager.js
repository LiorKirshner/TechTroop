class PictureManager {
  constructor() {
    this.pictureURLs = [];
  }

  addPicture(picURL) {
    this.pictureURLs.push(picURL);
  }

  removePicture(picURL) {
    const index = this.pictureURLs.indexOf(picURL);
    if (index !== -1) {
      this.pictureURLs.splice(index, 1);
    }
  }
}

module.exports = PictureManager;
