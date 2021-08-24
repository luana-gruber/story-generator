
document.getElementById('storyButton').addEventListener('click', () =>{

    var protagonistName = document.querySelector('#protagonistName').value;

    if (protagonistName == ''){
        alert ('Preencha o nome do protagonista');
    }else{
    // Pegar o ano
    var date = new Date();
    var year = date.getFullYear();

    // Array vazio para adiocionar imagens do background
    backImages =[];

    // Pegar opções dos inimigos
    var enemySelector = document.querySelector('#enemySelector').value;
    var enemy;
    var enemyFull;
    
    switch(enemySelector){
        case 'Dragões':
            enemy = 'Dragões';
            enemyFull = 'criaturas consideradas extintas e que acabavam queimando muitas pessoas em suas refeições';
            backImages.push('./images/dragon1.jpg');
            backImages.push('./images/dragon2.jpg');
            backImages.push('./images/dragon3.jpg');
            backImages.push('./images/dragon4.jpg');
            document.body.style.backgroundImage = `url('${backImages[0]}')`;
            setInterval(changeBG, 7000);
            break;

        case 'Zumbis':
            enemy = 'Zumbis';
            enemyFull = 'eles não pensavam muito antes de agir e acabavam comendo outras pessoas';
            backImages.push('./images/zombie1.jpg');
            backImages.push('./images/zombie2.jpg');
            backImages.push('./images/zombie3.jpg');
            backImages.push('./images/zombie4.jpg');
            document.body.style.backgroundImage = `url('${backImages[0]}')`;
            setInterval(changeBG, 7000);
            break;

        case 'Vampiros':
            enemy = 'Vampiros';
            enemyFull = 'bebedores de sangue que brilhavam no sol e saiam apenas a noite';
            backImages.push('./images/vampire1.jpg');
            backImages.push('./images/vampire2.jpg');
            backImages.push('./images/vampire3.jpg');
            backImages.push('./images/vampire4.jpg');
            document.body.style.backgroundImage = `url('${backImages[0]}')`;
            setInterval(changeBG, 7000);
            break;

        case 'Bruxos':
            enemy = 'Bruxos';
            enemyFull = 'não eram tão maus, mas curtiam pegar humanos e usar em rituais';
            backImages.push('./images/wizard1.jpg');
            backImages.push('./images/wizard2.jpg');
            backImages.push('./images/wizard3.jpg');
            backImages.push('./images/wizard4.jpg');
            document.body.style.backgroundImage = `url('${backImages[0]}')`;
            setInterval(changeBG, 7000);
            break;

    }

    // Pegar opções das especies

    var speciesSelector = document.querySelector('#speciesSelector').value;
    var species;
    var speciesFull;
    
    switch(speciesSelector){
        case 'Humano':
            species = 'Humano';
            speciesFull = 'que gostava de fazer nada e sua única função era viver';
            break;

        case 'Mercenário':
            species = 'Mercenário';
            speciesFull = 'que adorava enganar os outros com truques baratos';
            break;

        case 'Guerreiro':
            species = 'Guerreio';
            speciesFull = 'que apanhava mais que mulher de malandro, mas sempre caía em pé';
            break;

        case 'Mago':
            species = 'Mago';
            speciesFull = 'que era antissocial, além de se recusar a ler o futuro dos outros';
            break;
    }

    // Pegar opções das armas

    var armSelector = document.querySelector('#armSelector').value;
    var arm;
    var armFull;
    
    switch(armSelector){
        case 'Adaga':
            arm = 'Adaga';
            armFull = 'um tipo peculiar de faca tão histórica quanto a humanidade';
            break;
        case 'Fé':
            arm = 'Fé';
            armFull = 'uma arma inusitada e para muitos inútil, porém, os que tem fé são os que tem a melhor defesa';
            break;

        case 'Espada':
            arm = 'Espada';
            armFull = 'principal arma de combate corpo a corpo, é necessário ser muito habilidoso para utilizar';
            break;

        case 'Varinha Mágica':
            arm = 'Varinha mágica';
            armFull = 'objeto lendário para uso de mágias, muito perigosa em mão erradas';
            break;
    }

    // Pegar opções da localização

    var localizationSelector = document.querySelector('#localizationSelector').value;
    var localization;
    var localizationFull;
    
    switch(localizationSelector){
        case 'Konoha':
            localization = 'Konoha';
            localizationFull = 'a Vila Oculta da folha, onde os mais poderosos ninjas habitam';
            break;

        case 'Terra Média':
            localization = 'Terra Média';
            localizationFull = 'considerada a mais antiga terra, onde vivem os humanos';
            break;

        case 'o Submundo':
            localization = 'Submundo';
            localizationFull = 'abaixo do mundo dos vivos e onde se encontram a maior parte das almas';
            break;

        case 'Hogwarts':
            localization = 'Hogwarts';
            localizationFull = 'escola de Bruxaria localizada próximo a Vila de Hogsmeade';
            break;
    }

    // Pegar opções do acidente 

    var startSelector = document.querySelector('#startSelector').value;
    var start;
    var startFull;

    switch(startSelector){
        case 'Cientistas criaram':
            start = 'Cientistas criaram';
            startFull = 'cientistas chineses criaram um vírus, que acabou infectando muitas pessoas e transformando elas em';
            break;

        case 'Votaram no Bolsonaro':
            start = 'Votaram no Bolsonaro';
            startFull = 'a população votou no Bolsonaro e ele decidiu que todos deveriam tomar hidroxicloroquina, mas os efeitos colaterais transformaram a população em';
            break;

        case 'Jóias do infinito':
            start = 'Jóias do infinito';
            startFull = 'ele viu Thanos relaxando após um dia longo de luta e resolveu pegar a luva super maneira dele, seu único erro foi estralar o dedos, transformando pessoas em';
            break;

        case 'Voltaram no tempo':
            start = 'Votaram no tempo';
            startFull = 'disseram que voltar no tempo não é aconselhável, mas um espertalhão decidiu que seria uma boa ideia e acabou mudando o futuro, transformando pessoas em';
            break;
    }

        // Limpar o formulário, adicionar elemento p, atibuir id e a história e incluir na div body
        document.querySelector('.body').innerHTML= '';
        var txt = document.createElement('p');
        txt.setAttribute('id', 'storyGenerations');

        txt.append(`Era uma vez um ${species} chamado ${protagonistName}, ${speciesFull}.
        Morava em um lugar tranquilo, pelo menos até ${year}, quando ${startFull} ${enemy}, ${enemyFull}.
        Para solucionar o problema ${protagonistName} precisou enfrentar essas novas ameaças e se preparar para batalha, 
        então foi até ${localization}, ${localizationFull}. Lá adquiriu técnicas de batalha e uma arma lendária, a ${arm} (${armFull}).
        Combateu muitos ${enemy} por um longo tempo, mas percebeu que sozinho não conseguiria derrotar todos,
         então preferiu se unir a eles e dominar o mundo.`);

        
        document.querySelector('.body').append(txt);
        
        var textFull = document.querySelector('p');
        typeWriter(textFull);

       // Função para efeito da escrita, recebe como parâmetro o elemento p
        function typeWriter(element) {
            // array que pega cada letra do elemento com o metódo split e o parâmetro ''
            const arrayWriter = element.innerHTML.split('')
            element.innerHTML= ''
            // para cada item (letra) do array 
            arrayWriter.forEach((letter, i) =>{
                //adiciona a letra a cada 75 milessegundos * i (que é a posição 1 do array e assim por diante)
                setTimeout(() => element.innerHTML += letter, 75 * i)
            });
          }   

        // Função para troca do background
        function changeBG(){
            // mudar de forma randômica
            var randomBack = Math.floor(Math.random() * backImages.length);
            if(randomBack == 0){
                randomBack = 0;
            }
            document.body.style.backgroundImage = `url('${backImages[randomBack]}')`;
        }
    }
});


