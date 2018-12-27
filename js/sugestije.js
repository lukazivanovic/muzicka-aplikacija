const frazaInput = document.getElementById('fraza')
const rezultatDiv = document.getElementById('rezultat')
const dugme = document.getElementById('dugme')
const forma = document.getElementById('forma')
const loader = document.getElementById('loader')

function ucitatiSugestije(e) {
  //e.preventDefault()
  loader.style.display = 'inline'
  rezultatDiv.innerHTML = ''
  fetch(`https://api.lyrics.ovh/suggest/${frazaInput.value}`)
    .then(response => response.json())
    .then(response => {
      loader.style.display = 'none'
      const sugestije = response.data
      let sablon = ``
      for (let i = 0; i < sugestije.length; i++) {
        const pesma = sugestije[i]
        sablon += `
          <div>
            <h3>${pesma.artist.name} - ${pesma.title}</h3>
            <p>Sa albuma: <i>${pesma.album.title}</i></p>
            <img src="${pesma.album.cover}" alt="Omot albuma">
            <div>
              <audio src="${pesma.preview}" controls></audio>
              <a href="${pesma.link}" title="Deezer" target="_blank"><img src="slike/deezer-logo.svg" width="50" alt="Deezer" title="Pusti na Deezeru"></a>
            </div>
            <p>Trajanje: ${pesma.duration}s</p>
            <p>Eksplicitan sadrzaj: ${pesma.explicit_lyrics ? "da &#9888;" : "ne"}</p>
          </div>
        `
      }
      rezultatDiv.innerHTML = sablon
    })
}

let sveJeValidno = true;

function proveriFrazu() {
  if (frazaInput.value.length >= 1) {
    frazaInput.classList.add("valid");
    frazaInput.classList.remove("invalid");
  } else {
    sveJeValidno = false;
    frazaInput.classList.add("invalid");
    frazaInput.classList.remove("valid");
  }
}

function proveri(e) {
  e.preventDefault();
  sveJeValidno = true;

  proveriFrazu();

  if (sveJeValidno) ucitatiSugestije();
}

frazaInput.addEventListener("input", proveriFrazu);

forma.addEventListener('submit', proveri)
