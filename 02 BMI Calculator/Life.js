const form = document.querySelector('form') ;

/*
// This usecase will give you empty value ---> Error
// const height = parseInt(document.querySelector('#height').value) ;
// const weight = parseInt(document.querySelector('#weight').value) ;
*/

form.addEventListener('submit', function(event){
    event.preventDefault() ;

    const height = parseInt(document.querySelector('#height').value) ;
    const weight = parseInt(document.querySelector('#weight').value) ;
    const results = document.querySelector('#results') ;
    const notice = document.querySelector('#notice') ;

    if(height === '' || height <= 0 || isNaN(height)){
        results.innerHTML = 'please give a valid height' ;
    }
    else if(weight === '' || weight <= 0 || isNaN(weight)){
        results.innerHTML = 'please give a valid weight' ;
    }
    else{
        let BMI = (weight/((height*height)/10000)).toFixed(2) ;
        if(BMI < 18.6) declaration = "Under Weight" ;
        else if(BMI > 24.9) declaration = "Over Weight" ;
        else declaration = "Normal Weight" ;

        notice.innerHTML = declaration ;
        results.innerHTML = ` <br>Your BMI : <span>${BMI}</span> Kg/m2` ;
    }
});