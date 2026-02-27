function afficherCandidatures() {
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

function modifierCandidatures() {
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

export async function CreateJob() {
    // créa job : POST job
    const response = await fetch(`http://localhost:3000/api/job`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json', // à inclure si un payload est envoyé
            'Authorization': `Bearer ${localStorage.getItem("token")}`, // renseigner le token pour accéder aux routes protégées
        },
        body: JSON.stringify({
            job: document.querySelector('#jobname').value,
            sendDate: document.querySelector('#senddate').value
            // offerTypeId: ,
            // entrepriseId: ,
            // userId:
        })
    })
    const data = await response.json()
    console.log('you are in createJob')

    // fetch(`http://localhost:3000/api/job`, {
    //     method: "POST",
    //     headers: {
    //         'Content-Type': 'application/json', // à inclure si un payload est envoyé
    //         'Authorization': `Bearer ${localStorage.getItem("token")}`, // renseigner le token pour accéder aux routes protégées
    //     }})
    //     .then()

    /*      PAYLOAD "POST" JOB
        {
            "job": "test001",
            "sendDate": "12/12/12",
            "offerTypeId": 2,
            "entrepriseId": 1,
            "statusId": 1,
            "userId": 3
        }
    */

}

const btncreate = document.querySelector('#createbtn').addEventListener('submit', (e) => {
    e.preventDefault()
    CreateJob()
    console.log(CreateJob().data)
})