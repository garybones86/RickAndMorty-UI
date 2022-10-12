const url = "https://rickandmortyapi.com/api/character";
const charactersContainer = document.querySelector(".slider");
async function rickAndmorty() {
  let response = await axios(url);
  slider(response.data.results);
}
rickAndmorty();

function slider(arr) {
  console.log(arr);

  arr.forEach((person) => {
    let characterHTML = `
    <div class="slide">
    
      <img class="image" src="${person.image}" alt="${person.name}">
    </div>
    `;
    charactersContainer.insertAdjacentHTML("beforeend", characterHTML);
  });

  const slides = document.querySelectorAll(".slide");

  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${i * 100}%)`;
  });
  const nextSlide = document.querySelector(".btn-next");
  const prevSlide = document.querySelector(".btn-prev");

  let curSlide = 0;
  let maxSlide = slides.length - 1;

  nextSlide.addEventListener("click", function () {
   
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${100 * (i - curSlide)}%)`;
    });
  });

  prevSlide.addEventListener("click", function () {
    if (curSlide === 0) {
      curSlide = maxSlide;
    } else {
      curSlide--;
    }

    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${100 * (i - curSlide)}%)`;
    });
  });
}
