import { useContext } from 'react'
import { CartContext } from '../../context/card'
import './cart.scss'
import Button from '../../components/button/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Cart = () => {
    const { cartItems, addToCart, removeFromCart, getCartTotal, clearCart } = useContext(CartContext)

    return (
        <div>
            {cartItems.map((curr, idx) =>
                <div key={idx} className='cart_container'>
                    <div className='img_cart_container' ><img src={curr.image} width={250} height={250} />
                        <p> Price: ${curr.price}</p>
                        <p>Rating:{curr.rating}</p>
                    </div>
                    <p className='desc_container'>{curr.desc}</p>
                    <div className='card_toggle'>
                        <Button onClick={() => addToCart(curr)}>+  </Button>
                        <p>{curr.quantity}</p>
                        <Button onClick={() => removeFromCart(curr)}> -</Button>

                    </div>
                </div>)}
            {cartItems.length > 0 ? (
                    <><div className='total_box'>
                        <h1>Total: ${getCartTotal()}</h1>
                    </div>
                        <Button onClick={() => clearCart()}>clear a card</Button></>) : (
                    <h1>card is empty  <FontAwesomeIcon icon={faCartPlus} /></h1>
                )}
        </div>
    )
}

export default Cart