import './style.scss';

export function TerceiraAulaItem(props) {

  return (

    <li className='list'>
      <img src={props.cards.image} alt="" />
      <h3>{props.cards.title}</h3>
      <p>{props.cards.description}</p>
    </li>

  )

}