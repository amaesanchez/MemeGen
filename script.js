const outputdiv = document.querySelector(".output");
const currImg = document.querySelector('input[name="imagefile"]');
const topText = document.querySelector('input[name="toptext"]');
const bottomText = document.querySelector('input[name="bottomtext"]');
const textSize = document.querySelector('#textsize');
const form = document.querySelector('#memeform');
const deleteBtns = document.querySelectorAll('div button');


function generateMeme(url, fontsize, topText, bottomText) {
  // create new elements to append to output
  const newDiv = document.createElement('div');
  const newimg = document.createElement('img');
  const top = document.createElement('p');
  const bottom = document.createElement('p');
  const btn = document.createElement('button')

  // DEBUG, don't know how to extract input file
  newimg.src = url;

  // change classes to make meme
  newDiv.classList.add('container');
  newimg.classList.add('memebg');
  top.classList.add('topcenter');
  bottom.classList.add('bottomcenter');

  // change text in p
  top.innerText = topText;
  bottom.innerText = bottomText;
  btn.innerText = "Delete";

  // change font size
  top.style.fontSize = fontsize + "px";
  bottom.style.fontSize = fontsize + "px";

  // append p to img & img to div -- load img
  outputdiv.append(newDiv);
  newDiv.append(newimg, top, bottom, btn);
}

//deletes entire div containing the meme
outputdiv.addEventListener("click", function(e) {
  if (e.target.tagName === "BUTTON") { //tagName is a key in the target obj
    e.target.parentElement.remove()
  }
});

//creates meme on submit & clears the inputs
form.addEventListener("submit", function(e) {
  e.preventDefault();
  const currFile = currImg.files['0']; //this is an object
  const url = URL.createObjectURL(currFile);
  var currTextSize = textSize.value;
  generateMeme(url, currTextSize, topText.value, bottomText.value);

  topText.value = '';
  bottomText.value = '';
  currImg.value = '';
});

//currImg.addEventListener('change', function(e) {
//})
