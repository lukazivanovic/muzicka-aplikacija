const frazaInput = document.getElementById('fraza')
const rezultatDiv = document.getElementById('rezultat')
const dugme = document.getElementById('dugme')
const forma = document.getElementById('forma')
const loader = document.getElementById('loader')

function ucitatiSugestije(e) {
  e.preventDefault()
  loader.style.display = 'inline'
  rezultatDiv.innerHTML = ''
  fetch(`https://itunes.apple.com/search?term=${frazaInput.value}&entity=musicVideo`)
    .then(response => response.json())
    .then(response => {
      loader.style.display = 'none'
      const sugestije = response.results
      let sablon = ``
      for (let i = 0; i < sugestije.length; i++) {
        const pesma = sugestije[i]
        sablon += `
          <div>
            <h3>${pesma.artistName} - ${pesma.trackName}</h3>
            <video width="320" height="240" controls>
              <source src="${pesma.previewUrl}" type="video/mp4">
            </video>
          </div>
        `
      }
      rezultatDiv.innerHTML = sablon
    })
    .catch(e => alert("Doslo je do greske prilikom ucitavanja. Proverite vas wifi."))
}

forma.addEventListener('submit', ucitatiSugestije)
