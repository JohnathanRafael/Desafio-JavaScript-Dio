// A aplicação faz a validação da entrada e avisa o usuário para informar corretamente 
// Apôs algumas pesquisas encontrei o readline para leitura dos dados, ele precisa ser criado dessa forma para funcionar
// Utilização de recursividade para leitura e validação dos dados, considerando fechar sempre o readline para poupar mémoria
// Não foi utilizado o paradigma de orientação a objetos

// importando uma biblioteca como no python
const readline = require('readline');

// interface para leitura de dados
function readCreateInterface(){
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
}

// verifica tamanho max do nome de 100 caracteres
// verifica se realmente foi digitado um número inteiro
// função recursiva para ler a entrada e validar
function readHero(rl){
    rl.question("Digite o nome do herói: ", (name) => {
        if(name.length < 100 && name &&  name.trim().length !== 0)
        {
            nameHero = name;
            // chama a próxima função de leitura 
            readXpHero(rl);
        }else{
            console.log("ALERTA!⚠️  Nome do herói precisa ter menos de 100 caracteres e não ser vazio.")
            // recursividade
            readHero(rl);
        }
        
    })
};

function readXpHero (rl){
    rl.question("Digite a quantidade de experiência do herói: ", (heroXp) =>{
        
        // precisa converter pois o JavaScript sempre lê como string
        let numberXP = parseInt(heroXp);

        if(typeof numberXP === 'number' && numberXP)
        {
            // último dado de leitura fecha o readline e chama a função para ler outro herói
            xpHero = numberXP;
            exit();
            rl.close();
            read();
        } else {
            // recursividade
            console.log("ALERTA!⚠️  A experiência do herói preicisa ser um número e não ser vazio.")
            readXpHero(rl);
        }
    })
};

// LEITURA DE DADOS
// chamando o mêtodo do readline para leitura de dados
// sempre ao iniciar um processo de leitura cria uma interface, pois ao finalizar a leitura o readline(rl) fecha, como na linha 43
// e esse readline(rl) é passado para o escopo de todas as funções de leitura como parâmetro
function read(){
    const rlAgain = readCreateInterface();

    rlAgain.question("Deseja digitar outro herói (S)sim (N)não? ", (resposta) => {
        
        if(resposta.toLowerCase() === "s"){
            readHero(rlAgain);
        } else if(resposta.toLowerCase() === "n"){
            console.log("Nos vemos em breve 😉!")
            rlAgain.close();
        } else {
            console.log("ALERTA!⚠️  Digite uma das duas opções (S)sim (N)não.")
            rlAgain.close();
            read();
        }
    })
}

// função para exibir a saída correta
function exit(){
    if(xpHero < 1000){
        console.log("O Herói de nome " + nameHero + " está no nível de FERRO")
    } else if(xpHero >= 1001 && xpHero <= 2000){
        console.log("O Herói de nome " + nameHero + " está no nível de BRONZE")
    } else if (xpHero >= 2001 && xpHero <= 5000){
        console.log("O Herói de nome " + nameHero + " está no nível de PRATA")
    } else if (xpHero >= 5001 && xpHero <= 7000){
        console.log("O Herói de nome " + nameHero + " está no nível de OURO")
    } else if (xpHero >= 7001 && xpHero <= 8000){
        console.log("O Herói de nome " + nameHero + " está no nível de PLATINA")
    } else if (xpHero >= 8001 && xpHero <= 9000){
        console.log("O Herói de nome " + nameHero + " está no nível de ASCENDENTE")
    } else if (xpHero >= 9001 && xpHero <= 10000) {
        console.log("O Herói de nome " + nameHero + " está no nível de IMORTAL")
    } else {
        console.log("O Herói de nome " + nameHero + " está no nível de RADIANTE")
    }
}

// variaváveis globais para serem usadas em qualquer escopo
let nameHero;
let xpHero;

read();



