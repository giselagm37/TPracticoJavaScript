 // Crear el elemento header
 var header = document.getElementById('header')

 // Crear el elemento nav
 var nav = document.createElement('nav');

 // Crear el div con la clase "logo"
 var logoDiv = document.createElement('div');
 logoDiv.className = 'logo';

 // Crear el enlace dentro del div.logo
 var logoLink = document.createElement('a');
 logoLink.href = 'index.html';

 // Crear la imagen dentro del enlace del logo
 var logoImg = document.createElement('img');
 logoImg.src = 'img/codear.png';
 logoImg.alt = '';

 // Agregar la imagen al enlace del logo y el enlace al div.logo
 logoLink.appendChild(logoImg);
 logoDiv.appendChild(logoLink);

 // Crear el div con la clase "menu"
 var menuDiv = document.createElement('div');
 menuDiv.className = 'menu';

 // Crear la lista ul dentro del div.menu
 var menuList = document.createElement('ul');

 // Crear los elementos de la lista y añadirlos al ul
 var menuItems = ['HOME', 'GALERIA', 'CONTACTANOS', 'NOSOTROS'];
 var menuLinks = ['index.html', 'galeria.html', 'contacto.html', 'nosotros.html'];

 for (var i = 0; i < menuItems.length; i++) {
     var menuItem = document.createElement('li');
     var menuLink = document.createElement('a');
     menuLink.href = menuLinks[i];
     menuLink.textContent = menuItems[i];
     menuItem.appendChild(menuLink);
     menuList.appendChild(menuItem);
 }


 // Agregar la lista ul al div.menu
 menuDiv.appendChild(menuList);

 // Crear el div con la clase "login"
 var loginDiv = document.createElement('div');
 loginDiv.className = 'login';

 // Crear el enlace dentro del div.login
 var loginLink = document.createElement('a');
 loginLink.href = 'login.html';
 loginLink.textContent = 'LOGIN';

 // Agregar el enlace al div.login
 loginDiv.appendChild(loginLink);

 // Agregar todos los elementos creados al header
 nav.appendChild(logoDiv);
 nav.appendChild(menuDiv);
 nav.appendChild(loginDiv);
 header.appendChild(nav);

