# Funcinamento

- Diferente de uma busca comum que checa em todos os índices até encontrar o que procura
- Funciona com `Loops`
- A busca binária corta 50% das possibilidades a cada iteração
- Pega metade da lista, aponta para o valor ao meio e compara sua equidade com o valor buscado
- Só funciona com listas ordenadas, seja o dado um ***int*** ou ***string***
- O número de passos para que o valor seja encontrado pode ser representado por logaritmos

``

| Maior que o item alvo                          | Menor que o item alvo                         | Igual ao item alvo        |
|------------------------------------------------|-----------------------------------------------|---------------------------|
| o Item `middle` -1 passa a ser o novo `higher` | o Item `middle` +1 passa a ser o novo `lower` | Sucesso, alvo encontrado! |