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
 //   emailjs
 //   .sendForm(
 //       'service_i4sy1qs',
 //       'template_oh052i8',
 //       event.target,
 //       'RFX9PVJtrLuEWM9lW'
 //   ).then(()   => {
 //       console.log('this worked')
   //  })

//  setTimeout(()  =>  {
//    console.log('it worked 1')
//    }, 500);
  
  
  
   const loading = document.querySelector('modal__overlay--loading');
   const success = document.querySelector('modal__overlay--success');
   loading.classList += " modal__overlay--visible"
    setTimeout(() => {
      loading.classList.remove("modal__overlay--visible");
      console.log('it worked 1')
    }, 500);

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

