const itemImgArray = [
  {
    id: 0,
    url: "itemImages/first.jpg"
  },
  {
    id: 1,
    url: "itemImages/second.jpg"
  },
  {
    id: 2,
    url: "itemImages/third.jpg"
  },
  {
    id: 3,
    url: "itemImages/forth.jpg"
  },
  {
    id: 4,
    url: "itemImages/fifth.jpg"
  },
  {
    id: 5,
    url: "itemImages/sixth.jpg"
  },
  {
    id: 6,
    url: "itemImages/seventh.jpg"
  },
  {
    id: 7,
    url: "itemImages/eightth.jpg"
  },
  {
    id: 8,
    url: "itemImages/nineth.jpg"
  },
  {
    id: 9,
    url: "itemImages/tenth.jpg"
  },
  {
    id: 10,
    url: "itemImages/eleventh.jpg"
  },
  {
    id: 11,
    url: "itemImages/twelfth.jpg"
  }
];

let targetPosition = 0;
let previousTarget = 0;

let itemImg = document.querySelector(".item_img");
let left = document.querySelector(".left");
let right = document.querySelector(".right");

itemImg.src = itemImgArray[targetPosition].url;

let position = 0;
const gap = 6;
let height = 0;
let cards = document.querySelector(".carousel_cards");

addPictures(itemImgArray);

let visibleCarousel = parseInt(cards.offsetHeight);

window.addEventListener('resize', (e) => {
  cards = document.querySelector(".carousel_cards");
  visibleCarousel = parseInt(cards.offsetHeight);
  height = parseInt(document.querySelector(".card_options").offsetHeight);

  if (0 < ((height + gap)*12-gap - visibleCarousel) - visibleCarousel) {
    position = 0;
    cards.style.top = 0 + "px";
  }
});



function addPictures(itemImgArray) {
  itemImgArray.forEach(card => {
    let img = document.createElement('img');
    img.src = card.url;
    img.alt = card.id;
    img.className = "card_options";
    img.addEventListener("click", showItem);
    img.addEventListener("click", animateImg)
    cards.append(img);
    height = parseInt(img.offsetHeight);
  });
}

function switchRight(event) {

  let difference = -((height + gap)*12-gap - visibleCarousel);
  if (targetPosition <= 10) {

    previousTarget = targetPosition;
    targetPosition++;
    animateImg(event)
    setTimeout(() => {
      itemImg.src = itemImgArray[targetPosition].url;
    }, 100)
  }
  if (position <= difference) {
    return;
  }
  if (position >= difference - height && position <= difference + height) {
    position = difference;
  } else {
    position -= height + gap;
  }
  cards.style.top = position + "px";
}

function switchLeft(event) {
  if (targetPosition >= 1) {

    previousTarget = targetPosition;
    targetPosition--;
    animateImg(event)
    setTimeout(() => {
      itemImg.src = itemImgArray[targetPosition].url;
    }, 100)
  }
  if (position >= 0) {
    return;
  }
  if (position <= height && position >= -height) {
    position = 0;
  } else {
    position += height + gap;
  }
  cards.style.top = position + "px";
}

function showItem(event) {
  setTimeout(() => {
    itemImg.src = event.target.src;
  }, 100)
  previousTarget = targetPosition;
  targetPosition = parseInt(event.target.alt);
}

function animateImg(event) {

  itemImg.classList.add("animate");
  setTimeout(() => {
    itemImg.classList.remove("animate");
  }, 200)
}