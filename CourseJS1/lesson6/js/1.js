function init(){

    var images = document.getElementsByTagName("img");
        for (var i = 0; i < images.length; i++) {
        images[i].onclick = changeBigPicture;
        }
    }
    function changeBigPicture(eventObj){
        var appDiv = document.getElementById("big_picture");
        appDiv.innerHTML = "";
        var eventElement = eventObj.target;
        var imageNameParts = eventElement.id.split("_");
        var src = "img/big/" + imageNameParts[1] + ".jpg";
        if(src.onerror == true){
            alert("Картинки не существует");
        };
        var imageDomElement = document.createElement("img");
        imageDomElement.src = src;
        appDiv.appendChild(imageDomElement);
        
    }
    function alarm(){
        alert("dfdfd");
       }
    
    window.onload = init;