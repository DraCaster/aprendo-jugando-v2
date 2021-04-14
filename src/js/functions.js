const SOUND_SELECT = new Audio("../assets/sounds/others/ItemSelect.wav");


/**
 * Generate the code for the toolbar menu
 * @param {string} RouteHome
 * @param {string} RouteActivities
 * @return {void}
 */
const generateMenuToolbar = (RouteHome, RouteActivities) => {

    let div = createElement("div")
    div.className = "nav-wrapper"

    let title = createElement("a")
    title.textContent = " APRENDO JUGANDO"

    let ul = createElement("ul")
    ul.className = "right hide-on-med-and-down"

    let liHome = createElement("li")
    let linkHome = createElement("a")
    linkHome.href = RouteHome
    linkHome.textContent = "MENU"
    liHome.appendChild(linkHome)

    let liActivities = createElement("li")
    let linkActivities = createElement("a")
    linkActivities.href = RouteActivities
    linkActivities.textContent = "ACTIVIDADES"
    liActivities.appendChild(linkActivities)

    ul.appendChild(liHome)
    ul.appendChild(liActivities)

    div.appendChild(ul)
    div.appendChild(title)
    let nav = document.getElementById("nav")
    nav.appendChild(div)

}


/**
 * Returns a html tag unassigned to the dom
 * @param {string} element
 * @description element is a HTML element
 * @return {object}
 */
const createElement = element => {
    return document.createElement(element)
}

/**
 * Open a new webview
 * @param {string} route
 * @descriptor example route: "../AnotherRoute.html"
 * @return {void}
 */
const openView = route =>  {

    SOUND_SELECT.play()
        .then(() => {

        })
        .finally(() => {
            //This is for an loading animation
            setTimeout(function() {
                window.location.href = route;
            }, 300);
        })
}


const playSound = soundSrc => {
    const sound = new Audio(soundSrc)
    sound.play()
}

//Oculta un elemento html
//Id del elemento a ocultar
const hideElement = idElement => {
    let elem = document.getElementById(idElement)
    elem.classList.add("hideElement")
}

const viewElement = (idElement) => {
    let elem = document.getElementById(idElement)
    elem.classList.remove("hideElement")
}

const animationElement = (idElement,animation) => {
    let elem = document.getElementById(idElement)
    elem.classList.add(animation)
}

//Elimina animacion de un elemento
//Id del elemento a quitar la animacion
//clase que provee la animacion
const removeAnimation = (idElement, animation) => {
    let elem = document.getElementById(idElement)
    elem.classList.remove(animation)
}