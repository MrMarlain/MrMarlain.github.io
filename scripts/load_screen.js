const page_title = document.title

let theme_from_cookie = getCookie('darktheme')
console.log(`theme_from_cookie="${theme_from_cookie}"`)


setTitle('please wait')
window.onload = function() {
    hideElementByID('load_screen', true, 0.125);
    setTitle(page_title)
}
