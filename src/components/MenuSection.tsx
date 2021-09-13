import React from 'react'
import slug from 'slug'
import "./MenuSection.scss"

const Header = (props: any) => {
    let id = slug(props.title)

    return (
        <section className="menu-section">
            <button className="btn" data-bs-toggle="collapse" data-bs-target={"#" + id} aria-expanded="false" aria-controls={id}>
                {props.title}
                <i className="bi bi-chevron-down"></i>
            </button>
            <div className="collapse" id={id}>
                <div>
                    <h3>Combo Brabíssimo</h3>
                    <p>Burger Brabíssimo + Batata Individual 100g + Refrigerante Lata 350ml</p>
                    <p>R$44,90</p>
                </div>
                <img src="https://goentrega.online/tim.php?src=https://goentrega.online/uploads/images/2021/07/egg-4.jpeg&w=180&h=180" alt="Combo Brabíssimo"></img>
            </div>
        </section>
    )
}

export default Header