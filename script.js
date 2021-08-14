
let h = 0; m = 0; s = 0; d = 0;

function iniciarCro(){
   //paga os valores e armazena nas variaveis;
   let timerHoras = document.getElementById('hora');
   let timerMinutos = document.getElementById('minuto');
   let timerSegundos = document.getElementById('segundo');
   let timerDecimo = document.getElementById('decimo');
   //faz a verificação se as variaveis estão zeradas
    crono = setInterval(function(){
       timerHoras.innerHTML = h < 10 ? '0' + h : h;
       timerMinutos.innerHTML = m < 10 ? '0' + m : m;
       timerSegundos.innerHTML = s < 10 ? '0' + s : s;
       timerDecimo.innerHTML = d < 10 ? '0' + d : d;
   //incrementa a variavel caso a condição for atendida;
      if(d < 9) { d += 1;
       }else if(s < 59) { d = 0; s += 1;
       }else if(m < 59) { d = 0; s = 0; m += 1;
       }else if(h < 23) { d = 0; s = 0;  m = 0; h += 1;
       }else { alert('Ops! Estourou as 24h!!!'); }
      
   } ,100); 

}

function pausarCro(){
   //pausa o cronometro;
    clearInterval(crono);

}

function zerarCro() {
  //zera as variaveis e o cronometro;
  h = 0;
  m = 0;
  s = 0;
  d = 0;
  document.getElementById('hora').innerText = '00';
  document.getElementById('minuto').innerText = '00';
  document.getElementById('segundo').innerText = '00';
  document.getElementById('decimo').innerText = '00';
  
}





function date(){
//Exibir a data na div
   var now = new Date();

   let dayName = new Array("Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado");
   let mesName = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");

   let data = dayName[now.getDay()] +', ' +now.getDate() +' de ' +mesName[now.getMonth()] +' de ' +now.getFullYear();

  document.getElementById('date').innerHTML = data;

} 

