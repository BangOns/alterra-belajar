import { useEffect, useState } from "react";
import Computer from "./Component/Computer";
import Player from "./Component/Player";
import { RulesGame } from "./Function/RuleGame";

function App() {
  const rules = ["Gunting", "Kertas", "Batu"];
  const [count, setCount] = useState(0);
  const [player, setplayer] = useState({
    Batu: false,
    Gunting: false,
    Kertas: false,
  });
  const [computers, setComputers] = useState("");
  const [result, setResult] = useState("");
  const [scorePlayer, scorePlayerSet] = useState(0);
  const [scoreComp, scoreCompSet] = useState(0);
  const [scoreDraw, scoreDrawSet] = useState(0);
  function GoGames(choose) {
    let randomComputer = Math.floor(Math.random() * rules.length);
    setplayer({
      ...player,
      [choose]: true,
    });
    setCount(count + 1);
    setResult(RulesGame(choose, rules[randomComputer]));
    setComputers(rules[randomComputer]);
  }
  function ResultGame(result) {
    if (result === "Komputer") {
      console.log({ result });
      scoreCompSet((prev) => prev + 10);
      console.log({ scoreComp });
    } else if (result === "Player") {
      scorePlayerSet((prev) => prev + 10);
      console.log({ scorePlayer });
    } else if (result === "Seri") {
      scorePlayerSet(scorePlayer + 0);
      scoreCompSet(scoreComp + 0);
      scoreDrawSet(scoreDraw + 1);
    }
  }

  useEffect(() => {
    ResultGame(result);
  }, [count]);
  return (
    <div className=" h-auto">
      <header className="text-center pt-4">
        <h1 className="text-3xl font-bold">Suit Game</h1>
      </header>

      <main className=" bg-slate-100 w-9/12 mx-auto gap-10 flex items-center flex-col justify-center h-96 shadow ">
        <Computer value={computers} />
        <div className="result">
          <h1 className="text-3xl font-bold">
            {result === "Komputer"
              ? "Kalah"
              : result === "Player"
              ? "Menang"
              : result === "Seri"
              ? "Seri"
              : "Go"}
          </h1>
        </div>
        <div className="player flex gap-4">
          <Player player={"✊"} result={"Batu"} click={GoGames} />
          <Player player={"✌"} result={"Gunting"} click={GoGames} />
          <Player player={"✋"} result={"Kertas"} click={GoGames} />
        </div>
        <p>
          {count >= 10
            ? scoreComp > scorePlayer
              ? "Komputer Menang"
              : scoreComp < scorePlayer
              ? "Player Menang"
              : "Seri"
            : ""}
        </p>
        <p className="text-start">Attempt: {count}</p>
      </main>

      <div className="container">
        <p>Score Computer : {scoreComp}</p>
        <p>Score Player : {scorePlayer}</p>
        <p>Draw Times : {scoreDraw} </p>
        {count >= 10 ? (
          <button
            className="py-2 px-3"
            onClick={() => {
              scoreCompSet(0);
              scorePlayerSet(0);
              setCount(0);
              scoreDrawSet(0);
            }}
          >
            Reset
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
