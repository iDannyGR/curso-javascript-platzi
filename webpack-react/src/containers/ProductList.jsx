import React,{useEffect, useState} from 'react';
import ProductItem from '../components/ProductItem';
import '../styles/ProductList.scss';
const API = 'https://api.escuelajs.co/api/v1/products';
import axios from 'axios';

const ProductList = () => {
	const [product, setProduct] = useState([]);
	
	useEffect(async ()=>{
			const response = await axios(API);
			setProduct(response.data);

	},[])


	return (
		<section className="main-container">
			<div className="ProductList">
			{product.map(product => (
          <ProductItem />
        ))}
			</div>
		</section>
	);
}

export default ProductList;
