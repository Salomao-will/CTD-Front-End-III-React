import './style.scss';

export function JogoDaVelha({value, onSquareClick}) {
  return(
    <>
      <button className="square" onClick={onSquareClick}>
      {value}
    </button>
    </>
  )
}