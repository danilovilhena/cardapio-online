import React from 'react'
import slug from 'slug'
import "../styles/MenuSection.scss"
import MenuItem from './MenuItem'

const MenuSection = (props: any) => {
    const id = slug(props.title)

    return (
        <section className="menu-section">
            <button className="btn" data-bs-toggle="collapse" data-bs-target={"#" + id} aria-expanded="false" aria-controls={id}>
                {props.title}
                <i className="bi bi-chevron-down"></i>
            </button>
            <div className="collapse" id={id}>
                {props.items.map((item: any) => 
                <MenuItem key={slug(item.name)} item={item} setCurrentItem={props.setCurrentItem} dataBs={"offcanvas"} dataTarget={"#offcanvas"}/>)}
            </div>
        </section>
    )
}

export default MenuSection