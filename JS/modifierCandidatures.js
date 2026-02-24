export function modifierCandidatures() {
    const modifierCandidatures = document.querySelector('.modifier_candidature')
    const buttonModifier = document.querySelectorAll('.button_modifier')
    const buttonFermerCandidatures = document.querySelector('.icon_close')

    buttonModifier.forEach(bm => {
        bm.addEventListener('click', () => {
            modifierCandidatures.style.visibility = 'visible'
        })
    });
    buttonFermerCandidatures.addEventListener('click', () => {
        modifierCandidatures.style.visibility = 'hidden'
    })
}