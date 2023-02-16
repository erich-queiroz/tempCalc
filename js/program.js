const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const calculateButton = document.querySelector("#calculate");
const infoButton = document.querySelector("#info");
const resultParagraph = document.querySelector("#result");
const infoModal = document.querySelector("#infoModal");
const closeModalButton = document.querySelector("#closeModal");

const disableIncrementInput = document.querySelectorAll("input[type='number']");

disableIncrementInput.forEach(function(input) {
    input.style.WebkitAppearance = "none"; 
    input.style.MozAppearance = "textfield";
});

calculateButton.addEventListener("click", function () {
  if (!weight.value || !height.value) {
    weight.style.border = "1px solid red";
    height.style.border = "1px solid red";
    resultParagraph.innerHTML = "Preencha todos os campos!";
    resultParagraph.style.color = "red";
  } else {
    resultParagraph.style.color = "black";
    weight.style.border = "1px solid lightgray";
    height.style.border = "1px solid lightgray";
    const weightValue = parseFloat(weight.value);
    const heightValue = parseFloat(height.value);
    const imc = weightValue / (heightValue * heightValue);
    resultParagraph.innerHTML = `Seu IMC é ${imc.toFixed(2)}`;
    displayMessage(imc);
  }
});



function displayMessage(imc) {
  const message = document.querySelector("#message");
  
  const messageForImc = document.querySelector("#messageForImc");
    if (imc < 18.5) {
      
    message.style.color = "red";
    message.innerHTML = "<h2>⚠️ Você está abaixo do peso ideal</h2>";
    messageForImc.innerHTML = `
    <style>
      .resultImc {
        font-size: 16px;
        color: #888;        
      }
      .hintImc {
        color: #044c87;
        font-size: 18px;
        font-weight: bold;
      }
    </style>
    <p class="resultImc">Atualmente seu IMC é: <b>${imc.toFixed(2)}</p></b>
    <p class="hintImc"><blockquote class="hintImc">Dicas</blockquote></p>
      <ul>
        <li>🔹 Procure aumentar a ingestão de alimentos nutritivos e calóricos para ganhar peso de forma saudável.</li>
        <li>🔹 Consulte um nutricionista para obter uma dieta equilibrada e saudável para você.</li>
        <li>🔹 Tente incorporar exercícios de fortalecimento muscular para ajudar a construir músculos e manter um corpo saudável.</li>
      </ul>
      <p class="hintImc"><blockquote class="hintImc">Riscos à saúde</blockquote></p>
      <ul>
        <li>🔹 Maior probabilidade de desenvolver problemas de saúde, como desnutrição, anemia, osteoporose e comprometimento do sistema imunológico.</li>
      </ul>
      <br>
      <hr>
      <br>
    `
  } else if (imc >= 18.5 && imc < 25) {
    message.style.color = "green";
    message.innerHTML = "<h2>🎉 Seu peso está normal</h2>";
    messageForImc.innerHTML = `
    <style>
      .resultImc {
        font-size: 16px;
        color: #888;        
      }
      .hintImc {
        color: #044c87;
        font-size: 18px;
        font-weight: bold;
      }
    </style>
    <p class="resultImc">Atualmente seu IMC é: <b>${imc.toFixed(2)}</p></b>
    <p class="hintImc"><blockquote class="hintImc">Dicas</blockquote></p>
    <ul>
      <li>🔹 Continue com um estilo de vida saudável, incluindo uma dieta equilibrada e exercícios regulares.</li>
      <li>🔹 Certifique-se de que sua dieta inclua alimentos nutritivos e variados para atender às necessidades nutricionais do seu corpo.</li>
    </ul>
    <p class="hintImc"><blockquote class="hintImc">Riscos à saúde</blockquote></p>
    <ul>
      <li>🔹 Menor probabilidade de desenvolver problemas de saúde relacionados à obesidade, como doenças cardíacas, diabetes tipo 2 e hipertensão arterial.</li>
    </ul>
    <br>
    <hr>
    <br>
    `
  
  } else if (imc >= 25 && imc < 30) {
    message.style.color = "#E3E000";
    message.innerHTML = "<h2>📈 Você está com sobrepeso</h2>";
    messageForImc.innerHTML = `<style>
    .resultImc {
      font-size: 16px;
      color: #888;        
    }
    .hintImc {
      color: #044c87;
      font-size: 18px;
      font-weight: bold;
    }
  </style>
  <p class="resultImc">Atualmente seu IMC é: <b>${imc.toFixed(2)}</p></b>
  <p class="hintImc"><blockquote class="hintImc">Dicas</blockquote></p>
    <ul>
      <li>🔹 Considere fazer mudanças em sua dieta, como reduzir o consumo de alimentos processados e açucarados, e aumentar a ingestão de frutas, legumes e alimentos integrais.</li>
      <li>🔹 Tente incorporar atividade física regular em sua rotina, como caminhadas, corridas ou natação.</li>
    </ul> 
    <p class="hintImc"><blockquote class="hintImc">Riscos à saúde</blockquote></p>
    <ul>
      <li>🔹 Maior probabilidade de desenvolver problemas de saúde relacionados à obesidade, como doenças cardíacas, diabetes tipo 2 e hipertensão arterial.</li>
    </ul>
    <br>
    <hr>
    <br> 
    `
  } else if (imc >= 30 && imc < 35) {
    message.style.color = "red";
    message.innerHTML = "<h2>⚠️ Você está com obesidade grau 1</h2>";
    messageForImc.innerHTML = `<style>
    .resultImc {
      font-size: 16px;
      color: #888;        
    }
    .hintImc {
      color: #044c87;
      font-size: 18px;
      font-weight: bold;
    }
  </style>
  <p class="resultImc">Atualmente seu IMC é: <b>${imc.toFixed(2)}</p></b>
  <p class="hintImc"><blockquote class="hintImc">Dicas</blockquote></p>
    <ul>
      <li>🔹 Procure aconselhamento de um médico e/ou nutricionista para obter um plano de alimentação saudável e um programa de exercícios adequado.</li>
      <li>🔹 Considere a possibilidade de se juntar a um grupo de suporte ou de procurar a ajuda de um profissional de saúde mental para ajudar a lidar com questões emocionais associadas ao excesso de peso.</li>
    </ul>
    <p class="hintImc"><blockquote class="hintImc">Riscos à saúde</blockquote></p>
    <ul>
        <li>🔹 Maior probabilidade de desenvolver problemas de saúde relacionados à obesidade, como doenças cardíacas, diabetes tipo 2, hipertensão arterial e apneia do sono.</li>
      </ul>
    <br>
    <hr>
    <br>
    `
  
  } else if (imc >= 35 && imc < 40) {
    message.style.color = "red";
    message.innerHTML = "<h2>⚠️ Você está com obesidade grau 2</h2>";
    messageForImc.innerHTML = `<style>
    .resultImc {
      font-size: 16px;
      color: #888;        
    }
    .hintImc {
      color: #044c87;
      font-size: 18px;
      font-weight: bold;
    }
  </style>
  <p class="resultImc">Atualmente seu IMC é: <b>${imc.toFixed(2)}</p></b>
  <p class="hintImc"><blockquote class="hintImc">Dicas</blockquote></p>
    <ul>
      <li>🔹 É importante buscar atendimento médico regularmente e seguir as recomendações de um médico e/ou nutricionista para melhorar sua saúde.</li>
      <li>🔹 Considere a possibilidade de participar de um programa de perda de peso supervisionado para ajudá-lo a atingir seus objetivos de perda de peso de forma saudável e sustentável.</li>
    </ul>
    <p class="hintImc"><blockquote class="hintImc">Riscos à saúde</blockquote></p>
    <ul>
      <li>🔹 Maior probabilidade de desenvolver problemas de saúde relacionados à obesidade, como doenças cardíacas, diabetes tipo 2, hipertensão arterial, apneia do sono e câncer.</li>
    </ul>
    <br>
    <hr>
    <br>
    `
  
  } else {
    message.innerHTML = "<h2>⚠️ Você está com obesidade grau 3 (Mórbida)</h2>";
    message.style.color = "red";
    messageForImc.innerHTML = `<style>
    .resultImc {
      font-size: 16px;
      color: #888;        
    }
    .hintImc {
      color: #044c87;
      font-size: 18px;
      font-weight: bold;
    }
  </style>
  <p class="resultImc">Atualmente seu IMC é: <b>${imc.toFixed(2)}</p></b>
  <p class="hintImc"><blockquote class="hintImc">Dicas</blockquote></p>
    <ul>
      <li>🔹 É fundamental buscar tratamento médico imediatamente para ajudar a controlar o peso, melhorar a alimentação e aumentar a atividade física.</li>
      <li>🔹 O tratamento pode incluir mudanças no estilo de vida, como uma dieta saudável e exercícios regulares, bem como medicamentos prescritos por um médico e, em casos mais graves, a cirurgia bariátrica.</li>
      <li>🔹 É importante estar ciente dos gatilhos de alimentação emocional, pois as pessoas que lutam com a obesidade mórbida geralmente usam alimentos como uma forma de lidar com o estresse e as emoções negativas.</li>
      <li>🔹 Ter um suporte social sólido também pode ser útil para ajudar a lidar com os desafios emocionais da obesidade mórbida.</li>
    </ul>
    <p class="hintImc"><blockquote class="hintImc">Riscos à saúde</blockquote></p>
    <ul>
      <li>🔹 A obesidade mórbida pode levar a uma série de problemas de saúde, incluindo doenças cardiovasculares, diabetes tipo 2, hipertensão arterial, colesterol alto, doença hepática gordurosa, apneia do sono, osteoartrite e certos tipos de câncer.</li>
      <li>🔹 A obesidade mórbida também pode afetar negativamente a saúde mental, aumentando o risco de depressão e ansiedade.</li>
      <li>🔹 A obesidade mórbida pode reduzir a expectativa de vida em vários anos.</li>
    </ul>
    <br>
    <hr>
    <br>
    `
  
  }
}

infoButton.addEventListener("click", function () {
  infoModal.style.display = "block";
});

closeModalButton.addEventListener("click", function() {
  infoModal.style.display = "none";
});

// Adiciona o


// Adiciona o evento para fechar o modal clicando fora da área do modal
window.addEventListener("click", function(event) {
  if (event.target == infoModal) {
    infoModal.style.display = "none";
  }
});

// Adiciona o evento para transformar o número digitado em altura
height.addEventListener("input", function() {
  let val = this.value.replace(/\D/g, "");
  if (val.length > 1) {
    val = val.slice(0, 1) + "." + val.slice(1);
  }
  this.value = val;
});
