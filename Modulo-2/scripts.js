const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

// adiciona a funcionalidade ao clicar no elemento card para abrir o modal
for (let card of cards){
    card.addEventListener("click", function(){
        const videoId = card.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src=`https://www.youtube.com/embed/${videoId}`

    })
}

//adiciona a funcionalidade no X para fechar o Modal
document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("iframe").src=""

})
