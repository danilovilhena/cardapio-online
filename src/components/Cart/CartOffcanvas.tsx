import React from 'react'
import CartItem from './CartItem'
import "../../styles/CartOffcanvas.scss"

const CartOffcanvas = (props: any) => {
    const real = Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL"})

    return (
    <div className="offcanvas offcanvas-bottom" tabIndex={-1} id="cart-offcanvas" aria-labelledby="cartOffcanvasLabel">
        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="cartOffcanvasLabel">Pedido atual</h5>
            <button className="btn rounded-btn" data-bs-dismiss="offcanvas" aria-label="Fechar">
                <i className="bi bi-chevron-down"></i>
            </button>
        </div>
        <div className="offcanvas-body small">
            {props.order.items !== {} && 
            Object.keys(props.order.items).map((item: any) => 
                <CartItem key={item} name={item} item={props.order.items[item]} updateItem={props.updateItem} deleteItem={props.deleteItem}/>
            )}
        </div>
        <div className="buttons">
            <div className="total-div">
                <p>Total</p>
                <span>{real.format(props.order.price)}</span>
            </div>
            <button id="add-button" className="btn" data-bs-dismiss="offcanvas">Concluir pedido</button>
        </div>
    </div>
    )
}

export default CartOffcanvas