import './style.scss';
import { newGames, halloweenGames, earlyAccessGames, cheapGames } from './arrayList.js'
import { DHGameItem } from '../../components/DHGameItem';

export function DHGames() {

  return (
    <section className='list-games'>

      <h1>New Games</h1>

      <section className='component-list'>

        {
          newGames.map(
            item => (
              <>
                <img src={item.picture} alt="" />
                <div className="info-item">
                  <div className="infos">
                    <h3>{item.name}</h3>
                    <div>
                      <span>{item.plataforms}</span>
                    </div>
                    <small>{item.categories}</small>
                  </div>
                  <p>{item.price}</p>
                </div>
              </>
            )
          )
        }

      </section>
    </section>
  )
}