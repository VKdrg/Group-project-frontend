async function Register(e) {
    e.preventDefault()

    const pw = document.querySelector('#inputPw').value
    const useremail = document.querySelector('#inputEmail').value
    const icon = document.querySelector('#pwViewIcon')

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
    }
    catch (error) {
        console.error(`Error : ${error}`)
    }
}
const btnRegister = document.getElementById("registerForm")
btnRegister.addEventListener("submit", (e) => {
    Register(e)
    window.location.href = '../Login/login.html'
})