import './style.scss';
import { newGames, halloweenGames, earlyAccessGames, cheapGames } from './arrayList.js'
import { DHGameItem } from '../../components/DHGameItem';

export function DHGames() {

  return (
    <section className='list-games'>


      <section className='component-list'>
      <h1>New Games</h1>

        {
          newGames.map(
            (item, index) => (
              <>
                <DHGameItem key={index} gameList={item} />
              </>
            )
          )
        }
      </section>
    </section>
  )
}