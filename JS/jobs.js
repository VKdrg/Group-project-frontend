export async function ListJobs() {
    // réccup tous : GET jobs
    const response = await fetch(`http://localhost:3000/api/jobs`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json', // à inclure si un payload est envoyé
            'Authorization': `Bearer ${localStorage.getItem("token")}`, // renseigner le token pour accéder aux routes protégées
        }
    })
    const data = await response.json()
    data.forEach(job => {
        const CompNameVw = document.querySelector('.nom h4')
        CompNameVw.textContent = job.job;
        console.log(job.job);

        const EditPanel = document.querySelector('.modifier_candidature')
        CompNameVw.textContent = data.job.value
    })
    
    const overviewnames = document.querySelector('.df .paragraph_1')
    const compname = document.querySelector('#compname').value
    const jobname = document.querySelector('#jobname').value
    overviewnames.innerHTML = `${compname} - ${jobname}`
}

/*
    "job": "Développeur Backend",
    "entreprise": 1,
    "offerType": 1,
    "status": 1,
    "sendDate": "2026-02-01",
    "notes": "Candidature envoyée via LinkedIn"
*/


/**     ASYNC FUNCTION
 *   async function updatePost() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1',{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: 1,
                    title: 'Post modifié',
                    body: 'Nouveau contenu',
                userId: 1
                })
            })
            const data = await response.json()
            console.log('Post modifié :', data)
        }
        catch (err) {
            console.error('Erreur:', err)
        }
    }
*/

export function CreateJob() {
    // créa job : POST job

}

export function ViewJob() {
    // details job : GET job/{id}
}

export function EditJob() {
    // modif job : PUT job/{id}
}

export function DeleteJob() {
    // delete job : DELETE job/{id}
}

/**     ASYNC FUNCTION
 *   async function updatePost() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1',{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ifd: 1,
                title: 'Post modifié',
                body: 'Nouveau contenu',
            userId: 1
            })
        })
        const data = await response.json()
        console.log('Post modifié :', data)
    }
    catch (err) {
        console.error('Erreur:', err)
    }
}
*/

/**     .THEN ... .CATCH
 *  version promise
  function deletePost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => console.log("post supprimé :", data))
      .catch(err => console.error("Erreur :", err))
  }
  deletePost() // appel 
*/