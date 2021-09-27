import React from "react"
import "../../styles/CartButton.scss"

const CartButton = (props: any) => {
    return (
        <button className={props.visible ? "btn" : "btn d-none"} id="cart-btn" data-bs-toggle="offcanvas" data-bs-target="#cart-offcanvas" aria-controls="cart-offcanvas">
            <i className="bi bi-bag"></i>
            <span>Ver pedido ({(props.amount)})</span>
        </button>
    )
}

export default CartButton