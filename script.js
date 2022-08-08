let name = document.getElementById('name')
let cardNumber = document.getElementById('cardNumber')
let month = document.getElementById('month')
let year = document.getElementById('year')
let cvv = document.getElementById('cvv')
let cardError = document.querySelector('.error1')
let dateError = document.querySelector('.error2')
let cvvError = document.querySelector('.error3')
let addedPage = document.querySelector('.added')
let form = document.querySelector('.form')
const submitButton = document.querySelector('.submit')
const continueButton = document.querySelector('.continue')
cardNumber.addEventListener('keyup', function(){
    console.log(isNaN(cardNumber.value))
    if(isNaN(cardNumber.value) == false) {
    cardNumber.style.borderColor = 'grey'; 
    cardError.innerHTML = ''
}
 else if(isNaN(cardNumber.value) == true){
        cardNumber.style.borderColor = 'red'; 
        cardError.innerHTML = 'Wrong Format. Numbers only.'

    }


})

month.addEventListener('keyup', function(){
    if(month.value == ''){
    dateError.textContent = 'Can\'t be blank.';
}else{
        dateError.textContent = '';
    }

} )
year.addEventListener('keyup', function(){
    if(year.value == ''){
    dateError.textContent = 'Can\'t be blank.';
    }else{
        dateError.textContent = '';
    }

} )

cvv.addEventListener('keyup', function(){
    if(cvv.value == ''){
        cvvError.textContent = 'Can\'t be blank.';
    }else{
        cvvError.textContent = '';
    }
})

submitButton.addEventListener('click', function (){
    form.classList.toggle('hidden');
    addedPage.classList.toggle('hidden');
})
continueButton.addEventListener('click', function (){
    form.classList.toggle('hidden');
    addedPage.classList.toggle('hidden');
})
