import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const { data } = await fetchProducts();
                setProducts(data);
            } catch (err) {
                console.error(err);
            }
        };
        getProducts();
    }, []);

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.Id}>{product.Name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
