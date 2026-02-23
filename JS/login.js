export function login() {
    const pw = document.querySelector('#inputPw')
    const icon = document.querySelector('#pwViewIcon')
    
    function viewPassword() {
        if (pw.type === "password"){
            pw.type = "text"
        }
        else{
            pw.type = "password"
        }
    }

    icon.addEventListener("click", () => {
        viewPassword()
        icon.namespaceURI.replace('eye-outline', 'eye-off-outline')
    })


    // localStorage Token
    // regex mail

}