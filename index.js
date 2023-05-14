//importacion de las clases
import { Music } from './Music.js';
import { UI } from './UI.js';


//instancia del objeto ui de la clase UI
const ui = new UI();

//funcion principal
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
  //instancia del objeto musica de la clase Music
  const music = new Music(userInput, timeInput, size);
  
  const albums = await music.getTopAlbums(userInput,timeInput, size);

  ui.renderImages(albums, sizeInput);
  ui.showAlbumList(albums);
}

document.getElementById("send").addEventListener("click", (e) => {
  const userInput = document.getElementById("inputUser").value;
  const albumDiv = document.getElementById("images");
  if(userInput === ""){
    alert("Ingrese un usuario")
    return
  }
  albumDiv.innerHTML = "";
  main();

  e.preventDefault();
});