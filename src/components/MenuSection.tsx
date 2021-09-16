import React, { useState } from 'react'
import slug from 'slug'
import order from '../services/order'
import "./MenuSection.scss"

const MenuSection = (props: any) => {
    const id = slug(props.title)
    const [amount, setAmount] = useState(1)
    const [currentItem, setCurrentItem] = useState({
        description: "Default description",
        img: "https://via.placeholder.com/150",
        name: "Default title",
        price: 0

    })
    
    document.addEventListener('show.bs.offcanvas', () => { 
        if(order.getItem(currentItem.name))
            setAmount(order.getItem(currentItem.name).amount)
        else
            setAmount(1) 
    })

    const realBR = Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL"})

    const addItem = () => {
        order.addItem(currentItem.name, currentItem.price, amount);
    }

    return (
        <section className="menu-section">
            <button className="btn" data-bs-toggle="collapse" data-bs-target={"#" + id} aria-expanded="false" aria-controls={id}>
                {props.title}
                <i className="bi bi-chevron-down"></i>
            </button>
            <div className="collapse" id={id}>
                {props.items.map((item: any) => 
                <div key={slug(item.name)} data-bs-toggle="offcanvas" data-bs-target="#offcanvas" onClick={() => setCurrentItem(item)} aria-controls="offcanvas">
                    <div>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p>{realBR.format(item.price)}</p>
                    </div>
                    <img src={item.img} alt={item.name}></img>
                </div>
                )}
            </div>
            {/* Offcanvas */}
            <div className="offcanvas offcanvas-bottom" tabIndex={-1} id="offcanvas" aria-labelledby="offcanvasLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasLabel">{currentItem.name}</h5>
                    <button className="btn rounded-btn" data-bs-dismiss="offcanvas" aria-label="Fechar">
                        <i className="bi bi-chevron-down"></i>
                    </button>
                </div>
                <div className="offcanvas-body small">
                    <img src={currentItem.img} alt={currentItem.name}></img>
                    <p>{currentItem.description}</p>
                    <p>{realBR.format(currentItem.price)}</p>
                </div>
                <div className="buttons">
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn" disabled={amount === 1} onClick={() => {setAmount(amount-1)}}>-</button>
                            <span>{amount}</span>
                            <button type="button" className="btn" onClick={() => {setAmount(amount+1)}}>+</button>
                        </div>
                        <button id="add-button" className="btn" data-bs-dismiss="offcanvas" onClick={() => {addItem()}}>
                            <span>Adicionar</span>
                            <span>{realBR.format(currentItem.price * amount)}</span>
                        </button>
                    </div>
            </div>
            
        </section>
    )
}

export default MenuSection