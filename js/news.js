const newImg = document.querySelectorAll(".news__img-js");

function newAni(e) {
  const target = e.target;
  target.classList.add("active");
  console.log(target.classList);
  // if()
}

function init() {
  console.log(newImg);
  newImg.forEach((e) => {
    e.addEventListener("mouseenter", newAni);
  });
  // newImg[1].addEventListener("mouseenter", newAni);
  // newImg[0].addEventListener("mouseenter", newAni);

  // newImg.addEventListener("mouseover", overHandler);
}
init();
