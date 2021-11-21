import React,{useState} from 'react';
import '@styles/ProductItem.scss';
import AddCart from "@icon/bt_add_to_cart.svg";


const ProductItem = () => {
	const [cart, setCart] = useState(['hola']);
	const handleCLick=()=>{
		setCart('HOla Mundo');
	}
	return (
		<div className="ProductItem">
			<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
			<div className="product-info">
				<div>
					<p>$120,00</p>
					<p>Bike</p>
				</div>
				<figure onClick={handleCLick}>
					<img src={AddCart} alt="" />
				</figure>
				{cart}
			</div>
		</div>
	);
}

export default ProductItem;
