export class UI {
  constructor() {
    this.imagesDiv = document.getElementById("images");
    this.listDiv = document.getElementById("list");
  }

  renderImages(albums, size) {
    this.imagesDiv.innerHTML = "";
    albums.forEach((album) => {
      const img = document.createElement("img");
      img.src = album.image[2]["#text"];
      this.imagesDiv.appendChild(img);
    });
    this.createCollage(size);
  }

  createCollage(size) {
    let fila = 0;
    let columna = 0;

    switch(size){
        case '3x3':
            fila = 3;
            columna = 3;
            break;
        case '4x4':
            fila = 4;
            columna = 4;
            break;
        case '5x5':
            fila = 5;
            columna = 5;
            break;
        case '10x10':
            fila = 10;
            columna = 10;
            break;
    }
    this.imagesDiv.style.gridTemplateColumns = `repeat(${columna}, 0fr)`;
    this.imagesDiv.style.gridTemplateRows = `repeat(${fila}, 0fr)`;
  }
  showAlbumList(album) {
    this.listDiv.innerHTML = "";
    const ol = document.createElement("ol");
    album.forEach((album) => {
      const li = document.createElement("li");
      li.innerHTML = album.name;
      ol.appendChild(li);
    });
    this.listDiv.appendChild(ol);
  }
}