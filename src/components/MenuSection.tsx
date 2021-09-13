import React from 'react'
import slug from 'slug'
import "./MenuSection.scss"

const MenuSection = (props: any) => {
    let id = slug(props.title)

    return (
        <section className="menu-section">
            <button className="btn" data-bs-toggle="collapse" data-bs-target={"#" + id} aria-expanded="false" aria-controls={id}>
                {props.title}
                <i className="bi bi-chevron-down"></i>
            </button>
            <div className="collapse" id={id}>
                {props.itens.map((el: any) => 
                <div>
                    <div>
                        <h3>{el.name}</h3>
                        <p>{el.description}</p>
                        <p>{el.price}</p>
                    </div>
                    <img src={el.img} alt={el.name}></img>
                </div>
                )}
            </div>
        </section>
    )
}

export default MenuSection