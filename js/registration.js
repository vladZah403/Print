const login = document.querySelector('#login');
const RegistrForm = document.querySelector('#reg');
const Registr = document.querySelector('#Registr')
const loginForm = document.querySelector('#log')
let batRegistr = document.querySelector('.registr')
const Main = document.querySelector('#main')
const mainRegistr = document.querySelector('#mainRegistr')
const message = document.querySelector('.message')

let contact_bat = document.querySelector(".cont")
let contact = document.querySelector(".contact")

let about_button=document.querySelector('.about_us_button')
let about = document.querySelector('.about_us')

let mainPersonalAdmin = document.querySelector('#mainPersonalAdmin')

let certif_button = document.querySelector('.certif')
let certif_info = document.querySelector('.certificate')

const at = document.querySelector('#at')
const key = document.querySelector('#key')
const user = document.querySelector('#user')

const keyAdmin = document.querySelector('#keyAdmin')
const userAdmin = document.querySelector('#userAdmin')

const Exit = document.querySelector(".Exit")
const ExitAdmin = document.querySelector(".ExitAdmin")
const textEmail =document.querySelector("#textEmail")

let textUsername = document.querySelector('#textUsername')

batRegistr.addEventListener('click', () => {
    Main.style.display = 'none'
    mainRegistr.style.display = ''
    contact.style.display='none'
    about.style.display ='none'
    certif_info.style.display = 'none'
    batRegistr.classList.add('act')
    contact_bat.classList.remove('act')
    about_button.classList.remove('act')
    certif_button.classList.remove('act')

})

const carentUser = {
    Login: '',
    UserPassword: '',
    UserEmail: ''
}

login.addEventListener('click', () => {
    RegistrForm.style.display = 'none'
    loginForm.style.display = ''
})
Registr.addEventListener('click', () => {
    loginForm.style.display = 'none'
    RegistrForm.style.display = ""
})

const regUser = /^[a-zA-Z]/g
const regPassword = /^[0-9][a-zA-Z0-9_-]{7,19}/g
const regMail = /^[a-zA-Z][0-9a-zA-Z_]{5,20}@[a-z]{2,12}\.[a-z]{2,12}/g;

let UserReg = ''
let UserPas = ''
let UserMail = ''
document.querySelector('.Us_Reg').addEventListener('input', () => {
    UserReg = document.querySelector('.Us_Reg').value;
})

document.querySelector('.Pas ').addEventListener('input', () => {
    UserPas = document.querySelector(' .Pas ').value;
})

document.querySelector(' .UserMail ').addEventListener('input', () => {
    UserMail = document.querySelector(' .UserMail ').value;
})

const submitReg = document.querySelector('.submitReg')


const mainPersonal = document.querySelector('#mainPersonal')

console.log(batRegistr.classList.contains('registr'));

submitReg.addEventListener('click', () => {
    console.log(UserReg.match(regUser));
    console.log(UserPas.match(regPassword));
    console.log(UserMail.match(regMail))

    let userProver = JSON.parse(localStorage.getItem(UserReg))

    console.log(userProver);

    if (userProver !== null) {
        console.log(userProver)
        message.innerHTML = ' User with this username already exists'
    } else if (UserReg && UserReg.match(regUser) !== null && UserPas.match(regPassword) !== null && UserMail.match(regMail) !== null) {

        carentUser.Login = UserReg;
        carentUser.UserPassword = UserPas;
        carentUser.UserEmail = UserMail

        let objUser = JSON.stringify(carentUser)

        localStorage.setItem(`${UserReg}`, `${objUser}`);



        console.log(carentUser);

        Main.style.display = ''
        mainRegistr.style.display = 'none'
        mainPersonal.style.display = 'none'
        about.style.display ='none'
        contact.style.display = 'none'
        certif_info.style.display = 'none'
        batRegistr.classList.remove('act')
        contact_bat.classList.remove('act')
        about_button.classList.remove('act')
        certif_button.classList.remove('act')


        batRegistr.innerHTML = '<i class="fa-regular fa-user"></i>'

        message.innerHTML = ''

        batRegistr.classList.remove('registr');
        batRegistr.classList.add('userBox');
        batRegistr = document.querySelector('.userBox')

        textUsername.value = `${UserReg}`
        
        user.innerHTML = ` ${UserReg}`

        key.innerHTML = ` ${UserPas}`

        at.innerHTML = ` ${UserMail}`

        
        
    } else if (UserReg.match(regUser) == null) {
        message.innerHTML = 'You entered an invalid username'
    } else if (UserPas.match(regPassword) == null) {
        message.innerHTML = 'You entered an incorrect password'
    } else if (UserMail.match(regMail) == null) {
        message.innerHTML = 'You entered an invalid E-mail'
    }

})



const logo = document.querySelector('.logo')

batRegistr.addEventListener('click', () => {
    if (batRegistr.classList.contains('userBox') !== false) {
        if(nameLog === 'admin'){
            mainPersonalAdmin.style.display =''
            mainPersonal.style.display = 'none'
            Main.style.display = 'none'
            mainRegistr.style.display = 'none'
            about.style.display ='none'
            contact.style.display = 'none'
            certif_info.style.display = 'none'

            batRegistr.classList.add('act')
            contact_bat.classList.remove('act')
            about_button.classList.remove('act')
            certif_button.classList.remove('act')
        } else {
            mainPersonalAdmin.style.display ='none'
            mainPersonal.style.display = ''
            Main.style.display = 'none'
            mainRegistr.style.display = 'none'
            about.style.display ='none'
            contact.style.display = 'none'
            certif_info.style.display = 'none'

            batRegistr.classList.add('act')
            contact_bat.classList.remove('act')
            about_button.classList.remove('act')
            certif_button.classList.remove('act') 
        }
        

    }
})


