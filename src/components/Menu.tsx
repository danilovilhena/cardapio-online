import React, { useEffect, useState } from 'react'
import MenuSection from './MenuSection'
import './Menu.scss';
import db from '../services/database';

const Menu = () => {
    const [sections, setSections] = useState([])

    useEffect(() => {
        db.getItems().then(data => setSections(data))
    }, [])

    return (
        <main>
            {sections.map((el: any) => <MenuSection title={el.title} items={el.items} key={el.key}/>)}
        </main>
    )
}

export default Menu