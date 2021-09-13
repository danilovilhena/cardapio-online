import React from 'react'
import MenuSection from './MenuSection'
import './Menu.scss';

const Menu = () => {
    const sections = [
        {
            title: "Combos",
            itens: [
                {
                    name: "Combo onion + salgadinhos sortidos",
                    description: "Caixa 19cm --- onion + salgadinhos sortidos",
                    price: "R$19,00",
                    img: "https://goentrega.online/tim.php?src=https://goentrega.online/uploads/images/2021/04/whatsapp-image-2021-04-01-at-20-12-45.jpeg&w=180&h=180"
                },
                {
                    name: "Combo 4 x-egg + onion + mini chiken + batata da casa",
                    description: "Caixa 35cm --- 4 x-egg + 10 onion + 10 mini chiken + batata com cheddar e bacon",
                    price: "R$60,00",
                    img: "https://goentrega.online/tim.php?src=https://goentrega.online/uploads/images/2021/07/egg-4.jpeg&w=180&h=180"
                },
                {
                    name: "Combo 2 x-egg + batata da casa + onion",
                    description: "Caixa 25cm --- 2 x-egg + batata com cheddar e bacon + onion",
                    price: "R$35,00",
                    img: "https://goentrega.online/tim.php?src=https://goentrega.online/uploads/images/2021/07/egg-4.jpeg&w=180&h=180"
                }
            ]
        },
        {
            title: "Promoções",
            itens: [
                {
                    name: "Combo onion + salgadinhos sortidos",
                    description: "Caixa 19cm --- onion + salgadinhos sortidos",
                    price: "R$19,00",
                    img: "https://goentrega.online/tim.php?src=https://goentrega.online/uploads/images/2021/04/whatsapp-image-2021-04-01-at-20-12-45.jpeg&w=180&h=180"
                },
                {
                    name: "Combo 4 x-egg + onion + mini chiken + batata da casa",
                    description: "Caixa 35cm --- 4 x-egg + 10 onion + 10 mini chiken + batata com cheddar e bacon",
                    price: "R$60,00",
                    img: "https://goentrega.online/tim.php?src=https://goentrega.online/uploads/images/2021/07/egg-4.jpeg&w=180&h=180"
                },
                {
                    name: "Combo 2 x-egg + batata da casa + onion",
                    description: "Caixa 25cm --- 2 x-egg + batata com cheddar e bacon + onion",
                    price: "R$35,00",
                    img: "https://goentrega.online/tim.php?src=https://goentrega.online/uploads/images/2021/07/egg-4.jpeg&w=180&h=180"
                }
            ]
        },
        {
            title: "Burger Artesanal",
            itens: [
                {
                    name: "Combo onion + salgadinhos sortidos",
                    description: "Caixa 19cm --- onion + salgadinhos sortidos",
                    price: "R$19,00",
                    img: "https://goentrega.online/tim.php?src=https://goentrega.online/uploads/images/2021/04/whatsapp-image-2021-04-01-at-20-12-45.jpeg&w=180&h=180"
                },
                {
                    name: "Combo 4 x-egg + onion + mini chiken + batata da casa",
                    description: "Caixa 35cm --- 4 x-egg + 10 onion + 10 mini chiken + batata com cheddar e bacon",
                    price: "R$60,00",
                    img: "https://goentrega.online/tim.php?src=https://goentrega.online/uploads/images/2021/07/egg-4.jpeg&w=180&h=180"
                },
                {
                    name: "Combo 2 x-egg + batata da casa + onion",
                    description: "Caixa 25cm --- 2 x-egg + batata com cheddar e bacon + onion",
                    price: "R$35,00",
                    img: "https://goentrega.online/tim.php?src=https://goentrega.online/uploads/images/2021/07/egg-4.jpeg&w=180&h=180"
                }
            ]
        },
        {
            title: "Burger Tradicional",
            itens: [
                {
                    name: "Combo onion + salgadinhos sortidos",
                    description: "Caixa 19cm --- onion + salgadinhos sortidos",
                    price: "R$19,00",
                    img: "https://goentrega.online/tim.php?src=https://goentrega.online/uploads/images/2021/04/whatsapp-image-2021-04-01-at-20-12-45.jpeg&w=180&h=180"
                },
                {
                    name: "Combo 4 x-egg + onion + mini chiken + batata da casa",
                    description: "Caixa 35cm --- 4 x-egg + 10 onion + 10 mini chiken + batata com cheddar e bacon",
                    price: "R$60,00",
                    img: "https://goentrega.online/tim.php?src=https://goentrega.online/uploads/images/2021/07/egg-4.jpeg&w=180&h=180"
                },
                {
                    name: "Combo 2 x-egg + batata da casa + onion",
                    description: "Caixa 25cm --- 2 x-egg + batata com cheddar e bacon + onion",
                    price: "R$35,00",
                    img: "https://goentrega.online/tim.php?src=https://goentrega.online/uploads/images/2021/07/egg-4.jpeg&w=180&h=180"
                }
            ]
        }
    ]

    return (
        <main>
            {sections.map(el => <MenuSection title={el.title} itens={el.itens}/>)}
        </main>
    )
}

export default Menu