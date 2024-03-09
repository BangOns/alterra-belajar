import { useEffect, useState } from "react";
import { RulesGame } from "../../Component/PlayerSuit/RuleGame";
import Player from "../../Component/PlayerSuit/Player";
import Computer from "../../Component/PlayerSuit/Computer";
import { Link } from "react-router-dom";
import Button from "../../Component/Button/Button";

export default function Games() {
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
      scoreCompSet(scoreComp + 10);
    } else if (result === "Player") {
      scorePlayerSet(scorePlayer + 10);
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
    <div className="w-full h-auto">
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
              setResult("");
            }}
          >
            Reset
          </button>
        ) : (
          ""
        )}
      </div>
      <div className="max-w-72 mx-auto flex justify-center">
        <Link to={"/"} className="mx-auto w-max-40">
          <Button>Go back To Home</Button>
        </Link>
      </div>
    </div>
  );
}
