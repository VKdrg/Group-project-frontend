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
    })

    buttonFermerCandidatures.forEach(bfc => {
        bfc.addEventListener('click', () => {
            voirCandidatures.style.opacity = '0'
            voirCandidatures.style.visibility = 'hidden'
        })
    })

    buttonModifier.forEach(bm => {
        bm.addEventListener('click', () => {
            voirCandidatures.style.opacity = '0'
            voirCandidatures.style.visibility = 'hidden'
            modifierCandidatures.style.visibility = 'visible'
        })
    })
}

export function modifierCandidatures() {
    const modifierCandidatures = document.querySelector('.modifier_candidature')
    const buttonModifier = document.querySelectorAll('.button_modifier')
    const buttonFermerCandidatures = document.querySelector('.icon_close')
    const buttonSave = document.querySelector('.button_save')
    const voirCandidatures = document.querySelector('.voir_candidature')
    const nouvelleCandidatures = document.querySelector('.nouvelle_candidature')

    buttonModifier.forEach(bm => {
        bm.addEventListener('click', () => {
            voirCandidatures.style.visibility = 'hidden'
            voirCandidatures.style.opacity = '0'
            nouvelleCandidatures.style.visibility = 'hidden'
            nouvelleCandidatures.style.opacity = '0'
            modifierCandidatures.style.visibility = 'visible'
            modifierCandidatures.style.opacity = '1'

        })
    })

    buttonFermerCandidatures.addEventListener('click', () => {
        modifierCandidatures.style.visibility = 'hidden'
        modifierCandidatures.style.opacity = '0'
    })

    buttonSave.addEventListener('click', () => {
        modifierCandidatures.style.visibility = 'hidden'
        modifierCandidatures.style.opacity = '0'
    })
}