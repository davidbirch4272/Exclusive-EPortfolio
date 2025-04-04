//   Template id:  template_oh052i8
//   Service id:   service_i4sy1qs
//   Public Key:   RFX9PVJtrLuEWM9lW

let contrastToggle = false;
function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme"

    }
    else {
        document.body.classList.remove("dark-theme")
    }
}

function contact(event) {
 event.preventDefault();
const loading = document.querySelector('.modal__overlay--loading');
const success = document.querySelector('.modal__overlay--success');
loading.classList += " modal__overlay--visible"

 emailjs
   .sendForm(
       'service_i4sy1qs',
       'template_oh052i8',
       event.target,
       'RFX9PVJtrLuEWM9lW'
   ).then(()   => {
    loading.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--visible";
    }).catch (() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
     "The email service is temporarily unavailable.  Please contact me directly on davidbirch4272@gmail.com"   
    );
    })
   }

let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true; 
    document.body.classList += " modal--open";
   
}

function moveBackground(event)  {
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX;
    const y = event.clientY;
    
    for (let i = 0; i < shapes.length; ++1)  {
        shapes[i].style.transform = `translate(10%, 10%)`
    }
    }
    