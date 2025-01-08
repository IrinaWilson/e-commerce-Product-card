let productImg = document.getElementById("productImg");
let btn = document.getElementsByClassName("btn");

btn[0].onclick = function () {
  for (bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
  productImg.src = "images/img1.png";
};
btn[1].onclick = function () {
  for (bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
  productImg.src = "images/img2.png";
};
btn[2].onclick = function () {
  for (bt of btn) {
    bt.classList.remove("active");
  }
  this.classList.add("active");
  productImg.src = "images/img3.png";
};
