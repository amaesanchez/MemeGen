/*
currImg.addEventListener("change", () => {
  const imgDataURL = URL.createObjectURL(currImg.files[0]);
  image = new Image();
  image.src = imgDataURL;
})
*/

function generateMeme(currImg, topText, bottomText) {
  // create new elements to append to output
  const newDiv = document.createElement('div');
  const newimg = document.createElement('img');
  const top = document.createElement('p');
  const bottom = document.createElement('p');

  //DEBUG, topText & bottomText are being read correctly
  //but not showing on img
  //does show when img tag is removed
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

  // append p to img & img to div -- load img
  outputdiv.append(newDiv)
  newDiv.append(newimg)
  newimg.append(top, bottom)

}

function clearInput() {
    topText.value = '';
    bottomText.value = '';
}


const outputdiv = document.querySelector(".output");
const currImg = document.querySelector("#imagefile");
const topText = document.querySelector("#toptext");
const bottomText = document.querySelector("#bottomtext");
const form = document.querySelector('#memeform');

form.addEventListener("submit", function() {
  generateMeme(currImg, topText.value, bottomText.value);
  clearInput()
});

// delete.addEventListener("click", deleteLastMeme)?





// ------ just testing stuff
const meme = document.createElement("img");
const newDiv = document.createElement('div');
const topT = document.createElement('p');
const bottomT = document.createElement('p');
meme.setAttribute("src", "../Personal website/photos/me.jpeg")
meme.classList.add('memebg')
newDiv.classList.add('container');
topT.classList.add('topcenter');
bottomT.classList.add('bottomcenter');
topT.innerText = "try";
bottomT.innerText = "again";

console.log(newDiv)

outputdiv.append(newDiv)
newDiv.append(meme)
meme.append(bottomT, topT)
