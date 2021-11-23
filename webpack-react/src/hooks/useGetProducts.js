import { useEffect, useState } from "react";
import axios from "axios";

const useGetProducts = (API) => {
    const [product, setProduct] = useState([]);
	
	useEffect(async ()=>{
			const response = await axios(API);
			setProduct(response.data);
        },[]);
        return product;
};

export default useGetProducts;
