import { darkMode } from "./JS/darkmode.js"
import { observe } from "./JS/observer.js"

darkMode()
observe()

const modifierCandidatures = document.querySelector('.modifier_candidature')
const buttonModifier = document.querySelectorAll('.button_modifier')
const buttonFermerCandidatures = document.querySelector('.icon_close')

buttonModifier.forEach(bm => {
    bm.addEventListener('click', () => {
        modifierCandidatures.style.display = 'flex'
    })  
});
buttonFermerCandidatures.addEventListener('click', () => {
    modifierCandidatures.style.display = 'none'
})