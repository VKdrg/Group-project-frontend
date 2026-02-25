export function afficherCandidatures() {
    const voirCandidatures = document.querySelector('.voir_candidature')
    const buttonVoir = document.querySelectorAll('.button_voir')
    const buttonModifier = document.querySelectorAll('.button_modifier')
    const buttonFermerCandidatures = document.querySelectorAll('.icon_close')
    const modifierCandidatures = document.querySelector('.modifier_candidature')
    const nouvelleCandidatures = document.querySelector('.nouvelle_candidature')


    buttonVoir.forEach(bv => {
        bv.addEventListener('click', () => {
            modifierCandidatures.style.visibility = 'hidden'
            modifierCandidatures.style.opacity = '0'
            nouvelleCandidatures.style.visibility = 'hidden'
            nouvelleCandidatures.style.opacity = '0'
            voirCandidatures.style.opacity = '1'
            voirCandidatures.style.visibility = 'visible'
        })
    });
    buttonFermerCandidatures.forEach(bfc => {
        bfc.addEventListener('click', () => {
            voirCandidatures.style.opacity = '0'
            voirCandidatures.style.visibility = 'hidden'
        })
    });
    buttonModifier.forEach(bm => {
        bm.addEventListener('click', () => {
            voirCandidatures.style.opacity = '0'
            voirCandidatures.style.visibility = 'hidden'
            modifierCandidatures.style.visibility = 'visible'
        })
    });
}