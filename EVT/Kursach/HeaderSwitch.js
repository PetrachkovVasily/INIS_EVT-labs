const mediaQuery = window.matchMedia('(max-width: 768px)');
const currentHeader = document.querySelector(".inner_header");

let header1440 = '<div class="upper_block"><img alt="Logo" src="icons/Logo.svg" class="Logo"/><div class="search_bar"><input class="search_string" placeholder="Поиск по категориям"></input>      <div class="search_btn"><img src="icons/searchIcon.svg" alt="searchIcon"></div></div><div class="side_btns"><button class="header_btn">Войти</button><img class="favorites" src="icons/Favorites.svg" alt="favorites"><img class="cart" src="icons/Cart.svg" alt="cart"></div></div><nav class="under_block"><button class="header_btn"><img class="menu_btn" src="icons/menu.svg" alt="menu">категория</button><button class="header_btn">категория</button><button class="header_btn">категория</button><button class="header_btn">категория</button><button class="header_btn">категория</button><button class="header_btn">категория</button></nav>';
let header768 = '<div class="upper_block"><img alt="Logo" src="icons/Logo.svg" class="Logo"/><div class="side_btns"><button class="header_btn">Войти</button><img class="favorites" src="icons/Favorites.svg" alt="favorites"><img class="cart" src="icons/Cart.svg" alt="cart"></div></div><nav class="under_block"><button class="header_btn"><img class="menu_btn" src="icons/menu.svg" alt="menu"></button><div class="search_bar"><input class="search_string" placeholder="Поиск по категориям"></input><div class="search_btn"><img src="icons/searchIcon.svg" alt="searchIcon"></div></div></nav>';

function handleTabletChange(e) {
  if (e.matches) {
    currentHeader.innerHTML = header768;
  } else {
    currentHeader.innerHTML = header1440;
  }
}

mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);