import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';
import MenuSection from './MenuSection'
import Offcanvas from './Offcanvas'
import db from '../services/database';
import '../styles/Menu.scss';
import CartButton from './CartButton';
import CartOffcanvas from './CartOffcanvas';

const Menu = () => {
    const [sections, setSections] = useState([])
    const [order, setOrder] = useState({"amount": 0, "price": 0, "items": {}})
    const [currentItem, setCurrentItem] = useState({
        description: "Default description",
        img: "https://via.placeholder.com/150",
        name: "Default title",
        price: 0
    })

    const addItem = (amount: number) => {
        setOrder((prev: any) => {
            let obj = {...prev}
            let totalAmount = 0, totalPrice = 0
            obj.items[currentItem.name] = {price: currentItem.price, amount}
            Object.keys(obj.items).forEach((el: any) => {
                totalAmount += obj.items[el].amount
                totalPrice += obj.items[el].price * obj.items[el].amount
            })
            obj["amount"] = totalAmount
            obj["price"] = totalPrice
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
            {ReactDOM.createPortal(<CartOffcanvas />, document.querySelector('#cart-overlay')!)}
            <CartButton amount={order.amount} visible={order.amount > 0}/>
        </main>
    )
}

export default Menu