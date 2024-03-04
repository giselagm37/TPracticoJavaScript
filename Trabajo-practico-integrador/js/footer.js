// Crear el elemento footer
var footer = document.createElement('footer');

// Crear el elemento div con la clase "copyright"
var copyrightDiv = document.createElement('div');
var parrafo = document.createElement('p');
parrafo.className="parrafo"
copyrightDiv.className="parrafo"
parrafo.textContent = '© 2024 - Todos los derechos reservados';
copyrightDiv.appendChild(parrafo)
// Crear el div con la clase "menu"
var menuDiv = document.createElement('div');
menuDiv.className = 'menu';

// Crear la lista ul dentro del div.menu
var menuList = document.createElement('ul');

// Crear los elementos de la lista y añadirlos al ul
var linkImgs= ["img/facebook.png","img/instagram.png","img/linkedin.png","img/whatsapp.png"]
var menuItems = ['', '', '', ''];
var menuLinks = ['https://www.facebook.com/profile.php?id=61557171952021&locale=es_LA','#', '#', '#'];

for (var i = 0; i < menuItems.length; i++) {
    var menuItem = document.createElement('li');
    var menuLink = document.createElement('a');
    var imgItem = document.createElement('img')
    imgItem.src= linkImgs[i];
    menuLink.href = menuLinks[i];
    menuLink.textContent = menuItems[i];
    
    menuItem.appendChild(menuLink);
    menuList.appendChild(menuItem);
    menuLink.appendChild(imgItem)
    console.log(menuItem)
}

// Agregar la lista ul al div.menu
menuDiv.appendChild(menuList);

// Agregar el div al footer
footer.appendChild(menuDiv);
footer.appendChild(copyrightDiv);

// Agregar el footer al final del cuerpo del documento
document.body.appendChild(footer);
