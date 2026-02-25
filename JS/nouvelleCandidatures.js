export function nouvelleCandidatures() {
    const nouvelleCandidatures = document.querySelector('.nouvelle_candidature')
    const buttonAjout = document.querySelector('.button_ajout_candidatures')
    const buttonFermerCandidatures = document.querySelectorAll('.icon_close')
    const buttonSave = document.querySelector('.button_save')

    buttonAjout.addEventListener('click', () => {
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