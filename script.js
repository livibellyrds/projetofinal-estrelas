const imgPersonagens = document.getElementsByTagName('img');
const nomePersonagens = document.getElementsByTagName('h2');
const localizations = document.getElementsByTagName('p');

var idsPersonagem = [];

personagemAleatorio = () => {
  for(i=1;i<=4;i++){
   idsPersonagem.push(Math.floor(Math.random() * (671-1) +1))
  }
};

exibirPersonagem = () => {
  personagemAleatorio();
  return fetch(`https://rickandmortyapi.com/api/character/${idsPersonagem}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "content-type": "application/json"
    }
  }).then((response) => response.json()).then((data) => {
    for(i=0;i<=3;i++) {
      imgPersonagens[i].src = data[i].image;
      nomePersonagens[i].innerHTML = data[i].name;
      localizations[i].innerHTML = data[i].location.name
    }
  });
}
exibirPersonagem()








