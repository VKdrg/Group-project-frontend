export function ViewProfile() {
    // view profile : fetch api method GET api/profil
}

export function EditProfile() {
    // edit profile : fetch api method PUT api/profile
}

export function DeleteAccount() {
    // delete account : fetch api method DELETE api/profile
}

export function Login() {
    // const pw = document.querySelector('#inputPw').value
    const icon = document.querySelector('#pwViewIcon')

    /*     --- icon eye ---     */
    // function viewPassword() {
    //     if (pw.type === "password") {
    //         pw.type = "text"
    //     }
    //     else {
    //         pw.type = "password"
    //     }
    // }



    const useremail = document.querySelector('#inputEmail')

    const body = {
        email: "admin@test.com",
        password: "admin1234"
    }

    async function loginRequest() {
        try {
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
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
    }


    loginRequest()

    // icon.addEventListener("click", () => {
    //     viewPassword()
    //     icon.name.toggle('eye-outline')
    //     icon.name.toggle('eye-off-outline')
    // })

    // fetch api method post
    // localStorage Token


}

export function Register() {
    const pw = document.querySelector('#inputPw')
    const icon = document.querySelector('#pwViewIcon')

    function viewPassword() {
        if (pw.type === "password") {
            pw.type = "text"
        }
        else {
            pw.type = "password"
        }
    }

    // icon.addEventListener("click", () => {
    //     viewPassword()
    //     icon.name.toggle('eye-outline')
    //     icon.name.toggle('eye-off-outline')
    // })

    // fetch api method post
    // regex mail
}