const randomColor = function(){
    const hex = "0123456789ABCDEF" ;
    let color = '#' ;
    for(let i=0 ; i<6 ; i++)
    {
        let randomNum = Math.floor(Math.random()*16) ;
        color += hex[randomNum] ;
    } 
    return color; 
}


let changeMe  ; // undefined 

document.querySelector('#start').addEventListener('click', () => {
    
    if(changeMe === undefined) 
    {
        changeMe = setInterval(() => {
            document.querySelector('body').style.backgroundColor = randomColor();
        }, 1000);
    }
})


document.querySelector('#stop').addEventListener('click', function(){
    clearInterval(changeMe) ;
    changeMe = undefined ;  // Flush out the extra data
})


document.getElementById('end').addEventListener('click', () => {
    clearInterval(changeMe)
    changeMe = undefined ;
    document.querySelector('body').style.backgroundColor = '';
})




