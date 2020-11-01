
export const playSound = routeSound => {
    let sound = new Audio('../assets/sounds/'+routeSound)
    sound.play()
}