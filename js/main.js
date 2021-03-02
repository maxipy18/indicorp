

const modal = document.querySelector('.modal')
const toggler = document.querySelector('.navbar__toggler')
const btnClose = document.querySelector('.btn-close')

toggler.addEventListener('click', function(){
    modal.classList.toggle('modal-active')
})

btnClose.addEventListener('click', function(){
    modal.classList.toggle('modal-active')
})