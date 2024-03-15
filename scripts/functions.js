
function hideElementByID(id = '', animation = false, time = 0.5) {
    function hideElement(){
        element_style.display = 'none';
    }

    let element_style = document.getElementById(id).style;
    
    if (animation == false) {
        hideElement()
    }
    else {
        element_style.animation = `hide ${time}s`;
        element_style.animationFillMode = 'forwards'

        setTimeout(hideElement, time*1000);
    }
}

function setTitle(text) {
    document.title = text
}

function setCookie(name, value) {
    console.log(name, value)
    document.cookie = `${name}=${value}`
}

function getCookie(name) {
    document.cookie.split("; ").find((row) => row.startsWith(`${name}=`))?.split("=")[1];
}
