// Import React
import React from 'react'
import Featured from './components/featured'

// Function
const App = () => {
  let lista_teste =[
    {
      content : 'teste',
      image_src : 'https://www.hostinger.com/br/tutoriais/wp-content/uploads/sites/53/2018/05/vps-hero.png',
      link : '/teste'
    },
    {
      content : 'teste',
      image_src : 'https://www.hostinger.com/br/tutoriais/wp-content/uploads/sites/53/2018/05/vps-hero.png',
      link : '/teste'
    },
    {
      content : 'teste',
      image_src : 'https://www.hostinger.com/br/tutoriais/wp-content/uploads/sites/53/2018/05/vps-hero.png',
      link : '/teste'
    },
  ]
  return (
    <div><Featured card_parms_list={lista_teste}/></div>
  )
}

export default App