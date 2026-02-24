export function afficherCandidatures() {
    const voirCandidatures = document.querySelector('.voir_candidature')
    const buttonVoir = document.querySelectorAll('.button_voir')
    const buttonModifier = document.querySelectorAll('.button_modifier')
    const buttonFermerCandidatures = document.querySelector('.icon_close')
    const modifierCandidatures = document.querySelector('.modifier_candidature')

    buttonVoir.forEach(bv => {
        bv.addEventListener('click', () => {
            voirCandidatures.style.visibility = 'visible'
            voirCandidatures.style.opacity = '1'
        })
    });
    buttonFermerCandidatures.addEventListener('click', () => {
        voirCandidatures.style.visibility = 'hidden'
        voirCandidatures.style.opacity = '0'
    })
    buttonModifier.addEventListener('click', ()=>{
        voirCandidatures.style.visibility = 'hidden'
        voirCandidatures.style.opacity = '0'
        modifierCandidatures.style.visibility = 'visible'
        modifierCandidatures.style.opacity = '1'
    })
}