import './style.scss';

export function DHGameItem(props) {
  return (
    <div className="info-item">
      <img src={props.gameList.picture} alt="" />
      <div className="infos">
        <h3>{props.gameList.name}</h3>
        <div>
          <span>{props.gameList.plataforms}</span>
        </div>
        <small>{props.gameList.categories}</small>
      </div>
      <p>{props.gameList.price}</p>
    </div>
  )
}