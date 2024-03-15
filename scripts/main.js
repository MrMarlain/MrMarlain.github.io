const btns_toggle_theme = document.getElementsByClassName('toggle_theme');

for (let i = 0; i < btns_toggle_theme.length; i++){
    btns_toggle_theme[i].addEventListener('click', function(event) {
        if (dark_theme == true){
            btns_toggle_theme[i].firstChild.innerHTML = 'dark';
        }
        else {
            btns_toggle_theme[i].firstChild.innerHTML = 'white'
        }
        changeTheme(!dark_theme)
    })
}
