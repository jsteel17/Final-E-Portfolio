// template_cjyt3lj
// service_6h3121f
// gTGz8CnsqmH5vW7aY

function contact(event) {
    event.preventDefault();
    emailjs
    .sendForm(
        'service_6h3121f',
        'template_cjyt3lj',
        event.target,
        'gTGz8CnsqmH5vW7aY'
    ).then(() => {
        console.log('this worked')
    })
}