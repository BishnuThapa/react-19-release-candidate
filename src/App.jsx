import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NetFlixSerie />
      <NetFlixSerie />
      <NetFlixSerie />
    </>
  )
}
const NetFlixSerie = () => {
  return (
    <>
      <img src="amo3.jpg" alt="annapurna circuit" height={250} width={250} />
      <h2>Name:"Queen Of Tears"</h2>
      <h3>Rating:4.8⭐</h3>
      <p>
        Summary:Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
        tempore nisi quaerat, dolores aut iste soluta veritatis exercitationem!
        Totam sunt, vero consequuntur ipsam illum amet quia quod est dolorem
        minus saepe quae obcaecati ut reiciendis veniam animi numquam
        repudiandae soluta tempora iusto similique magni reprehenderit velit
        deleniti. Quidem, pariatur eos.
      </p>
    </>
  );
  
}

export default App


