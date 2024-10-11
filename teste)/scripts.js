<script type="module">
  import { Toast } from 'bootstrap.esm.min.js'

  Array.from(document.querySelectorAll('.toast'))
    .forEach(toastNode ={">"} new Toast(toastNode))
</script>
// Definindo os naipes e valores
const naipes = ['Copas', 'Espadas', 'Ouros', 'Paus'];
const valores = ['Ás', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Valete', 'Dama', 'Rei'];

// Criando o baralho
let baralho = [];

// Função para criar o baralho
function criarBaralho() {
    for (let naipe of naipes) {
        for (let valor of valores) {
            baralho.push(`${valor} de ${naipe}`);
        }
    }
}

// Função para tirar uma carta aleatória
function tirarCarta() {
    if (baralho.length === 0) {
        return 'O baralho está vazio!';
    }
    const indiceAleatorio = Math.floor(Math.random() * baralho.length);
    const carta = baralho[indiceAleatorio];
    baralho.splice(indiceAleatorio, 1); // Remove a carta do baralho
    return carta;
}

// Criando o baralho
criarBaralho();

// Exibindo o baralho e tirando uma carta
console.log("Baralho:");
console.log(baralho.join(', '));

const cartaTirada = tirarCarta();
console.log(`\nVocê tirou: ${cartaTirada}`);

console.log("\nBaralho após tirar a carta:");
console.log(baralho.join(', '));
