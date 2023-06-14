const myButton = document.getElementById('search-button');
let ticket = document.getElementById('ticket');
let ticketTitle = document.getElementById('ticket-title');

myButton.addEventListener('click',
    function(){

        //CONST SECTION
        const kmInput = document.querySelector('[name="km"]');
        const ageInput = document.querySelector('[name="age"]');
        const nameInput = document.querySelector('[name="username"]');
        let ticketPrice = kmInput.value * 0.21;

        let myAlert = '';
        // CONDIZIONE KM MINORE O UGUALE A 0 CAMPO NOME VUOTO
        if(kmInput.value <= 0){
            myAlert += 'Inserire tutti i dati \r\n'
        } else if(nameInput.value === ''){
            myAlert += 'Inserire tutti i dati \r\n'
        }

        if(myAlert != ''){
            alert(myAlert);
        }
        else {
            // CONDIZIONI FASCIA ETA
            if(ageInput.value == 1){
                ticketPrice *= 0.8;
                document.getElementById('ticket-type').innerHTML = 'Sconto del 20%';
    
            }
            else if (ageInput.value == 3) {
                ticketPrice *= 0.6;
                document.getElementById('ticket-type').innerHTML = 'Sconto del 40%';
            }
    
            else {
                document.getElementById('ticket-type').innerHTML = 'Offerta Standard';
            }
    
            // TICKET SECTION
            ticket.classList.remove('d-none');
            ticketTitle.classList.remove('d-none');
    
            document.getElementById('client-name').innerHTML = nameInput.value
            document.getElementById('coach').innerHTML = Math.floor(Math.random() * 10) + 1;
            document.getElementById('ticket-code').innerHTML = Math.floor(Math.random() * (9999 - 1000)) + 1000;
            document.getElementById('ticket-price').innerHTML = ticketPrice.toFixed(2) + ' $';
        }
    }
)

