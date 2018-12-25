// https://api.lyrics.ovh/suggest/fraza
const izvodjacInput = document.getElementById('izvodjac')
const pesmaInput = document.getElementById('pesma')
const dugmePotrazi = document.getElementById('potrazi')
const rezultatElement = document.getElementById('rezultat')
const naslovElement = document.getElementById('naslov')

function potrazi() {
  const izvodjac = izvodjacInput.value
  const pesma = pesmaInput.value
  const url = `https://api.lyrics.ovh/v1/${izvodjac}/${pesma}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      naslovElement.innerText = izvodjac + ' - ' + pesma
      rezultatElement.innerText = data.lyrics
    })
}

let sveJeValidno = true;

function proveriIzvodjaca() {
  if (izvodjacInput.value.length >= 1) {
    izvodjacInput.classList.add("valid");
    izvodjacInput.classList.remove("invalid");
  } else {
    sveJeValidno = false;
    izvodjacInput.classList.add("invalid");
    izvodjacInput.classList.remove("valid");
  }
}

function proveriPesmu() {
  if (pesmaInput.value.length >= 1) {
    pesmaInput.classList.add("valid");
    pesmaInput.classList.remove("invalid");
  } else {
    sveJeValidno = false;
    pesmaInput.classList.add("invalid");
    pesmaInput.classList.remove("valid");
  }
}

function proveri(e) {
  e.preventDefault();
  sveJeValidno = true;

  proveriIzvodjaca();
  proveriPesmu();

  if (sveJeValidno) potrazi();
}

izvodjacInput.addEventListener("input", proveriIzvodjaca);
pesmaInput.addEventListener("input", proveriPesmu);

dugmePotrazi.addEventListener('click', proveri)

