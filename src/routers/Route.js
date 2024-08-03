import {Routers, Route} from 'react-router-dom'

import Home from '..pages/Home'
import Cart from '..pages/Cart'
import Checkout from '..pages/Checkout'
import Login from '..pages/Login'
import Produitdetails from '..pages/Produitdetails'
import Shop from '..pages/Shop'
import Signup from '..pages/Signup'

const Route = () =>{
    return
 <Routers>
        <Route path='Home' element={<Home/>}/>
        <Route path='Cart' element={<Cart/>}/>
        <Route path='Checkout' element={<Checkout/>}/>
        <Route path='Login' element={<Login/>}/>
        <Route path='Produitdetails' element={<Produitdetails/>}/>
        <Route path='Shop' element={<Shop/>}/>
        <Route path='Signup' element={<Signup/>}/>
    </Routers>;
};
export default Routers;