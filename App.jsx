import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Card from './components/Card.jsx'
import data from './data'

export default function App() {
   const cards =  data.map(card => {
      return (
            <Card
               key={card.id}
               card={card}
           />
      )
   })
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="card-section">
        {cards}
      </section>
    </div>
  )
}
