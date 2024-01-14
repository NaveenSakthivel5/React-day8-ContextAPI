import { useState } from 'react'
import { CartContextProvider } from './CartContext'
import Iphone9 from './Iphone9'
import IphoneX from './IphoneX'
import SamsungUniverse9 from './SamsungUniverse9'
import OppoF19 from './OppoF19'
import HuaweiP30 from './HuaweiP30'


function App() {
 const [count, setCount] = useState(0)

return (
    <CartContextProvider>
      <div id="major">
        <h1>Cart Products</h1>
         <Iphone9/><br></br>
         <IphoneX/><br></br>
         <SamsungUniverse9/><br></br>
         <OppoF19/><br></br>
         <HuaweiP30/>
      </div>
    </CartContextProvider>
  )
}

export default App