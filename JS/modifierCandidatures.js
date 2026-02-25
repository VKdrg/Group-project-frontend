export function modifierCandidatures() {
    const modifierCandidatures = document.querySelector('.modifier_candidature')
    const buttonModifier = document.querySelectorAll('.button_modifier')
    const buttonFermerCandidatures = document.querySelector('.icon_close')
    const buttonSave = document.querySelector('.button_save')

    buttonModifier.forEach(bm => {
        bm.addEventListener('click', () => {
            modifierCandidatures.style.visibility = 'visible'
            modifierCandidatures.style.opacity = '1'
        })
    });
    buttonFermerCandidatures.addEventListener('click', () => {
        modifierCandidatures.style.visibility = 'hidden'
        modifierCandidatures.style.opacity = '0'
    })
    buttonSave.addEventListener('click', ()=>{
        modifierCandidatures.style.visibility = 'hidden'
        modifierCandidatures.style.opacity = '0'
        buttonSave.style.color = 'black'
    })
}