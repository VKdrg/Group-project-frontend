export function nouvelleCandidatures() {
    const nouvelleCandidatures = document.querySelector('.nouvelle_candidature')
    const buttonAjout = document.querySelector('.button_ajout_candidatures')
    const buttonFermerCandidatures = document.querySelectorAll('.icon_close')
    const buttonSave = document.querySelector('.button_save')
    const voirCandidatures = document.querySelector('.voir_candidature')
    const modifierCandidatures = document.querySelector('.modifier_candidature')

    buttonAjout.addEventListener('click', () => {
        voirCandidatures.style.visibility = 'hidden'
        voirCandidatures.style.opacity = '0'
        modifierCandidatures.style.visibility = 'hidden'
        modifierCandidatures.style.opacity = '0'
        nouvelleCandidatures.style.visibility = 'visible'
        nouvelleCandidatures.style.opacity = '1'
    })
    buttonFermerCandidatures.forEach(bf => {
        bf.addEventListener('click', () => {
            nouvelleCandidatures.style.visibility = 'hidden'
            nouvelleCandidatures.style.opacity = '0'
        })
    });
    buttonSave.addEventListener('click', ()=>{
        nouvelleCandidatures.style.visibility = 'hidden'
        nouvelleCandidatures.style.opacity = '0'
        buttonSave.style.color = 'black'
    })
}