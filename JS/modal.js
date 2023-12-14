const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const fgmodal = document.querySelector(button.dataset.modalTarget)
    openModal(fgmodal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const fgmodal = button.closest('.fgmodal')
    closeModal(fgmodal)
  })
})

overlay.addEventListener('click', () => {
  const fgmodals = document.querySelectorAll('.fgmodal.active')
  fgmodals.forEach(fgmodal => {
    closeModal(fgmodal)
  })
})

function openModal(fgmodal) {
  if (fgmodal == null) return
  fgmodal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(fgmodal) {
  if (fgmodal == null) return
  fgmodal.classList.remove('active')
  overlay.classList.remove('active')
} 