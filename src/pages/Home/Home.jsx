import './style.scss';
import cardHome from '../../assets/images/cardHome.png';
import { Card } from '../../components/Card/card';

export function Home() {

  const cardJson = [
    {
      image: cardHome,
      title: 'Hotéis',
      text: '807.105 hotéis'
    },
    {
      image: cardHome,
      title: 'Hotéis',
      text: '807.105 hotéis'
    },
    {
      image: cardHome,
      title: 'Hotéis',
      text: '807.105 hotéis'
    },
    {
      image: cardHome,
      title: 'Hotéis',
      text: '807.105 hotéis'
    }
  ]

  return (
    <main>

      <h1>Buscar por tipos de acomodação</h1>

      <section className='card-1'>

        {
          cardJson.map(
            item => (
              <Card card={item} />
            )
          )
        }

      </section>

      <h1>Recomendações</h1>

      <section className='card-2'>


        <div className="container">

          <img src={cardHome} alt="foto de carro" />

          <div className="description">

            <div className="avaliation">
              <div>
                <p>Hotel 5 estrela</p>
                <h3>Hermitage Hotel</h3>
              </div>

              <div>
                <h1>8</h1>
                <p>Bom</p>
              </div>
            </div>

          </div>

        </div>

      </section>

    </main>
  )
}