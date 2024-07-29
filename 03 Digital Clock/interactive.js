const clock = document.querySelector('#clock') ;

setInterval(() => {

    let DATE = new Date();
    clock.innerHTML = DATE.toLocaleTimeString();

}, 1000) ; 