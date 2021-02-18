const modalOverlay = document.querySelector('.modal_overlay')
const cardsPosts = document.querySelectorAll('.card_post')
const modal = document.querySelector('.modal')

for (let cardPost of cardsPosts) {
    cardPost.addEventListener('click', function(){
        const postId = cardPost.getAttribute('id')
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src = `https://blog.rocketseat.com.br/${postId}`
    })
}

document.querySelector('.close_modal').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
    modal.classList.remove('maximize')
    document.querySelector('.max_modal').classList.add('visible')
    document.querySelector('.min_modal').classList.remove('visible')
    modalOverlay.querySelector("iframe").src = ``
})

document.querySelector('.max_modal').addEventListener('click', function(){
    modal.classList.add('maximize')
    document.querySelector('.max_modal').classList.remove('visible')
    document.querySelector('.min_modal').classList.add('visible')
})

document.querySelector('.min_modal').addEventListener('click', function(){
    modal.classList.remove('maximize')
    document.querySelector('.max_modal').classList.add('visible')
    document.querySelector('.min_modal').classList.remove('visible')
})