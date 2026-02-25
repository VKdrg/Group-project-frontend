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

    icon.addEventListener("click", () => {
        viewPassword()
        icon.name.toggle('eye-outline')
        icon.name.toggle('eye-off-outline')
    })

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

    icon.addEventListener("click", () => {
        viewPassword()
        icon.name.toggle('eye-outline')
        icon.name.toggle('eye-off-outline')
    })

    // fetch api method post
    // regex mail
}