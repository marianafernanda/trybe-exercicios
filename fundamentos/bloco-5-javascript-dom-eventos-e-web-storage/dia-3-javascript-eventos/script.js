function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  function requisito1() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let percorreUl = document.querySelector('#days');
    for (let index = 0; index < dezDaysList.length; index += 1) {
        let elementDays = dezDaysList[index];

        let days = document.createElement('li');
        
        if (elementDays === 24 | elementDays === 31) {
            days.innerText = elementDays;
            days.className = 'day holiday';
            percorreUl.appendChild(days)
        } else if (elementDays === 4 | elementDays === 11 | elementDays === 18) {
            days.innerText = elementDays;
            days.className = 'day friday';
            percorreUl.appendChild(days);
        } else if (elementDays === 25) {
            days.innerText = elementDays;
            days.className = 'day holiday friday';
            percorreUl.appendChild(days);
        } else {
            days.innerText = elementDays;
            days.className = 'day'
            percorreUl.appendChild(days);
        }
    }
  }
  requisito1();

  function requisito2(nomeDoBotao) {
      let percorreBotao = document.querySelector('.buttons-container');
      let botaoNovo = document.createElement('button');

      botaoNovo.innerHTML = nomeDoBotao;
      botaoNovo.id = 'btn-holiday';

      percorreBotao.appendChild(botaoNovo);
  }
  requisito2('Feriados');

  function requisito3() {
      let percorreBotaoNovo = document.querySelector('#btn-holiday');
      let percorreHolidays = document.querySelectorAll('.holiday');

      for (index = 0; index < percorreHolidays.length; index += 1) {
          if (percorreHolidays[index].style.backgroundColor === 'lightgreen') {
              percorreHolidays[index].style.backgroundColor = 'rgb(238,238,238)';
          } else {
              percorreHolidays[index].style.backgroundColor = 'lightgreen'
          }
      }
      percorreBotaoNovo.addEventListener('click', requisito3)
  }
  requisito3();

  function requisito4(nomeDoBotao) {
    let percorreBotao = document.querySelector('.buttons-container');
    let botaoNovo = document.createElement('button');

    botaoNovo.innerHTML = nomeDoBotao;
    botaoNovo.id = 'btn-friday';

    percorreBotao.appendChild(botaoNovo);
  }
  requisito4('Sexta-feira');

  function requisito5() {
    let percorreBotaoNovo1 = document.querySelector('#btn-friday');
    let percorreFridays = document.getElementsByClassName('friday');

    for (index = 0; index < percorreFridays.length; index += 1) {
        if (percorreFridays[index].innerText !== 'TGIF') {
            percorreFridays[index].innerText = 'TGIF';
        } else {
            percorreFridays[index].innerText = fridays[index];
        }
    }
    percorreBotaoNovo1.addEventListener('click', requisito5)
  }
  let fridays = [4, 11, 18, 25];
  requisito5(fridays);

  function requisito61(event) {
    let days = document.querySelector('#days');

    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  }
  let days = document.querySelector('#days');
  days.addEventListener('mouseover', requisito61);

  function requisito62(event) {
      let days = document.querySelector('#days');

      event.target.style.fontSize = '20px';
      event.target.style.fontWeight = '200';
  }
  days.addEventListener('mouseout', requisito62);

  function requisito7(string) {
      let tasks = document.querySelector('.my-tasks');
      let span = document.createElement('span');

      span.innerHTML = string;
      tasks.appendChild(span);
  }
  requisito7('Estudar');

  function requisito8(color) {
      let tasks = document.querySelector('.my-tasks');
      let div = document.createElement('div');

      div.className = 'task';
      div.style.backgroundColor = color;
      tasks.appendChild(div);
  }
  requisito8('lightgreen');

  function requisito9(event) {
        let selectedTask = document.getElementsByClassName('task selected');
      
          if (selectedTask.length === 0) {
            event.target.className = 'task selected';
          } else {
            event.target.className = 'task';
          }
  }
  let myTasks = document.querySelector('.task');
  myTasks.addEventListener('click', requisito9);

  function requisito10(event) {
        let selectedTask = document.getElementsByClassName('task selected');
        let taskDiv = document.querySelector('.task');
        let taskColor = taskDiv.style.backgroundColor;
        
          let eventTargetColor = event.target.style.color;
          if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
            let color = selectedTask[0].style.backgroundColor;
            event.target.style.color = color;
          } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
            event.target.style.color = 'rgb(119,119,119)';
          }
  }
  days.addEventListener('click',requisito10);