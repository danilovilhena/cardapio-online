import React from 'react'
import ReactDOM from 'react-dom'
import slug from 'slug'
import Modal from './Modal'
import "./MenuSection.scss"

const MenuSection = (props: any) => {
    let portal = (document.getElementById('overlay') as HTMLElement)
    let id = slug(props.title)

    return (
        <section className="menu-section">
            <button className="btn" data-bs-toggle="collapse" data-bs-target={"#" + id} aria-expanded="false" aria-controls={id}>
                {props.title}
                <i className="bi bi-chevron-down"></i>
            </button>
            <div className="collapse" id={id}>
                {props.items.map((el: any) => 
                <div key={slug(el.name)} data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <div>
                        <h3>{el.name}</h3>
                        <p>{el.description}</p>
                        <p>{el.price}</p>
                    </div>
                    <img src={el.img} alt={el.name}></img>
                </div>
                )}
            </div>
            {ReactDOM.createPortal(<Modal />, portal)}
            
        </section>
    )
}

export default MenuSection