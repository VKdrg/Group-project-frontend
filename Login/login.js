const pw = document.querySelector('#inputPw').value
const useremail = document.querySelector('#inputEmail').value
const icon = document.querySelector('#pwViewIcon')

async function Login(e) {
    e.preventDefault()

    console.log('you are in login');

    try {
        const response = await fetch('http://localhost:3000/api/login', {
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
        const jwt = data.connected.token
        localStorage.setItem('token', jwt)
        console.log(`token : ${jwt}`)
        return jwt
    }
    catch (error) {
        console.error(`error : ${error}`)
    }
    // window.location.href = "index.html"
}

const btnLogin = document.getElementById("loginForm").addEventListener("submit", Login)