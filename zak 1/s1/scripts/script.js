/* 
created by MrMarlain
*/

const url_params = new URLSearchParams(document.location.search)
function getUrlParam(param_name, default_value = null) {
    return url_params.has(param_name) ? url_params.get(param_name) : default_value;
}
function checkParam(elem, param_name) {
    if (elem.getAttribute(param_name) != null) return true
    else return false
}
function checkClass(elem, class_name) {
    return elem.classList.contains(class_name)
}


// buttons

function btnClickFor(event, elem_btn) {
    const elem_for = document.getElementById(elem_btn.getAttribute("for"))
    elem_for.checked = !elem_for.checked
    elem_for.dispatchEvent(new Event("change"))
}
function btnIsActive(elem_btn) {
    return checkParam(elem_btn, "enable")
}
function btnDisable(elem_btn) {
    elem_btn.removeAttribute("enable")
}
function btnEnable(elem_btn) {
    elem_btn.setAttribute("enable", "")
}

function updateButtons() {
    document.querySelectorAll("button.btn").forEach(function(elem_btn) {
        elem_btn.addEventListener
        elem_btn.onclick = function(event) {

            // for
            if (checkParam(elem_btn, "for")) 
                btnClickFor(event, elem_btn)
            
            // switch
            if (checkClass(elem_btn, "switch")) {
                if (btnIsActive(elem_btn)) btnDisable(elem_btn)
                else btnEnable(elem_btn)
            }

            // href
            if (checkParam(elem_btn, "href")) {
                goTo(elem_btn.getAttribute("href"))
            }
        }
    })
}


// theme

let _theme_change_functions = []
function addEventListenerThemeChange(func) {
    _theme_change_functions.push(func)
}
function _runThemeChangeFunctions(event) {
    _theme_change_functions.forEach(function(func_and_args) {
        func_and_args(event)
    })
}
const elem_theme = document.getElementById("theme")
elem_theme.addEventListener("change", function(event) {_runThemeChangeFunctions(event)})

function getTheme() {
    if (elem_theme.checked) return true
    else return false
}
function setTheme(enable) {
    if (enable === true || enable === "true" || enable === 1)
        elem_theme.checked = true
    else elem_theme.checked = false
    elem_theme.dispatchEvent(new Event("change"))
}


// goto 

let _go_to_kwargs = {}
let _go_to_functions = []
function addGoToKwargs(kwargs) {
    Object.keys(kwargs).forEach(function(key) {
        _go_to_kwargs[key] = kwargs[key]
    })
}
function addGotoFunction(func) {
    _go_to_functions.push(func)
}
function clearGoToKwargs() {
    _go_to_kwargs = {}
}
function goTo(filename, kwargs = {}) {
    addGoToKwargs(kwargs)
    _go_to_functions.forEach(function(func) {func()})

    document.location.href = `${filename}?${new URLSearchParams(_go_to_kwargs).toString()}`
}


// init

updateButtons()
addGotoFunction(function(){addGoToKwargs({"theme": getTheme()})})
setTheme(getUrlParam("theme", false))
