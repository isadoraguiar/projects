const buttonOpenModal = document.querySelector('#openModal')
const modalWrapper = document.querySelector('.modal-wrapper')

buttonOpenModal.addEventListener('click', function () {
  modalWrapper.classList.remove('invisible')
})

document.addEventListener('keydown', function (event) {
  const isEscKey = event.key === 'Escape'
  if (isEscKey) {
    modalWrapper.classList.add('invisible')
  }
})
