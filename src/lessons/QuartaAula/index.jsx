import { useState } from 'react'
import './style.scss'

export function QuartaAula() {

  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Xbox',
      price: '3.000',
      picture: 'https://http2.mlstatic.com/D_NQ_NP_695945-MLB50098260025_052022-O.webp'
    },
    {
      id: 2,
      name: 'Playstation 5',
      price: '5.000',
      picture: 'https://http2.mlstatic.com/D_NQ_NP_841787-MLA44484414455_012021-O.webp'
    },
    {
      id: 3,
      name: 'Switch',
      price: '2.000',
      picture: 'https://http2.mlstatic.com/D_NQ_NP_771705-MLA40692342174_022020-W.webp'
    }
  ])

  const newProduct = {
    name: 'Playstation 4',
    price: '2.000',
    picture: 'https://http2.mlstatic.com/D_NQ_NP_798586-MLA40076060236_122019-W.webp'
  }

  function addItem() {
    setProducts([...products, newProduct])
  }

  return (
    <div className="main">

      <button onClick={() => addItem()
      } type='submit'>Add Card</button>

      <div className="card">
        <ul className='listCard'>
          {
            products.map(
              item => (
                <li key={item.id}>
                  <img src={item.picture} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                </li>
              )
            )
          }
        </ul>
      </div>

    </div>
  )
}