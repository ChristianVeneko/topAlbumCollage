async function fetchScrobblesAPI(userInput, timeInput, sizeInput) {
  const apiKey = "a04b66dfea2ff907809cb5d04b2613f7";
  const user = userInput;
  const link = `https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${user}&api_key=${apiKey}&period=${timeInput}&limit=${sizeInput}&format=json`;

  return await fetch(link)
    .then((response) => response.json())
    .then((data) => {
      return data.topalbums.album;
    });
}
async function main() {
  const userInput = document.getElementById("inputUser").value;
  const timeInput = document.getElementById("time").value;
  const sizeInput = document.getElementById("size").value;
  let size
  switch(sizeInput){
    case "3x3":
        size = 9
        break;
    case "4x4":
        size = 16
        break;
        
    case "5x5":
        size = 25
        break;
        
    case "10x10":
        size = 100
        break;
  }

  const albums = await fetchScrobblesAPI(userInput,timeInput, size);
  showImagesAlbum(albums, sizeInput);
}

function showImagesAlbum(albums, sizeInput) {
  const albumDiv = document.getElementById("images");
  albumDiv.innerHTML = "";
  albums.forEach((album) => {
    const img = document.createElement("img");
    img.src = album.image[3]["#text"];
    albumDiv.appendChild(img);
  });
  createGrid(sizeInput);
}

function createGrid(sizeInput){
    const images = document.getElementById("images");
    let fila = 0
    let columna = 0
    if(sizeInput == "3x3"){
        fila = 3
        columna = 3
    }else if(sizeInput == "4x4"){
        fila = 4
        columna = 4
    }else if(sizeInput == "5x5"){
        fila = 5
        columna = 5
    }else if(sizeInput == "10x10"){
        fila = 10
        columna = 10
    }
    console.log(fila, columna)
    images.style.gridTemplateColumns = `repeat(${columna}, 0fr)`
    images.style.gridTemplateRows = `repeat(${fila}, 0fr)`

 
}

document.getElementById("send").addEventListener("click", (e) => {
  const albumDiv = document.getElementById("images");
  albumDiv.innerHTML = "";
  main();

  e.preventDefault();
});