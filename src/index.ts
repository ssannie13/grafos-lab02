import Grafo1 from "./exemplos/Grafo1";
import Grafo2 from "./exemplos/Grafo2";
import kGrafo from "./exemplos/K_grafo";
import { GrafoLib } from "./models/GrafoLib";
import GrafoProfundidade from "./exemplos/GrafoProfundidade";
import gerarGrafoRegular from "./exemplos/gerarGrafoRegular";
import gerarGrafoBipartido from "./exemplos/gerarGrafoBipartido";

// Conteudo do lab 01
console.log("Grafo 1\n")
Grafo1().imprimirGrafo()

console.log("\n")
console.log("Grafo 2\n")
Grafo2().imprimirGrafo()


// Conteudo do lab 02

console.log("\n")
console.log("Grafo completo kn\n");
kGrafo(7);

console.log("Grafo k regular ordem n\n");
gerarGrafoRegular(6, 1)

console.log("\n")
console.log("Verifica bipartição\n")
gerarGrafoBipartido(3,4).imprimirGrafo()
console.log("Bipartido: ")
console.log(gerarGrafoBipartido(3,4).ehBipartido())

// Conteudo do lab 03
console.log("Busca em profundidade: ")
console.log(GrafoProfundidade().buscaEmProfundidade(0))
