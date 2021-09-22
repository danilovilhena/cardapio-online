import React from 'react'
import "../styles/CartOffcanvas.scss"

const CartOffcanvas = () => {
    // const real = Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL"})

    return (
    <div className="offcanvas offcanvas-bottom" tabIndex={-1} id="cart-offcanvas" aria-labelledby="cartOffcanvasLabel">
        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="cartOffcanvasLabel">Pedido</h5>
            <button className="btn rounded-btn" data-bs-dismiss="offcanvas" aria-label="Fechar">
                <i className="bi bi-chevron-down"></i>
            </button>
        </div>
        <div className="offcanvas-body small">
            <p>Teste</p>
        </div>
    </div>
    )
}

export default CartOffcanvas