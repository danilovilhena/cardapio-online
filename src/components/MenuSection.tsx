import React from 'react'
import slug from 'slug'
import "../styles/MenuSection.scss"

const MenuSection = (props: any) => {
    const id = slug(props.title)
    const real = Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL"})

    return (
        <section className="menu-section">
            <button className="btn" data-bs-toggle="collapse" data-bs-target={"#" + id} aria-expanded="false" aria-controls={id}>
                {props.title}
                <i className="bi bi-chevron-down"></i>
            </button>
            <div className="collapse" id={id}>
                {props.items.map((item: any) => 
                <div key={slug(item.name)} data-bs-toggle="offcanvas" data-bs-target="#offcanvas" onClick={() => props.setCurrentItem(item)} aria-controls="offcanvas">
                    <div>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p>{real.format(item.price)}</p>
                    </div>
                    <img src={item.img} alt={item.name}></img>
                </div>
                )}
            </div>
        </section>
    )
}

export default MenuSection