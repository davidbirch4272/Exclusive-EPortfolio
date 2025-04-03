//   Template id:  template_oh052i8
//   Service id:   service_i4sy1qs
//   Public Key:   RFX9PVJtrLuEWM9lW

function contact(event) {
    event.preventDefault();
    emailjs
    .sendForm(
        'service_i4sy1qs',
        'template_oh052i8',
        event.target,
        'user_RFX9PVJtrLuEWM9lW'
    ).then(()   => {
        console.log('this worked')
 })

}

