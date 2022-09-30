const url = "https://rickandmortyapi.com/api/character";
const charactersContainer = document.querySelector(".display-characters")
let slider = document.querySelector('slider')

async function rickAndmorty() {
  let response = await axios(url);
  displayCharacter(response.data.results);
}

rickAndmorty();

function displayCharacter(arr) {
  console.log(arr)
  arr.forEach((person) => {
    let characterHTML = `
    <div class="card">
   
      <img src="${person.image}" alt="${person.name}">
    </div>    
    `

    charactersContainer.insertAdjacentHTML("beforeend", characterHTML)
  })
}

// function slide () {
//   if (image_current == image_length){
//    image_current = 0;
//   } else {
//    image_current++;
//   }
//   document.slideshow.src = image_slide[image_current];
//  }

//  function auto () {
//   setInterval(slide, 1000);
//  }


// window.onload = function () {
//   slide(); // To show the 1st image
//   auto()
// }