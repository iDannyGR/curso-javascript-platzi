import React,{useContext} from 'react';
import '@styles/ProductItem.scss';
import AddCart from "@icon/bt_add_to_cart.svg";
import AppContext from '../context/Appcontext';


const ProductItem = ({product}) => {
	const {addToCart} = useContext();
		
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={handleCLick}>
					<img src={AddCart} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
