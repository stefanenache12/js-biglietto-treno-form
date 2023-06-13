
const myButton = document.getElementById('search-button');

myButton.addEventListener('click',
    function(){
        const kmInput = document.querySelector('[name="km"]');
        const ageInput = document.querySelector('[name="age"]');

        console.log ('km', kmInput.value, typeof kmInput)
        console.log('età', ageInput.value, typeof ageInput)

        let ticketPrice = kmInput.value * 0.21;

        if(ageInput.value < 18){
            ticketPrice *= 0.8;
        }
        else if (ageInput.value > 65) {
            ticketPrice *= 0.6;
        }

        console.log('price', ticketPrice, typeof price)
    }
)

