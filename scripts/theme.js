let dark_theme = false

function changeTheme(dark) {
    let elemets = document.querySelectorAll(`.${dark == true ? 'white_theme' : 'dark_theme'}`);

    for (let i = 0; i < elemets.length; i++) {
        let element = elemets.item(i);
        element.classList.remove(dark == true ? 'white_theme' : 'dark_theme');
        element.classList.add(dark == true ? 'dark_theme' : 'white_theme');
    }  
    dark_theme = dark;
    setCookie("darktheme", dark_theme.toString());
}
