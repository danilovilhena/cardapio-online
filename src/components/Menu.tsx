import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';
import MenuSection from './MenuSection'
import Offcanvas from './Offcanvas'
import db from '../services/database';
import order from '../services/order';
import './Menu.scss';

const Menu = () => {
    const [sections, setSections] = useState([])
    const [currentItem, setCurrentItem] = useState({
        description: "Default description",
        img: "https://via.placeholder.com/150",
        name: "Default title",
        price: 0
    })

    const addItem = (amount: number) => {
        order.addItem(currentItem.name, currentItem.price, amount);
    }

    useEffect(() => {
        db.getItems()
            .then(unsorted => unsorted.sort((a: any,b: any)=>{
                if(a.order < b.order) return -1;
                if(a.order > b.order) return 1;
                return 0;
            }))
            .then(data => setSections(data))
    }, [])

    return (
        <main>
            {sections.map((el: any) => <MenuSection title={el.title} items={el.items} key={el.key} setCurrentItem={setCurrentItem}/>)}
            {ReactDOM.createPortal(<Offcanvas addItem={addItem} currentItem={currentItem}/>, document.querySelector('#overlay')!)}
        </main>
    )
}

export default Menu