import React, {useState} from 'react';
import '@styles/header.scss';
import  IconMenu from '@images/logo_yard_sale.svg';
import Logo from '@icon/icon_menu.svg';
import Menu  from '@components/Menu';
import ShopinCart from '@icon/icon_shopping_cart.svg';


const Header = () => {
    const [toggle, setToggle]=useState(false);
    const handleToggle =()=>{
        setToggle(!toggle)
    }
    return (
        <nav>
            <img src={IconMenu} alt="menu" className="menu" />
            <div className="navbar-left">
                <img src={Logo} alt="logo" className="logo" />
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furnitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleToggle}>
                        platzi@example.com
                        </li>
                    <li className="navbar-shopping-cart">
                        <img src={ShopinCart} alt="shopping cart" />
                        <div>2</div>
                    </li>
                </ul>
            </div>
            {toggle && <Menu />}
        </nav>
    )
}

export default Header;


