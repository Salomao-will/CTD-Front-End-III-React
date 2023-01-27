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

  return(
    <div>

      <h1>Halloween Offers</h1>

      <div className="container">
        <section>
          <img src="" alt="" />
          <h3>Dark Soul</h3>
          <small>soul like</small>
          <small>200</small>
          <p>50</p>
        </section>
      </div>

    </div>
  )
}