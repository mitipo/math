var bigPic = document.querySelector("#cup");
var smallPics = document.querySelectorAll(".small");
var isOpen = false;
for (var i = 0; i < smallPics.length; i++) {
  smallPics[i].addEventListener("click", changePic);
}
function changePic() {
  var newPic = this.src;
  bigPic.setAttribute("src", newPic);
}
var view = document.querySelector("#view");
view.addEventListener("click", function () {
  if (isOpen == false) {
    document.querySelector("#detail").style.display = "block";
    view.innerHTML = "상세 설명닫기";
    isOpen = true;
  } else {
    document.querySelector("#detail").style.display = "none";
    view.innerHTML = "상세 설명보기";
    isOpen = false;
  }
});
