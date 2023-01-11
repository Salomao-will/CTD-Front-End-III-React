import './style.scss'
import cardAkita from './../../assets/images/akita.jpeg';
import cardEnglish from './../../assets/images/english.jpeg';
import cardCoffeeGringo from './../../assets/images/coffeGringo.jpeg';
import cardPodcast from './../../assets/images/podcast.jpeg';
import { TerceiraAulaItem } from '../../components/TerceiraAulaItem';

export function TerceiraAula(){

  const componentsCard = [
    {
      image: cardAkita,
      title: 'Akitando',
      description: 'Fabio Akita'
    },
    {
      image: cardEnglish,
      title: 'Speak Better English',
      description: 'Harry'
    },
    {
      image: cardCoffeeGringo,
      title: 'Coffe With Gringos',
      description: 'Dynaminc English'
    },
    {
      image: cardPodcast,
      title: 'Fora da Norma Podcast',
      description: 'Fora da Norma'
    }
  ]

  return(
    <div className="card-components">
      <h1>Your shows</h1>
      <ul className='list-components'>
        {
          componentsCard.map(
            (component, index) => (
              <TerceiraAulaItem cards={component}/>
            )
          )
        }
      </ul>
    </div>
  )
}