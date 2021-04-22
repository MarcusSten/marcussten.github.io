var photo = ["1", "2", "3"];
var num = "0";

function changeLeft(){
    num++;
    if(num == photo.length){
        num = "0";
    }
    changeImg.src = "img/small/" + photo[num] + ".jpg";
}

function changeRight(){
    num--;
    if(num == -1){
        num = photo.length - 1;
    }
    changeImg.src = "img/small/" + photo[num] + ".jpg";
}
