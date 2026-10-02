// Aguarda o carregamento completo do HTML
document.addEventListener('DOMContentLoaded', () => {

    const questions = [
      {
        title: "O Início da Carreira",
        text: "Você se destaca na base e recebe duas propostas para assinar o seu primeiro contrato profissional. Como prefere começar?",
        options: [
          { text: "Assinar com um grande clube brasileiro para jogar sob pressão diante de uma enorme torcida.", summary: "Você iniciou a sua carreira sob forte pressão num grande clube brasileiro, aprendendo a lidar com exigências altas desde cedo." },
          { text: "Ir direto para uma equipa média da Europa para se adaptar rapidamente ao futebol europeu.", summary: "Você decidiu ir jovem para a Europa, desenvolvendo uma visão tática apurada e adaptando-se rápido ao ritmo do futebol internacional." }
        ]
      },
      {
        title: "Estilo de Jogo",
        text: "No meio do campeonato, o treinador pede para definir a sua função principal em campo. Qual papel prefere desempenhar?",
        options: [
          { text: "Ser o camisa 10 clássico, ditando o ritmo, dando assistências e organizando o ataque.", summary: "Em campo, consagrou-se como o cérebro da equipa, ditando o ritmo com passes precisos e alta inteligência tática." },
          { text: "Ser um ponta veloz e agressivo, procurando o um contra um e finalizando a golo.", summary: "Em campo, destacou-se pela velocidade e drible desconcertante, sendo a principal arma ofensiva pelos lados do campo." }
        ]
      },
      {
        title: "O Momento da Grande Decisão",
        text: "Na final de um torneio continental, o jogo está empatado nos minutos finais. Qual é a sua atitude?",
        options: [
          { text: "Arriscar um remate de fora da área para tentar resolver o jogo sozinho.", summary: "Ficou conhecido pela sua coragem nos momentos decisivos, assumindo a responsabilidade em remates marcantes." },
          { text: "Dar um passe preciso para o companheiro melhor posicionado marcar o golo.", summary: "Ficou reconhecido pelo seu espírito coletivo, priorizando a melhor jogada para garantir a vitória da equipa." }
        ]
      },
      {
        title: "Gestão de Carreira",
        text: "No auge do seu rendimento, surge uma proposta milionária do futebol árabe e outra para disputar a Liga dos Campeões. Qual escolhe?",
        options: [
          { text: "Aceitar a proposta do futebol europeu para lutar pelo título da Liga dos Campeões.", summary: "No topo da carreira, priorizou a glória desportiva e brigou pelos maiores títulos do futebol europeu." },
          { text: "Aceitar a proposta milionária para garantir estabilidade financeira total para a família.", summary: "No topo da carreira, fez uma escolha pragmática ao aceitar um contrato milionário, garantindo estabilidade e novos mercados." }
        ]
      },
      {
        title: "Pós-Aposentadoria",
        text: "Chegou o momento de pendurar as chuteiras após uma carreira vitoriosa. Como quer continuar ligado ao futebol?",
        options: [
          { text: "Tornar-se treinador para aplicar a sua visão tática e liderar novas gerações.", summary: "Após reformar-se dos relvados, assumiu o comando técnico à beira do campo para formar novos campeões." },
          { text: "Tornar-se comentador desportivo na televisão e analisar o futebol com profundidade.", summary: "Após reformar-se dos relvados, levou a sua experiência para os ecrãs como um respeitado comentador desportivo." }
        ]
      }
    ];
  
    let currentQuestion = 0;
    let userAnswers = [];
  
    // Elementos do DOM
    const btnStart = document.getElementById('btn-start');
    const btnRestart = document.getElementById('btn-restart');
    const btnOpt1 = document.getElementById('opt1');
    const btnOpt2 = document.getElementById('opt2');
  
    const screenStart = document.getElementById('screen-start');
    const screenQuestion = document.getElementById('screen-question');
    const screenEnd = document.getElementById('screen-end');
  
    // Adicionando os Event Listeners diretamente via JS
    btnStart.addEventListener('click', startGame);
    btnRestart.addEventListener('click', restartGame);
    btnOpt1.addEventListener('click', () => selectOption(0));
    btnOpt2.addEventListener('click', () => selectOption(1));
  
    function startGame() {
      currentQuestion = 0;
      userAnswers = [];
      screenStart.classList.remove('active');
      screenQuestion.classList.add('active');
      showQuestion();
    }
  
    function showQuestion() {
      const q = questions[currentQuestion];
      document.getElementById('question-title').innerText = q.title;
      document.getElementById('question-text').innerText = q.text;
      btnOpt1.innerText = q.options[0].text;
      btnOpt2.innerText = q.options[1].text;
    }
  
    function selectOption(index) {
      userAnswers.push(questions[currentQuestion].options[index].summary);
      currentQuestion++;
  
      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        showFinalScreen();
      }
    }
  
    function showFinalScreen() {
      screenQuestion.classList.remove('active');
      screenEnd.classList.add('active');
  
      const summaryText = userAnswers.map(text => `<p style="margin-bottom: 12px;">• ${text}</p>`).join('');
      document.getElementById('final-summary').innerHTML = summaryText;
    }
  
    function restartGame() {
      screenEnd.classList.remove('active');
      screenStart.classList.add('active');
    }
  });