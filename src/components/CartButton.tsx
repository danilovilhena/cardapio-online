import React from "react"
import "./CartButton.scss"


const CartButton = () => {
    return (
        <button className="btn" id="cart-btn">
            <i className="bi bi-bag"></i>
            <span>Ver pedido</span>
        </button>
    )
}

export default CartButton