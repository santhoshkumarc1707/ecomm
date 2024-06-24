import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import './editform.scss';
import { useEffect, useState } from "react";
import axios from "axios";

const addInitial = {
    title: '',
    desc: '',
    rating: ''
};

const Editform = () => {
    const [item, setItem] = useState(addInitial);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/products/${id}`)
            .then(response => {
                setItem(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the item!', error);
                if (error.response) {
                    console.error('Error data:', error.response.message);
                }
            });
    }, [id]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem({
            ...item,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/products/${id}`, item)
            .then(response => {
                console.log(' updated successfully', response.data);
                navigate('/productlist');
            })
            .catch(error => {
                console.error('  error updating ', error);
            });
    };

    return (
        <div>
            <form className="form_container" onSubmit={handleSubmit}>
                <Input
                    type='text'
                    value={item.title}
                    label='Title:'
                    name='title'
                    onChange={handleChange}
                />
                <br />
                <Input
                    type='textarea'
                    value={item.desc}
                    label='Desc:'
                    name='desc'
                    onChange={handleChange}
                />
                <br />
                <Input
                    type='number'
                    value={item.price}
                    label='Price'
                    name='price'
                    onChange={handleChange}
                />
                <br />
                <Input
                    type='text'
                    value={item.rating}
                    label='Rating:'
                    name='rating'
                    onChange={handleChange}
                />
                <br />
                <Button type="submit">Update</Button>
            </form>
        </div>
    );
}

export default Editform;
