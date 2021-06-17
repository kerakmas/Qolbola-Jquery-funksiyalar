
// selector  $

// let div = document.querySelector('.box')
// div.addEventListener('click', () => {
//     div.innerHTML = 'ishla'
// })

// $('.box').on('click', () => alert('ish'))
// $('div').on('click', function(){
//     $('div').addClass('bg')
// })
// $('div').on('click', function(){
//     $('div').toggleClass('bg')
// })
// $('.bg').on('click', function(){
//     $('.bg').text('bunda has klass ishlayapti').hasClass('bg1')
// })



$('.box').css({
   width: '5%',
   background: 'orange',
   color: 'white',
   position: 'fixed',
   right: 0,
   top: 0,
  'min-height': '100vh',
  border: '12px solid crimson',
  transition: '1s'
})


$('.box').hover(() => {
   $('.box').width('19%')
},
() => {
   $('.box').width('5%')
}
)


