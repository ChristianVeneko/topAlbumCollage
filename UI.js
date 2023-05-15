export class UI {
  constructor() {
    this.imagesDiv = document.getElementById("images");
    this.listDiv = document.getElementById("list");
    this.images = this.imagesDiv.getElementsByTagName("img");
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
    this.changeImagesProportions(fila)
    }
  
  showAlbumList(album){
    this.listDiv.innerHTML = "";
    const ol = document.createElement("ol");
    album.forEach((album) => {
      const li = document.createElement("li");
      li.innerHTML = album.name;
      ol.appendChild(li);
    });
    this.listDiv.appendChild(ol);
  }

  changeImagesProportions(fila){
    if((fila == 3 || fila ==4 || fila == 5) && screen.width < 768){
      for (var i = 0; i < this.images.length; i++) {
        this.images[i].width = 80;
        this.images[i].height = 80;
      }
    }else if(fila == 10 && screen.width < 768){
      for (var i = 0; i < this.images.length; i++) {
        this.images[i].width = 40;
        this.images[i].height = 40;
      }
    }

    if((fila == 3 || fila ==4 || fila == 5) && screen.width > 768){
      for (var i = 0; i < this.images.length; i++) {
        this.images[i].width = 90;
        this.images[i].height = 90;
      }
    }else if(fila == 10 && screen.width > 768){
      for (var i = 0; i < this.images.length; i++) {
        this.images[i].width = 60;
        this.images[i].height = 60;
      }
    }
}}