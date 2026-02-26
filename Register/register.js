const pw = document.querySelector('#inputPw').value
const useremail = document.querySelector('#inputEmail').value
const icon = document.querySelector('#pwViewIcon')

async function Register(e) {
    e.preventDefault()

    console.log('you are in register')

    try {
        const response = await fetch('http://localhost:3000/api/sign', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: useremail,
                password: pw
            })
        })
        const data = await response.json()
        console.log('FDP')
        // redirect login
    }
    catch (error) {
        console.error(`Error : ${error}`)
    }

    // regex mail

}

const btnRegister = document.getElementById("registerForm").addEventListener("submit", Register)