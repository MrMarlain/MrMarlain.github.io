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


function checkSize(event) {
    let sw = this.window.innerWidth / this.window.innerHeight;

    let el_content = this.document.getElementById("content");
    let el_sidebar = this.document.getElementById("sidebar");
    let el_menu = this.document.getElementById("menu");

    if (sw < 1.2) {  // mobile
        el_content.style.flexDirection = "column";
        // max-width: 300px;
        el_sidebar.style.maxWidth = 'none';

    } 
    else {  // desktop
        el_content.style.flexDirection = "row";
        el_sidebar.style.maxWidth = '300px';
    }
}

window.addEventListener('resize', checkSize)
checkSize()
