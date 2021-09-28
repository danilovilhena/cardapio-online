import React from 'react'
import "../../styles/CartItem.scss"

const CartItem = (props: any) => {
    const real = Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"})

    const handleAmountChange = (increase: boolean) => {
        if(increase)
            props.updateItem(props.name, props.item.amount+1)
        else{
            if(props.item.amount - 1 === 0)
                props.deleteItem(props.name)
            else 
                props.updateItem(props.name, props.item.amount-1)
        }
    } 

    return (
        <div className="cart-item">
            <img src={props.item.img} alt={props.item.name}></img>
            <div className="right-side">
                <h3>{props.name}</h3>
                <div className="price-div">
                    <p>{real.format(props.item.price * props.item.amount)}</p>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn" onClick={() => {handleAmountChange(false)}}>
                            {props.item.amount -1 === 0 ? <i className="bi bi-x-circle"></i> : <i>-</i>}
                        </button>
                            <span>{props.item.amount}</span>
                        <button type="button" className="btn" onClick={() => {handleAmountChange(true)}}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem