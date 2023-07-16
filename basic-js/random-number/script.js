const button = document.getElementById('generate')

button.addEventListener('click', function () {
  const min = Number(document.getElementById('min').value)
  const max = Number(document.getElementById('max').value)

  let result = Math.floor(Math.random() * (max - min + 1)) + min

  if (isNaN(result)) {
    result = 'Valor inválido'
  }

  document.querySelector('#result span').textContent = result
})
