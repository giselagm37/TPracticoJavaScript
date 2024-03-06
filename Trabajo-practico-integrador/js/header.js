// Crear el elemento header
var header = document.getElementById('header');

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
loginLink.style.textDecoration = 'none';
// Agregar el enlace al div.login
loginDiv.appendChild(loginLink);

// Agregar todos los elementos creados al header
nav.appendChild(logoDiv);
nav.appendChild(menuDiv);
nav.appendChild(loginDiv);
header.appendChild(nav);

// Función para cerrar sesión
function cerrarSesion() {
    localStorage.removeItem("user");
}

try {
    let dato = localStorage.getItem("user");
    console.log(dato);
    if (dato !== null) { // Verifica si hay algún dato almacenado en el localStorage
        let usr = JSON.parse(dato);
        if (usr && usr.login === true) { // Verifica si 'usr' no es null y si tiene la propiedad 'login' establecida en true
            loginLink.textContent = usr.usuarioid;
            // Crear el div con la clase "logout"
            var logoutDiv = document.createElement('div');
            logoutDiv.className = 'logout';

            // Crear el enlace dentro del div.logout
            var logoutLink = document.createElement('a');
            logoutLink.href = 'index.html'; // Aquí debes especificar la página de cierre de sesión
            logoutLink.textContent = 'CERRAR SESIÓN';
            logoutLink.style.textDecoration = 'none';
            // Agregar el enlace al div.logout
            logoutDiv.appendChild(logoutLink);
            logoutLink.addEventListener('click', cerrarSesion); // Llama a la función cerrarSesion cuando se hace clic en el enlace de cerrar sesión
            nav.appendChild(logoutDiv);
        }
    }
} catch (e) {
    console.log(e);
}

 

