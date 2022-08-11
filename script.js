const namee = document.getElementById('name')
let cardNumber = document.getElementById('cardNumber')
let atmNumber = document.getElementById('card-number')
let month = document.getElementById('month')
let year = document.getElementById('year')
let jane = document.getElementById('jane')
let cvv = document.getElementById('cvv')
let expire = document.getElementById('expire')
let cardError = document.querySelector('.error1')
let dateError = document.querySelector('.error2')
let cvvError = document.querySelector('.error3')
let addedPage = document.querySelector('.added')
let form = document.querySelector('.form')
const submitButton = document.querySelector('.submit')
const continueButton = document.querySelector('.continue')
let zeros = ['0000', '0000', '0000', '0000']
let [one, two, three, four] = zeros
// atmNumber.textContent = `${one} ${two} ${three} ${four}`
// console.log(one, two, three)

cardNumber.addEventListener('keyup', function(){
    console.log(isNaN(cardNumber.value))
    // console.log(Number(cardNumber.value) == NaN)
    if(isNaN(cardNumber.value) == false) {
    cardNumber.style.borderColor = ''; 
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
    // month.style.borderColor = 'red';
}else{
    month.style.borderColor = 'rgb(234, 234, 234)';
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
    // addedPage.classList.toggle('hidden');
    addedPage.style.display = 'inherit';
    [one, two, three, four] = cardNumber.value 
    atmNumber.textContent = format(cardNumber.value)
    // atmNumber.textContent = `${one}${two}${three}${four}`
    if(cardNumber.value == '') atmNumber.textContent = '0000 0000 0000 0000' 
    
    expire.textContent = `${month.value}/${year.value}`
    // name.value.style.textTransform = 'uppercase'
    jane.textContent = namee.value
    if(namee.value == '')  jane.textContent = 'Jane Appleseed'
    if(year.value == '' || month.value == '') expire.textContent = '00/00'
    
})
continueButton.addEventListener('click', function (){
    form.classList.toggle('hidden');
    // addedPage.classList.toggle('hidden');
    addedPage.style.display = 'none';
    month.value = ''
    year.value = ''
    namee.value = ''
    cardNumber.style.borderColor = ''
    jane.textContent = 'Jane Appleseed'
    expire.textContent = '00/00'
    cardError.textContent = ''
    dateError.textContent = ''
    cvvError.textContent = ''

    cvv.value = ''
    cardNumber.value = ''
    atmNumber.textContent = '0000 0000 0000 0000'
    
})

const format = (cardNumber) => {
    let cardString = cardNumber + ''
    if(cardString.length !== 16)
    return 'Wrong Length'

    let arr = []
    let curr = ''
    for(i = 0; i <= 16; i++){
        curr += cardString[i]
        if((i + 1) % 4 === 0) {
            arr.push(curr)
            curr = ''
        }
    }
    return arr.join(' ')
}


