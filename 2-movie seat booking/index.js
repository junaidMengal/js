const count = document.getElementById('count');
const total = document.getElementById('total');
const movie = document.getElementById('movie');
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const screen = document.querySelector('.container .screen')
let ticketPrice = +movie.value;

// functions
function changePoster(i){
    if(i.target.value == 10){
        screen.className = 'screen avangers'
    }else if(i.target.value == 12){
        screen.className = 'screen joker'
    }else if (i.target.value == 8){
        screen.className = 'screen toy'
    }else if(i.target.value = 9){
        screen.className = 'screen lion'
    }
    
}

function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount*ticketPrice
}




// events
container.addEventListener('click', function(c){
    if(c.target.classList.contains('seat') && !(c.target.classList.contains('occupied'))){
        c.target.classList.toggle('selected')
    }
    updateSelectedCount()
})

movie.addEventListener('change', function(m){
    ticketPrice = +m.target.value
    changePoster(m)
    updateSelectedCount()

})



