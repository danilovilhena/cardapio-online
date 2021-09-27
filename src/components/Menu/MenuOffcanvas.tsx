import React, { useState, useEffect } from 'react'
import "../../styles/MenuOffcanvas.scss"
import "../../styles/MenuOffcanvas.responsivity.scss"

const Offcanvas = (props: any) => {
    const real = Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL"})
    const [amount, setAmount] = useState(1)
    const [hasItem, setHasItem] = useState(false);

    useEffect(() => {
        if(props.order.items[props.currentItem.name]){
            setAmount(props.order.items[props.currentItem.name].amount)
            setHasItem(true)
        }
        else{
            setAmount(1) 
            setHasItem(false)
        }
    }, [props.order, props.currentItem])

    return (
    <div className="offcanvas offcanvas-bottom" tabIndex={-1} id="offcanvas" aria-labelledby="offcanvasLabel">
        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasLabel">{props.currentItem.name}</h5>
            <button className="btn rounded-btn" data-bs-dismiss="offcanvas" aria-label="Fechar">
                <i className="bi bi-chevron-down"></i>
            </button>
        </div>
        <div className="offcanvas-body small">
            <img src={props.currentItem.img} alt={props.currentItem.name}></img>
            <p>{props.currentItem.description}</p>
            <p>{real.format(props.currentItem.price)}</p>
        </div>
        <div className="buttons">
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn" disabled={amount === 1} onClick={() => {setAmount(amount-1)}}>-</button>
                <span>{amount}</span>
                <button type="button" className="btn" onClick={() => {setAmount(amount+1)}}>+</button>
            </div>
            <button id="add-button" className="btn" data-bs-dismiss="offcanvas" onClick={() => {props.addItem(amount)}}>
                <span>{hasItem ? 'Atualizar' : 'Adicionar'}</span>
                <span>{real.format(props.currentItem.price * amount)}</span>
            </button>
        </div>
    </div>
    )
}

export default Offcanvas