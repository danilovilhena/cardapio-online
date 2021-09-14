import React, { useEffect, useState } from 'react'
import MenuSection from './MenuSection'
import './Menu.scss';
import db from '../services/database';

const Menu = () => {
    const [sections, setSections] = useState([])

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
            {sections.map((el: any) => <MenuSection title={el.title} items={el.items} key={el.key}/>)}
        </main>
    )
}

export default Menu