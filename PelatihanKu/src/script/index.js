const rules = ["Gunting", "Kertas", "Batu"];
const getClickPlayer = document.querySelectorAll(".choice");
const getWhoWin = document.querySelector(".result");
const getValueComputer = document.querySelector(".computer");
// Rules Game
function gameRules(playerChoice, getComputerChoice) {
  const computerChoice = rules[getComputerChoice];
  if (playerChoice === computerChoice) {
    return "Seri";
  } else if (playerChoice === "Gunting" && computerChoice === "Batu") {
    return "Kalah";
  } else if (playerChoice === "Kertas" && computerChoice === "Gunting") {
    return "Kalah";
  } else if (playerChoice === "Batu" && computerChoice === "Kertas") {
    return "Kalah";
  } else {
    return "Menang";
  }
}

getClickPlayer.forEach((player) => {
  player.addEventListener("click", (event) => {
    const getComputerChoice = Math.floor(Math.random() * rules.length);
    const getValueComputer = document.querySelector(".computer");
    getValueComputer.textContent = rules[getComputerChoice];
    const playerChoice = event.target.textContent;
    const hasil = gameRules(playerChoice, getComputerChoice);
    getWhoWin.textContent = hasil;
  });
});
