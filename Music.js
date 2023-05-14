export class Music {
  constructor(userInput, timeSelected, sizeSelected) {
    this.user = userInput;
    this.time = timeSelected;
    this.size = sizeSelected;
    this.apiKey = "a04b66dfea2ff907809cb5d04b2613f7";
  }

  async getTopAlbums() {
    const url = `https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${this.user}&api_key=${this.apiKey}&period=${this.time}&limit=${this.size}&format=json`;

    return await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        return data.topalbums.album;
      });
  }

  async getTopArtist() {
    const url = `https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${this.user}&api_key=${this.apiKey}&period=${this.time}&limit=${this.size}&format=json`;

    return await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        return data.topartists.artist;
      });
  }

  async getTopTracks() {
    const url = `https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${this.user}&api_key=${this.apiKey}&period=${this.time}&limit=${this.size}&format=json`;

    return await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        return data.toptracks.track;
      })
  }
}
