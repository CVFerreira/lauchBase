const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

// adiciona a funcionalidade ao clicar no elemento card para abrir o modal
for (let card of cards){
    card.addEventListener("click", function(){
        const IdImagem = card.getAttribute("id")
        const name = card.getAttribute('h3')
        const author = card.getAttribute('h4')
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("img").src=`/assets/${IdImagem}.png`
        modalOverlay.querySelector("h3").innerHTML = card.querySelector('h3').textContent
        modalOverlay.querySelector("h4").innerHTML = card.querySelector('h4').textContent


    })
}

//adiciona a funcionalidade para fechar o Modal
document.querySelector('.modal-close').addEventListener("click", function(){
    modalOverlay.classList.remove('active')

})
