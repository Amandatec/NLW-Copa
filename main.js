function createGame(player1, hour, player2){
  return `
  <li>
    <div class="country">
      <img src="./assets/${player1}-icon.svg" alt="ícone redondo da bandeira do ${player1}">
      <p>${player1}</p>
    </div>
    <strong>${hour}</strong>
    <div class="country">
      <img src="./assets/${player2}-icon.svg" alt="ícone redondo da bandeira de ${player2}">
      <p>${player2}</p>
    </div>
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

function changeTheme() {
  document.body.classList.toggle("green")
}

document.querySelector("#cards").innerHTML = 

  createCard("20/11", "domingo", createGame("Qatar", "16:00", "Ecuador"))+

  createCard("21/11", "segunda", 
  createGame("England", "10:00", "Iran") + 
  createGame("Senegal", "13:00", "Netherlands") + 
  createGame("Unitedstates", "16:00", "Wales"))+

  createCard("22/11", "terça", 
  createGame("Argentina", "07:00", "Saudiarabia") + 
  createGame("Denmark", "10:00", "Tunisia") + 
  createGame("Mexico", "13:00", "Poland") + 
  createGame("Australia", "16:00", "France"))+

  createCard("23/11", "quarta", 
  createGame("Morocco", "07:00", "Croatia") + 
  createGame("Germany", "10:00", "Japan") + 
  createGame("Spain", "13:00", "CostaRica") + 
  createGame("Belgium", "16:00", "Canada"))+

  createCard("24/11", "quinta", 
  createGame("Cameroon", "07:00", "Switzerland") + 
  createGame("Southkorea", "10:00", "Uruguay") + 
  createGame("Portugal", "13:00", "Ghana") + 
  createGame("Brazil", "16:00", "Serbia"))+

  createCard("25/11", "sexta", 
  createGame("Wales", "07:00", "Iran") + 
  createGame("Qatar", "10:00", "Senegal") + 
  createGame("Netherlands", "13:00", "Ecuador") + 
  createGame("England", "16:00", "Unitedstates"))+

  createCard("26/11", "sábado", 
  createGame("Tunisia", "07:00", "Australia") + 
  createGame("Poland", "10:00", "SaudiArabia") + 
  createGame("France", "13:00", "Denmark") + 
  createGame("Argentina", "16:00", "Mexico"))+
  
  createCard("27/11", "domingo", 
  createGame("Japan", "07:00", "CostaRica") + 
  createGame("Belgium", "10:00", "Morocco") + 
  createGame("Croatia", "13:00", "Canada") + 
  createGame("Germany", "16:00", "Spain"))+

  createCard("28/11", "segunda", 
  createGame("Serbia", "07:00", "Cameroon") + 
  createGame("Southkorea", "10:00", "Ghana") + 
  createGame("Brazil", "13:00", "Switzerland") + 
  createGame("Portugal", "16:00", "Uruguay"))+


  createCard("29/11", "terça", 
  createGame("Ecuador", "12:00", "Senegal") + 
  createGame("Netherlands", "12:00", "Qatar") + 
  createGame("Iran", "16:00", "UnitedStates") + 
  createGame("Wales", "16:00", "England"))+

  createCard("30/11", "quarta", 
  createGame("Tunisia", "12:00", "France") + 
  createGame("Australia", "12:00", "Denmark") + 
  createGame("Poland", "16:00", "Argentina") + 
  createGame("SaudiArabia", "16:00", "Mexico"))+

  createCard("01/12", "quinta", 
  createGame("Croatia", "12:00", "Belgium") + 
  createGame("Canada", "12:00", "Morocco") + 
  createGame("Japan", "16:00", "Spain") + 
  createGame("Costarica", "16:00", "Germany"))+

  createCard("02/12", "sexta", 
  createGame("SouthKorea", "12:00", "Portugal") + 
  createGame("Ghana", "12:00", "Uruguay") + 
  createGame("Serbia", "16:00", "Switzerland") + 
  createGame("Cameroon", "16:00", "Brazil"))

  

  

  
