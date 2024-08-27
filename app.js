document.getElementById('input').addEventListener('input', function (event) {
  this.value = this.value.replace(/[^a-z0-9.,¡!()¿?{}<>'-;:\s]/g, '');
});

function encriptarTexto() {
  const input = document.getElementById('input').value;

  if (input.trim() === '') {
    mostrarMensajeVacio();
    return;
  }

  const encriptado = input
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/o/g, 'ober')
    .replace(/a/g, 'ai')
    .replace(/u/g, 'ufat');

  const outputElement = document.getElementById('output');
  outputElement.innerHTML = encriptado;
  outputElement.style.textAlign = 'left';
  outputElement.style.display = 'block';
  outputElement.style.backgroundImage = 'none';

  document.querySelector('.salida__boton--boton').style.display = 'block';

  limpiarCaja();
}

// Función para desencriptar texto
function desencriptarTexto() {
  const input = document.getElementById('input').value;

  if (input.trim() === '') {
    mostrarMensajeVacio();
    return;
  }

  const desencriptado = input
    .replace(/ai/g, 'a')
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');

  const outputElement = document.getElementById('output');
  outputElement.innerHTML = desencriptado;
  outputElement.style.textAlign = 'left';
  outputElement.style.display = 'block';
  outputElement.style.backgroundImage = 'none';

  document.querySelector('.salida__boton--boton').style.display = 'block';

  limpiarCaja();
}

function mostrarMensajeVacio() {
  const outputElement = document.getElementById('output');
  outputElement.innerHTML = `<div class="salida__aviso"><strong>¡Ningún mensaje fue encontrado!</strong><br><p>Ingresa el texto que deseas encriptar o desencriptar.</p></div>`;
  outputElement.style.display = 'flex';
  outputElement.style.flexDirection = 'column';
  outputElement.style.justifyContent = 'center';
  outputElement.style.textAlign = 'center';

  if (window.innerWidth >= 1025) {
    outputElement.style.backgroundImage = 'url(./assets/Muñeco.png)';
  } else {
    outputElement.style.backgroundImage = 'none';
    document.querySelector('.salida__aviso').style.marginTop = '0';
  }

  document.querySelector('.salida__boton--boton').style.display = 'none';
}

function limpiarCaja() {
  document.getElementById('input').value = '';
}

function copiarTexto() {
  const outputElement = document.getElementById('output');
  const texto = outputElement.innerText || outputElement.textContent;

  navigator.clipboard.writeText(texto);
}
