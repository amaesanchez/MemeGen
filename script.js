/*
currImg.addEventListener("change", () => {
  const imgDataURL = URL.createObjectURL(currImg.files[0]);
  image = new Image();
  image.src = imgDataURL;
})
*/

const outputdiv = document.querySelector(".output");
const currImg = document.querySelector('input[name="imagefile"]');
const topText = document.querySelector('input[name="toptext"]');
const bottomText = document.querySelector('input[name="bottomtext"]');
const form = document.querySelector('#memeform');
const deleteBtns = document.querySelectorAll('div button');


function generateMeme(currImg, topText, bottomText) {
  // create new elements to append to output
  const newDiv = document.createElement('div');
  const newimg = document.createElement('img');
  const top = document.createElement('p');
  const bottom = document.createElement('p');
  const btn = document.createElement('button')

  console.log(newDiv);

  // DEBUG, don't know how to extract input file
  // img.setAttribute("src", "#");

  // change classes to make meme
  newDiv.classList.add('container');
  newimg.classList.add('memebg');
  top.classList.add('topcenter');
  bottom.classList.add('bottomcenter');

  // change text in p
  top.innerText = topText;
  bottom.innerText = bottomText;
  btn.innerText = "Delete";

  // append p to img & img to div -- load img
  outputdiv.append(newDiv);
  newDiv.append(newimg, top, bottom, btn);
}

form.addEventListener("submit", function(e) {
  generateMeme(currImg, topText.value, bottomText.value);
  topText.value = '';
  bottomText.value = '';
});

for (let btn of deleteBtns) {
  btn.addEventListener("click", function(e) {
    e.target.parentElement.remove()
  });
}


// DEBUG, how to save img WITH text?
