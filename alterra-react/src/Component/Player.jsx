export default function Player({ player, result, click }) {
  return (
    <p
      className={`w-16 h-16 rounded-full hover:cursor-pointer hover:scale-110 shadow bg-slate-300 items-center flex justify-center  `}
      onClick={() => click(result)}
    >
      {player}
    </p>
  );
}
