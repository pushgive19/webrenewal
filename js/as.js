// const form = document.querySelectorAll(".as__form");

// function handleClick() {
//   console.log(1);
// }
// function handle2Click() {
//   console.log(12);
// }

// function init() {
//   form.addEventListener("click", handleClick);

//   form.forEach(function (e) {
//     e.addEventListener("click", handle2Click);
//     const input = e.querySelector("input");
//     const inputAttr = input.getAttribute("checked");

//     if (inputAttr === true) {
//     }
//   });
// }
// init();

//file input 자동입력
const li = document.querySelector(".info__file"),
  fileHidden = li.querySelector(".file__hidden");

function handleChange(e) {
  const files = this.files;
  const div = document.createElement("div");
  div.classList.add("file__div");
  let inputValue = "";

  for (let i = 0; i < files.length; i++) {
    const fileName = files[i].name;
    const fileType = files[i].type;

    if (fileType.startsWith("image")) {
      const p = document.createElement("p");
      p.classList.add("file__p");
      p.innerText = fileName;
      div.appendChild(p);
    }
  }
  li.appendChild(div);
}


const asList = document.querySelector(".as__list"),
 asItem1 = document.querySelector(".as__item");
const asItem2 = document.querySelectorAll(".as__item")[1];

function adjustHeight(){
  asList.style.height = "650px";
}
function adjustHeightLong(){
  asList.style.height = "1700px";
}

function init() {
  fileHidden.addEventListener("change", handleChange);

  asItem2.addEventListener("click", adjustHeight);
  asItem1.addEventListener("click", adjustHeightLong);
}
init();

