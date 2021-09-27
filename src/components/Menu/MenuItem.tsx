import React from 'react'
import "../../styles/MenuItem.scss"

const MenuItem = (props: any) => {
    const real = Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL"})

    return (
        <div
        className="menu-item"
        data-bs-toggle={props.dataBs} data-bs-target={props.dataTarget} 
        aria-controls={props.dataBs}
        onClick={() => props.setCurrentItem(props.item)}>
            <div>
                <h3>{props.item.name}</h3>
                <p>{props.item.description}</p>
                <p>{real.format(props.item.price)}</p>
            </div>
            <img src={props.item.img} alt={props.item.name}></img>
        </div>
    )
}

export default MenuItem