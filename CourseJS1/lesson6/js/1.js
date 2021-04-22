function init(){

    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = changeBigPicture;
        images[i].onerror = errorLoadImg;
    }
}
function errorLoadImg(e){
    e.target.src='https://upload.wikimedia.org/wikipedia/commons/9/9a/%D0%9D%D0%B5%D1%82_%D1%84%D0%BE%D1%82%D0%BE.png'
     alert("Error load img");
    
}
 function changeBigPicture(eventObj) {
    var appDiv = document.getElementById("big_picture");
      appDiv.innerHTML = "";	
      var eventElement = eventObj.target;
      var imageNameParts = eventElement.id.split("_");
      var src = "./img/big/" + imageNameParts[1] + ".jpg";
      var imageDomElement = document.createElement("img");
      imageDomElement.src = src;
    imageDomElement.onerror = errorLoadImg;
       appDiv.appendChild(imageDomElement);
  
  }
        
init();