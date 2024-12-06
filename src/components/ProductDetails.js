import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../api';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await fetchProductById(id);
                setProduct(data);
            } catch (err) {
                console.error(err);
            }
        };
        getProduct();
    }, [id]);

    return (
        <div>
            <h1>Product Details</h1>
            {product ? (
                <div>
                    <h2>{product.Name}</h2>
                    <p>{product.Description}</p>
                    <p>Price: ${product.Price}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ProductDetails;
