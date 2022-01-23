function acessaElemento() {
    console.log(document.getElementById('elementoOndeVoceEsta'));
  };
  acessaElemento();

  function acessaPai() {
      let paiDoElement = document.querySelector('#elementoOndeVoceEsta').parentElement;
      paiDoElement.style.color = 'blue';
  };
  acessaPai();

  function primeiroFilhoDoFilho() {
      document.getElementById('primeiroFilhoDoFilho').innerText = 'Primeiro filho do filho (já tinha adicionado texto antes.)';
  };
  primeiroFilhoDoFilho();

  function acessaPrimeiroFilho() {
      console.log(document.querySelector('#pai').firstElementChild);
  };
  acessaPrimeiroFilho();

  function acessaPrimeiroFilho1() {
      console.log(document.querySelector('#elementoOndeVoceEsta').previousElementSibling);
  };
  acessaPrimeiroFilho1();

  function acessaAtencao() {
      console.log(document.querySelector('#elementoOndeVoceEsta').nextSibling);
  };
  acessaAtencao();

  function acessaTerceiroFilho() {
    console.log(document.querySelector('#elementoOndeVoceEsta').nextElementSibling);
  };
  acessaTerceiroFilho();

  function acessaTerceiroFilho1() {
    console.log(document.querySelector('#pai').lastElementChild.previousElementSibling);
  };
  acessaTerceiroFilho1();

  function irmaoOndeVoceEsta() {
      let conteudo = 'Irmão do elemento onde você está';
      let pai = document.querySelector('#pai');
      let irmaoOndeVoceEsta = document.createElement('section');
      irmaoOndeVoceEsta.innerText = conteudo;
      irmaoOndeVoceEsta.id = 'irmao';
      pai.appendChild(irmaoOndeVoceEsta);
  };
  irmaoOndeVoceEsta();

  function terceiroFilhoDoFilho() {
      let conteudo1 = 'Terceiro filho do filho';
      let pai1 = document.querySelector('#elementoOndeVoceEsta');
      let terceiroFilhoDoFilho = document.createElement('section');
      terceiroFilhoDoFilho.innerText = conteudo1;
      terceiroFilhoDoFilho.id = 'terceiroFilhoDoFilho';
      pai1.appendChild(terceiroFilhoDoFilho);
  }
  terceiroFilhoDoFilho();

  function primeiroNeto() {
      let conteudo2 = 'Primeiro neto';
      let pai2 = document.querySelector('#primeiroFilhoDoFilho');
      let primeiroNeto = document.createElement('section');
      primeiroNeto.id = 'primeiroNeto';
      primeiroNeto.innerText = conteudo2;
      pai2.appendChild(primeiroNeto);
  }
  primeiroNeto();

  function acessaTerceiroFilho2 () {
      console.log(document.querySelector('#primeiroNeto').parentElement.parentElement.nextElementSibling);
  }
  acessaTerceiroFilho2();

  function removeFilhos() {
      let paiPai = document.getElementById('pai');

      for (let index = 0; index < paiPai.children.length; index += 1) {
          let element = paiPai.children[index];
          console.log(element);

          if (element.id !== 'elementoOndeVoceEsta') {
              paiPai.removeChild(element);
          }
      }

      let onde = document.getElementById('elementoOndeVoceEsta');

      for (let index = 0; index < onde.children.length; index += 1) {
          let element = onde.children[index];
          console.log(element);

          if (element.id !== 'primeiroFilhoDoFilho') {
              onde.removeChild(element);
          }
      }

      let primeiroNeto1 = document.getElementById('primeiroNeto');
      primeiroNeto1.remove();

      let atencao = document.querySelector('#elementoOndeVoceEsta').nextSibling;
      atencao.remove();
  }
  removeFilhos();
  removeFilhos();
