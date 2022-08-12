banner_text = document.querySelector('.banner-text');
banner_book = document.querySelector('.banner-book');
svg = document.querySelector('.contact-map-wrapper')

window.onload = function () {
    setTimeout( function() {
        banner_text.classList.add('active')
        setTimeout(() => {
            banner_book.classList.add('active');
        
        
            setTimeout( () => {
                svg.classList.add('active')
        
            }, 1000)   


        },500 );
    },500)

    
}

const text = document.querySelector('.input')

const input = document.querySelector('.btn')

input.addEventListener('click', function() {
    
  
    
    

} )


var customalert = document.querySelector('#customAlert')

function showcustom() {
    customalert.style.display = 'block'

}

function hidealert() {
    customalert.style.display = 'none'
}







