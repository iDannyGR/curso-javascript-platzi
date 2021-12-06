import React, {useContext} from 'react';
import Appcontext from '../context/Appcontext';
import '@styles/OrderItem.scss';

import Close from '@icon/icon_close.png';

const OrderItem = ( {product} ) => {
	const {removeFromCart} = useContext(Appcontext);

	const handleRemove = product =>{
		removeFromCart(product);
	}
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>{product.price}</p>
			<img src={Close} alt="close" onClick={()=> handleRemove(product)} />
		</div>
	);
}

export default OrderItem;
