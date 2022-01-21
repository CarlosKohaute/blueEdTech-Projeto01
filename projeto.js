console.clear();
const prompt = require('prompt-sync')();
console.log(
    "Olá guerreiro, seja bem vindo ao nosso reino, estamos passando\npor uma severa batalha contra ordas vindas do submundo, nossos\nmagos fizeram um encanto para lhe trazer de seu mundo para nos \najudar, à você foi designado o escudo como arma, escolha a melhor\nmaneira para que possa usar ele  em batalhas pois haverão outros\ntrês guerreiros para lhe ajudar, um é o heroi da lança, outro o\nda espada e por fim o do arco."); 
const nome = prompt("Para começarmos a sua jornada gostaria de saber qual é o seu nome? ");
    console.log("");
    console.log("Olá ", nome," vamos começar a sua jornada!");
    console.log("Após o inicio da jornada do guerreiro", nome, "ele saiu para\nalgumas dungeons para conseguir upar o seu nível");
    console.log("Após o guerreiro conluir a sua jornada e derrotar vários chefes\no mago invocador foi lhe perguntar como foi o resultado de sua jornada, responda com Sim ou Nao.");
                            console.log("");

                    var cont = 0;

                    var ask1 = prompt  ("Você deixou algum de seus companheiro morrer? ");
                    if (ask1 == 'Sim' || 'sim' || 'S' || 's' ||'SIM'){
                    cont = cont + 1, console.log("Você não deveria ter deixado isso ocorrer, mas meus pêsames pela sua perda!")
                }else{};
                  
                                            console.log("");
                   
                    var ask2 = prompt("Você conseguiu derrotar todos os chefes? ");
                    if (ask2 == 'Sim' || 'sim' || 'S' || 's' ||'SIM'){
                    cont = cont + 1
                    } else{};                  
                                            console.log(""); 
                  
                    var ask3 = prompt("Coletou algum artefato lendario? ");
                    if (ask3 == 'Sim' || 'sim' || 'S' || 's' ||'SIM'){
                    cont = cont + 1
                    }else{}; 
                  
                                          console.log("");
                  
                    var ask4 = prompt("Sabemos que esta é uma pergunta clichê, mas salvou alguma princesa? ");
                    if (ask4 == 'Sim' || 'sim' || 'S' || 's' ||'SIM'){
                    cont = cont + 1
                    }else{}; 
                                          console.log("");
                  
                     var ask5 = prompt("Por fim, deseja uma premiação por sua bravura?")
                     if (ask5 == 'Sim' || 'sim' || 'S' || 's' ||'SIM'){
                     cont = cont + 1, console.log("Guerreiros de verdade não precisam de premiação!")
                    }else{};
                         console.log("");


                        

                        if (cont == 0){
                        console.log('Não possuimos últilidade para um herói como você, haverá execução\nadvinhe de quem será a cabeça que irá rolar!')
                        }else{}; 
                        if(cont == 1){
                        console.log("Você não está sendo tão útil igual acreditamos que seria, nesse\ncaso será devolvido para o seu mundo!")
                        }else{};
                         if(cont == 2){
                        console.log("Com toda essa eficiência creio que devá servir como escravo, e\nisto é o que será a partir deste momento!")
                        }else{};
                        if(cont == 3){
                        console.log("Vejo que você não está indo tão mal, continue assim para ser\ncada vez melhor!")
                        }else{};
                        if (cont == 4){
                        console.log("Parabéns, a sua missão foi quase que perfeita, continue desta\nforma!")
                        }else{};
                        if (cont == 5){
                        console.log("Parabéns pelo seu desempenho, você ganhará um feudo para chamar\nde seu como premiação!")
                        }else{};
                        
                        console.log('Você disse Sim', cont, 'vezes!') 

            
