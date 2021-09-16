import React, { useState } from 'react'
import slug from 'slug'
import "./MenuSection.scss"

const MenuSection = (props: any) => {
    let [currentItem, setCurrentItem] = useState({
        description: "Default description",
        img: "https://via.placeholder.com/150",
        name: "Default title",
        price: "R$00,00"

    })
    let id = slug(props.title)

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
                        <p>{item.price}</p>
                    </div>
                    <img src={item.img} alt={item.name}></img>
                </div>
                )}
            </div>
            {/* Offcanvas */}
            {/* TODO: Estilizar esse offcanvas */}
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
                    <p>{currentItem.price}</p>

                    <div className="buttons">
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn">-</button>
                            <span>1</span>
                            <button type="button" className="btn">+</button>
                        </div>
                        <button id="add-button" className="btn">
                            <span>Adicionar</span>
                            <span>{currentItem.price}</span>
                        </button>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default MenuSection