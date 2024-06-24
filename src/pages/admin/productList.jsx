import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button";
import './productlist.scss';
import { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const url = 'http://localhost:5000/products';

    useEffect(() => {
        getAPIData();
    }, []);

    const getAPIData = async () => {
        try {
            const response = await axios.get(url);
            setProducts(response.data);
        } catch (error) {
            console.log(error.message, "error");
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${url}/${id}`);
            setProducts(products.filter(product => product.id !== id));
        } catch (error) {
            console.log(error.message, "error");
        }
    };

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "end" }}>
                <Button onClick={() => navigate('/addform')} className="btn">ADD  + </Button>
            </div>

            <table className="table_container">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td><img src={product.image} alt='img' width={50} height={50} /></td>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>{product.rating}</td>
                            <td>
                                <Button onClick={() => navigate(`/editform/${product.id}`)}>Edit</Button>
                                <Button onClick={() => handleDelete(product.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;
