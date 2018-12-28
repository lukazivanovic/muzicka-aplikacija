// https://api.lyrics.ovh/suggest/fraza
const izvodjacInput = document.getElementById('izvodjac')
const pesmaInput = document.getElementById('pesma')
const rezultatElement = document.getElementById('rezultat')
const naslovElement = document.getElementById('naslov')
const forma = document.getElementById('forma-za-tekstove')

function potrazi(e) {
  e.preventDefault()
  const izvodjac = izvodjacInput.value
  const pesma = pesmaInput.value
}

forma.addEventListener('submit', potrazi)
