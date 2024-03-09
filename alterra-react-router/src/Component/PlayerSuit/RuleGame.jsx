export function RulesGame(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "Seri";
  } else if (playerChoice === "Gunting" && computerChoice === "Batu") {
    return "Komputer";
  } else if (playerChoice === "Kertas" && computerChoice === "Gunting") {
    return "Komputer";
  } else if (playerChoice === "Batu" && computerChoice === "Kertas") {
    return "Komputer";
  } else {
    return "Player";
  }
}
