import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import './view.scss';
import Button from "../../components/button/button";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/card";

const View = () => {
    const { cartItems, addToCart } = useContext(CartContext);
    const [api, setApi] = useState([]);
    const navigator = useNavigate();
    let url = 'http://localhost:5000/products';

    const getAPI = useCallback(async () => {
        try {
            const response = await axios.get(url);
            setApi(response?.data);
        } catch (error) {
            console.log(error.message, "error");
        }
    }, [url]);

    useEffect(() => {
        getAPI();
    }, [getAPI]);

    const handleCart = () => {
        navigator("/cart")
    }

    return (
        <div className="ss">
            <div className="icons_para">

                <h4>View items</h4>

                <div className="icons" onClick={() => handleCart()}>
                    <FontAwesomeIcon icon={faCartPlus} /><p>{cartItems.length}</p>

                </div>
            </div>
            <div className="view_container">
                {api?.map((curr, idx) => (
                    <div key={idx} className="card_content">
                        <img src={curr.image} alt={curr.title} width={200} height={200} />
                        <p>Title: {curr.title}</p>
                        <p>Rating: {curr.rating}</p>
                        <p>Price: {curr.price}</p>

                        <Button onClick={() => addToCart(curr)} >Add to cart</Button>
                        <Button onClick={() => handleCart()}>view cart</Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default View;