contact_bat.addEventListener('click', ()=>{
    contact.style.display = ''
    contact_bat.classList.add('act')
    about_button.classList.remove('act')
    batRegistr.classList.remove('act')
    certif_button.classList.remove('act')
    Main.style.display='none'
    about.style.display ='none'
    mainRegistr.style.display = 'none'
    mainPersonal.style.display = 'none'
    certif_info.style.display = 'none'
    mainPersonalAdmin.style.display ='none'

})
about_button.addEventListener('click', ()=>{
    about.style.display =''
    about_button.classList.add('act')
    contact_bat.classList.remove('act')
    batRegistr.classList.remove('act')
    certif_button.classList.remove('act')

    contact.style.display = 'none'
    Main.style.display='none'
    mainPersonalAdmin.style.display ='none'
    mainRegistr.style.display = 'none'
    mainPersonal.style.display = 'none'
    certif_info.style.display = 'none'

})

certif_button.addEventListener('click', () => {
    mainPersonal.style.display = 'none'
    mainPersonalAdmin.style.display ='none'
    Main.style.display = 'none'
    about.style.display ='none'
    mainRegistr.style.display = 'none'
    contact.style.display='none'
    certif_info.style.display =''
    contact_bat.classList.remove('act')
    about_button.classList.remove('act')
    batRegistr.classList.remove('act')
    certif_button.classList.add('act')

})

logo.addEventListener('click', () => {
    mainPersonalAdmin.style.display ='none'
    mainPersonal.style.display = 'none'
    Main.style.display = ''
    about.style.display ='none'
    mainRegistr.style.display = 'none'
    contact.style.display='none'
    certif_info.style.display = 'none'
    contact_bat.classList.remove('act')
    about_button.classList.remove('act')
    batRegistr.classList.remove('act')
    certif_button.classList.remove('act')

})

Exit.addEventListener('click', () => {
    window.location.href = 'index.html';
})

ExitAdmin.addEventListener('click', () => {
    window.location.href = 'index.html';
})

let nameLog = ''
let pasLog = ' '

const submitSign = document.querySelector('.submitSign')

document.querySelector('.Us_Log').addEventListener('input', () => {
    nameLog = document.querySelector('.Us_Log').value;
})

document.querySelector('.Pas_Log ').addEventListener('input', () => {
    pasLog = document.querySelector(' .Pas_Log ').value;
})

submitSign.addEventListener('click', () => {
    console.log(nameLog);
    console.log(pasLog);
    let UserStopeg = JSON.parse(localStorage.getItem(nameLog))

    if(nameLog === 'admin'&& pasLog === 'admin'){
        carentUser.Login = "admin";
        carentUser.UserPassword = "admin";

        Main.style.display = ''
        mainPersonalAdmin.style.display ='none'
        mainRegistr.style.display = 'none'
        mainPersonal.style.display = 'none'
        about.style.display ='none'
        batRegistr.classList.remove('act')
        contact_bat.classList.remove('act')
        about_button.classList.remove('act')


        
        batRegistr.innerHTML = '<i class="fa-regular fa-user"></i>'

        batRegistr.classList.remove('registr');
        batRegistr.classList.add('userBox');

        console.log(carentUser)
        userAdmin.innerHTML = `admin`

        keyAdmin.innerHTML = `admin`

        
    }else if (nameLog === UserStopeg.Login && pasLog === UserStopeg.UserPassword) {

        carentUser.Login = UserStopeg.Login;
        carentUser.UserPassword = UserStopeg.UserPassword;
        carentUser.UserEmail = UserStopeg.UserEmail

        Main.style.display = ''
        mainPersonalAdmin.style.display ='none'
        mainRegistr.style.display = 'none'
        mainPersonal.style.display = 'none'
        about.style.display ='none'
        batRegistr.classList.remove('act')
        contact_bat.classList.remove('act')
        about_button.classList.remove('act')


        batRegistr.innerHTML = '<i class="fa-regular fa-user"></i>'

        batRegistr.classList.remove('registr');
        batRegistr.classList.add('userBox');

        console.log(carentUser)
        user.innerHTML = ` ${UserStopeg.Login}`

        key.innerHTML = ` ${UserStopeg.UserPassword}`

        at.innerHTML = ` ${UserStopeg.UserEmail}`

        textUsername.value = `${UserStopeg.Login}`

        textEmail.value = ` ${UserStopeg.UserEmail} `
    } 

})


// let eye = document.querySelector('.eye-icon')
// let viseblPas = document.querySelector('.viseblPas')
// let viseblPas2 = document.querySelector('.viseblPas2')

// eye.addEventListener('click', () => {
//     if (eye.classList.contains('fa-eye')) {
//         eye.classList.remove('fa-eye')
//         eye.classList.add('fa-eye-slash')
//         viseblPas.setAttribute("type", "text")


//     }else if(eye.classList.contains('fa-eye-slash')){
//         eye.classList.remove('fa-eye-slash')
//         eye.classList.add('fa-eye')
//         viseblPas.setAttribute("type", "password") 


//     }

// })


for (let i = 0, length = localStorage.length; i < length; i++) {
    // ????????
    const key = localStorage.key(i);
    // ????????????????
    const value = JSON.parse(localStorage.getItem(nameLog))
    console.log(`${key}: ${value.Login}`);
  }