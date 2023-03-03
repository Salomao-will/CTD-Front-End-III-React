import './style.scss';

export function Card(props) {
  return (

    <div className="card">

      <img src={props.card.image} alt="card dos carros recomendados" />

      <div className="title">

        <h3>{props.card.title}</h3>

        <p>{props.card.text}</p>

      </div>

    </div>



  )
}