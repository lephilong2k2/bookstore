var index = 1;
function changeImage(){
    var imgs=["banner1.jpg", "banner2.jpg", "banner3.jpg"];
    document.getElementById('img').src= imgs[index];
    index++;
    if(index == 3){
        index = 0;
    }
}
setInterval(changeImage,2000);
                