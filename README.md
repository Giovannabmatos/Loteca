# Projeto Loteca 
Este é um projeto de Simulador de loteria, onde o usuário digita seis números e relaiza um sorteio de outros seis números. no final é verificado a quantidade de acertos
## Tecnologias utilizadas
- **HTML**: estrutura do site
- __CSS__: estilização do site
- *_JS_*: funções do site
- ~~BootStrap~~: Não foi utilizado 
### Melhorias Possíveis
1. [X] Subir para GitHubrPages
2. [ ] Alterar os alerts
3. [ ] Utilizar o BootStrap
4. [ ] Deixar responsivo

### Disponibilizado em 
[GitHubPage](https://giovannabmatos.github.io/Loteca/)

### Prints da tela 
| ID | Primeira tela | Segunda tela |
|----|---------------|------------------|
| 1  | loteca limpa | loteca Preenchida | 
| 2  | ![image](https://user-images.githubusercontent.com/101740350/161781826-35ab1164-1450-44da-8505-8c808b820af5.png) | ![Uploading image.png…]() | 

#### Função pricipal 
```
function sorteio() {
    cont = 0;
    while (cont < 6) {
        let num = Math.random() * 60
        num = Math.ceil(num)
        if (!numSort.includes(num)) {
            numSort[cont] = num
            console.log(numSort)
            cont++
        }
    }
    document.getElementById("sorteados").innerHTML = numSort
    contacertos()
}
```
#### comando git 
para iniciar o projeto
```bash:
git init
```
