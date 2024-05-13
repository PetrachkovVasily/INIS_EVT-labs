const mediaQuery = window.matchMedia('(max-width: 768px)');
const currentHeader = document.querySelector(".inner_header");

// let header1440 = '<div class="upper_block"><a href="HomePage.html"><img id="logo" alt="Logo" src="icons/Logo.svg" class="Logo"/></a><div class="search_bar"><input class="search_string" placeholder="Поиск по категориям"></input><div class="search_btn"><img src="icons/searchIcon.svg" alt="searchIcon"></div></div><div class="side_btns"><button class="header_btn">Войти</button><img class="favorites svgImg" src="icons/Favorites.svg" alt="favorites"><img class="cart svgImg" src="icons/Cart.svg" alt="cart"></div></div><nav class="under_block"><button class="header_btn"><img class="menu_btn svgImg" src="icons/menu.svg" alt="menu">категория</button><a class="card_img_link" href="CategoryPage.html"><button class="header_btn">категория</button></a><a class="card_img_link" href="CategoryPage.html"><button class="header_btn">категория</button></a><a class="card_img_link" href="CategoryPage.html"><button class="header_btn">категория</button></a><a class="card_img_link" href="CategoryPage.html"><button class="header_btn">категория</button></a><a class="card_img_link" href="CategoryPage.html"><button class="header_btn">категория</button></a></nav>';
// let header768 = '<div class="upper_block"><a href="HomePage.html"><img id="logo" alt="Logo" src="icons/Logo.svg" class="Logo"/></a><div class="side_btns"><button class="header_btn">Войти</button><img class="favorites svgImg" src="icons/Favorites.svg" alt="favorites"><img class="cart svgImg" src="icons/Cart.svg" alt="cart"></div></div><nav class="under_block"><button class="header_btn"><img class="menu_btn svgImg" src="icons/menu.svg" alt="menu"></button><div class="search_bar"><input class="search_string" placeholder="Поиск по категориям"></input><div class="search_btn"><img src="icons/searchIcon.svg" alt="searchIcon"></div></div></nav>';

let burgerBtn = document.querySelector(".header_btn.upper");
let sideMenu = document.querySelector(".side_menu");
let crossBtn = document.querySelector(".cross_btn");
let themeBtn = document.querySelector(".theme_btn");

burgerBtn.addEventListener("click", showMenu);
crossBtn.addEventListener("click", hideMenu);
themeBtn.addEventListener("click", switchTheme);

let pageSvgArray = document.querySelectorAll('.svgImg');

if (!localStorage.getItem('isLight')) {
  localStorage.setItem('isLight', true);
}



if(localStorage.getItem('isLight') == "true") {
  document.querySelector("html").classList.remove("dark");
  document.querySelector("html").classList.add("light");
  localStorage.setItem('isLight', true);
  
  for (let svgImg of pageSvgArray) {
    svgImg.src = svgImg.src.replace('ALT', '');
  }
} else {
  document.querySelector("html").classList.remove("light");
  document.querySelector("html").classList.add("dark");
  localStorage.setItem('isLight', false);

  for (let svgImg of pageSvgArray) {
    let newStr1 = svgImg.src.split('');
    let newStr2 = svgImg.src.split('');
    newStr1 = newStr1.slice(40);
    newStr2 = newStr2.slice(0, 40);
    console.log("icons/ALT" + newStr1.join(""))
    svgImg.src = "icons/ALT" + newStr1.join("");
  }
}

function handleTabletChange(e) {
  if (e.matches) {
    burgerBtn = document.querySelector(".header_btn.upper");
  } else {
    burgerBtn = document.querySelector(".header_btn.under")
  }
  sideMenu = document.querySelector(".side_menu");
  burgerBtn.addEventListener("click", showMenu);
}

mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);

pageSvgArray = document.querySelectorAll('.svgImg');

function showMenu(event) {
  sideMenu.style.left = 0;
  sideMenu.style["boxShadow"] = "0px 3px 18px rgb(0, 0, 0)";
}

function hideMenu(event) {
  sideMenu.style.left = -345 + 'px';
  sideMenu.style["boxShadow"] = "0px 0px 0px rgb(0, 0, 0)";
}

function switchTheme(event) {
  if(localStorage.getItem('isLight') == "true") {
    document.querySelector("html").classList.remove("light");
    document.querySelector("html").classList.add("dark");
    localStorage.setItem('isLight', false);

    for (let svgImg of pageSvgArray) {
      let newStr1 = svgImg.src.split('');
      let newStr2 = svgImg.src.split('');
      newStr1 = newStr1.slice(40);
      newStr2 = newStr2.slice(0, 40);
      console.log("icons/ALT" + newStr1.join(""))
      svgImg.src = "icons/ALT" + newStr1.join("");
    }
  } else {
    document.querySelector("html").classList.remove("dark");
    document.querySelector("html").classList.add("light");
    localStorage.setItem('isLight', true);

    for (let svgImg of pageSvgArray) {
      svgImg.src = svgImg.src.replace('ALT', '');
    }
  }
}