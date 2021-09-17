import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';
import MenuSection from './MenuSection'
import Offcanvas from './Offcanvas'
import db from '../services/database';
import './Menu.scss';
import CartButton from './CartButton';

const Menu = () => {
    const [sections, setSections] = useState([])
    const [order, setOrder] = useState({"amount": 0, "price": 0, "items": {}})
    const [currentItem, setCurrentItem] = useState({
        description: "Default description",
        img: "https://via.placeholder.com/150",
        name: "Default title",
        price: 0
    })

    const updateTotals = (obj: any) => {
        let amount = 0
        let price = 0
        Object.keys(obj.items).forEach((el: any) => {
            amount += obj.items[el].amount
            price += obj.items[el].price * obj.items[el].amount
        })

        obj["amount"] = amount
        obj["price"] = price
    }

    const addItem = (amount: number) => {
        setOrder((prevState: any) => {
            let obj = prevState
            obj.items[currentItem.name] = {price: currentItem.price, amount}
            updateTotals(obj)
            return obj
        })
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
            {ReactDOM.createPortal(<Offcanvas addItem={addItem} currentItem={currentItem} order={order}/>, document.querySelector('#overlay')!)}
            {false && <CartButton />}
        </main>
    )
}

export default Menu