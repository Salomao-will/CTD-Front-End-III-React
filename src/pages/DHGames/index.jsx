import './style.scss';
import { newGames } from './arrayList.js'
import { DHGameItem, halloweenGames, earlyAccessGames, cheapGames } from '../../components/DHGameItem';

export function DHGames() {
  return(
    <section className='list-games'>

      <h1>New Games</h1>
      
      <section className='component-list'>

        {/* {
          newGames.Map(
            item => (
              <DHGameItem />
            )
          )
        } */}

      </section>
    </section>
  )
}