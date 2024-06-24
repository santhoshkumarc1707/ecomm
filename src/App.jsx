import { BrowserRouter, Routes, Route, } from "react-router-dom"
import Layout from "./components/layout/layout";
import ProductList from "./pages/admin/productList";
import View from "./pages/client/view";
import Addform from "./pages/admin/addform";
import Editform from './pages/admin/editform';
import Card from './pages/cart/cart';
import './App.css';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='productlist' element={<ProductList />} />
            <Route path='addform' element={<Addform />} />
            <Route path='editform/:id' element={<Editform />} />
            <Route path='/view' element={<View />} />
            <Route path='cart' element={<Card />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App