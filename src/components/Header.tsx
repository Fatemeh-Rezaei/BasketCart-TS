import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

function Header() {
    return (
        <header>
            <a className="logo" href="#">
                Shop
            </a>
            <a href="#">
                <AiOutlineShoppingCart className="shop-icon" />
                <span>2</span>
            </a>
        </header>
    )
}

export default Header