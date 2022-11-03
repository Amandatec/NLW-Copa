function createGame(player1, hour, player2){
  return `
  <li>
    <img src="./assets/${player1}-icon.svg" alt="ícone redondo da bandeira do ${player1}">
    <strong>${hour}</strong>
    <img src="./assets/${player2}-icon.svg" alt="ícone redondo da bandeira de ${player2}">
</li>
  `
}

let delay= -0.3;
function createCard (date,day, games){
  delay= delay + 0.3
  return `
  <div class="card" style="animation-delay:${delay}s">
    <h2>${date} <span>${day}</span></h2>

    <ul>
     ${games}
    </ul>
  </div>
  `
} 

document.querySelector("#cards").innerHTML = 


  createCard("24/11", "Quinta", createGame("brazil", "16:00", "serbia") + createGame("southkorea", "12:00", "senegal") + createGame("uruguay", "17:00", "unitedstates") + createGame("brazil", "14:00", "serbia"))+

  createCard("28/11", "Segunda", createGame("brazil", "13:00", "switzerland") + createGame("argentina", "12:00", "spain"))+

  createCard("02/12", "sexta", createGame("cameroon", "16:00", "brazil"))
