import { useNavigate } from "react-router-dom"
import Button from "../../components/button/button";
import './addform.scss'
import Input from "../../components/input/input";
import { useState } from "react";
import axios from 'axios';

const addInitial = {
    title: '',
    desc: '',
    image: '',
    price: '',
    rating: ''

};
const Addform = () => {
    let url = 'http://localhost:5000/products';
    const [inputvalue, setInputvalue] = useState(addInitial);

    const navigator = useNavigate();



    const handleChange = (e) => {
        if (e.target.type === "file") {
            const file = e.target.files[0];
            const { name } = e.target;
            const imageUrl = URL.createObjectURL(file);
            setInputvalue((prevState) => ({
                ...prevState,
                [name]: imageUrl,
            }));
        } else {
            const { name, value } = e.target;
            setInputvalue((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }

    };
    const handlePOST = async (e) => {
        e.preventDefault();
        navigator('/productlist');
        try {
            const config = {
                headers: {
                    Accept: "application/json",
                    'Content-Type': 'application/json'
                }
            }
            const data = { "title": inputvalue.title, "desc": inputvalue.desc, "rating": inputvalue.rating, "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg", "price": inputvalue.price }
            await axios.post(url, data, config);
        } catch (error) {
            console.log(error.message, "error");
        }

    }
    return (
        <div>
            <Button onClick={() => navigator('/productlist')} className='back_btn'>back</Button>
            <form className="form_container" onSubmit={handlePOST}>
                <h1>Add a Product Details</h1>
                <br />
                <Input
                    type='text'
                    value={inputvalue.title}
                    label='Title:'
                    name='title'
                    onChange={(e) => handleChange(e)}

                />
                <br />
                <Input
                    type='textarea'
                    value={inputvalue.desc}
                    label='Desc:'
                    name='desc'
                    onChange={(e) => handleChange(e)}

                />
                <br />
                <Input
                    type='number'
                    value={inputvalue.price}
                    label='price:'
                    name='price'
                    onChange={(e) => handleChange(e)}

                />
                <br />
                <Input
                    type='text'
                    value={inputvalue.rating}
                    label='Rating:'
                    name='rating'
                    onChange={(e) => handleChange(e)}

                />
                <br />
                <Input
                    type='file'
                    label='Image:'
                    name='image'
                    onChange={(e) => handleChange(e)}

                />
                <br />
                <Button> submit</Button>
            </form>
        </div >

    )
}


export default Addform