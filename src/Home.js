import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image' src='GWBleedingHero.jpg' alt='splash' />

        <div className='home__row'>
          <Product
            id='5463622'
            title='The Brooklyn Kings Archive: Billie Holiday Mosaic along 125th Street, Harlem New York'
            price={350.0}
            image={'kingdomcover-55.jpg'}
            rating={4}
          />
          <Product
            id='5463621'
            title='West Africa Summer Olympics at Piscine Olympique, Point E, Dakar 2016'
            price={350.0}
            image={'butterfly-55.jpg'}
            rating={5}
          />
        </div>
        <div className='home__row'>
          <Product
            id='5463623'
            title='Rusted Taxi, Monument de la Renaissance in Mamelles'
            price={350.0}
            image={'strokkurGeyser.-55jpg'}
            rating={4}
          />
          <Product
            id='5463624'
            title='Kidane Mihret Church, Addis Ababa, one of the most modern examples of an Orthodox Church I have ever seen.'
            price={450.0}
            image={'kidanemihret-55.jpg'}
            rating={5}
          />
          <Product
            id='5463625'
            title='Entoto Model, Addis Ababa. This young photographer agreed to pose for me in the Entoto Forest region North of Piassa, Addis Ababa.'
            price={300.0}
            image={'entotoWoman-55.jpg'}
            rating={4}
          />
        </div>
        <div className='home__row'>
          <Product
            id='5463626'
            title='Eastern Parkway West-Indian Day Parade, Brooklyn New York, 2012'
            price={350.0}
            image={'redschoolhouse.jpg'}
            rating={4}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
