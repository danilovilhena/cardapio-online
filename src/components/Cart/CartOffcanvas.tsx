import React, { useState } from 'react'
import CartItem from './CartItem'
import "../../styles/CartOffcanvas.scss"

const CartOffcanvas = (props: any) => {
    const real = Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL"})
    const [step, setStep] = useState(1)
    const [observation, setObservation] = useState('')

    const handleSelect = (event: any) => {
        if(event.target.value === "1") 
            event.target.style.setProperty('border', '2px solid red')
        else
            event.target.style.removeProperty('border')
    }

    const handleInput = (event: any) => {
        if(event.target.value.length < 3) 
            event.target.style.setProperty('border', '2px solid red')
        else
            event.target.style.removeProperty('border')
    }

    const validateFields = () => {
        let select = (document.querySelector('.form-select') as HTMLSelectElement)
        let inputs = (Array.from(document.querySelectorAll('.form-control')) as HTMLInputElement[])
        let invalidElement
        let isValid = true

        if(select.value === "1"){
            select.style.setProperty('border', '2px solid red')
            isValid = false
            invalidElement = select
        }
        else{
            select.style.removeProperty('border')
        }

        inputs.forEach(input => {
            if(input.value.length < 3){
                input.style.setProperty('border', '2px solid red')
                isValid = false
                invalidElement = input
            }
            else{
                input.style.removeProperty('border')
            }
        })

        return [isValid, invalidElement]
    }

    const buildOrder = () => {
        let str = "Pedido selecionado!\n\n"
        str += `*Data:* ${new Date().getDate()}/${('0' + new Date().getMonth()).slice(-2)}\n` 
        str += `*Nome:* ${(document.getElementById('user-name') as HTMLInputElement).value}\n\n` 
        str += `*Pedido:*\n`
        Object.keys(props.order.items).forEach((item: any) => {
            str += `Item: ${props.order.items[item].amount} x ${item}\n`
            str += `Valor: ${real.format(props.order.items[item].amount * props.order.items[item].price)} \n\n`
        })
        str += `*Observações:* ${observation}\n\n`
        str += `*Endereço:*\n`
        str += `Rua: ${(document.getElementById('user-rua') as HTMLInputElement).value}\n`
        str += `Bairro: ${(document.getElementById('user-bairro') as HTMLInputElement).value}\n`
        str += `Cidade: ${(document.getElementById('user-cidade') as HTMLInputElement).value}\n`
        str += `CEP: ${(document.getElementById('user-cep') as HTMLInputElement).value}\n`
        str += `Complemento: ${(document.getElementById('user-complemento') as HTMLInputElement).value}\n\n`
        str += `*Pagamento:* ${(document.getElementById('user-pay') as HTMLSelectElement).value}\n`
        str += `*Total:* ${real.format(props.order.price)}\n`
        return str
    }

    const sendOrder = () => {
        let [isValid, invalidElement] = validateFields()
        if(isValid){
            let order = buildOrder()
            let msg = encodeURIComponent(order)
            let phone = "551123881110"
            window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
        } else{
            (invalidElement as HTMLElement).focus()
        }
    }

    return (
    <div className="offcanvas offcanvas-bottom" tabIndex={-1} id="cart-offcanvas" aria-labelledby="cartOffcanvasLabel">
        <div className="offcanvas-header">
            {step === 1 ? 
            <h5 className="offcanvas-title" id="cartOffcanvasLabel">Pedido atual</h5> :
            <h5 className="offcanvas-title" id="cartOffcanvasLabel">Concluir pedido</h5>}
            <button className="btn rounded-btn" data-bs-dismiss="offcanvas" aria-label="Fechar" onClick={() => {setStep(1)}}>
                <i className="bi bi-chevron-down"></i>
            </button>
        </div>
        
        {step === 1 && <>
        <div className="offcanvas-body small">
            {props.order.items !== {} && 
            Object.keys(props.order.items).map((item: any) => 
                <CartItem key={item} name={item} item={props.order.items[item]} updateItem={props.updateItem} deleteItem={props.deleteItem}/>
            )}
        </div>
        <div className="observation">
            <label htmlFor="textarea">Alguma observação?</label>
            <textarea id="textarea" placeholder="Ex: Tirar a cebola, maionese à parte, etc." onChange={(e) => setObservation(e.target.value)}></textarea>
        </div>
        <div className="buttons">
            <div className="total-div">
                <p>Total</p>
                <span>{real.format(props.order.price)}</span>
            </div>
            <button id="add-button" className="btn" onClick={() => setStep(2)}>Concluir pedido</button>
        </div>
        </>}

        {step === 2 && <>
        <div className="offcanvas-body small">
            {/* Nome */}
            <label htmlFor="user-name">Nome</label>
            <input className="form-control" type="text" id="user-name" placeholder="Insira seu nome" onChange={handleInput}></input>
            {/* Forma de pagamento */}
            <label htmlFor="user-pay">Forma de pagamento</label>
            <select className="form-select" id="user-pay" aria-label="Forma de pagamento" onChange={handleSelect}>
                <option value="1" defaultValue="true">-</option>
                <option>Cartão de crédito/débito</option>
                <option>Dinheiro</option>
                <option>Pix</option>
            </select>
            <div className="alert alert-warning" role="alert">
                O pagamento é feito na entrega!
            </div>  
            {/* Rua */}
            <label htmlFor="user-rua">Rua</label>
            <input className="form-control" type="text" id="user-rua" placeholder="Insira a rua" onChange={handleInput}></input>
            {/* Cidade */}
            <label htmlFor="user-cidade">Cidade</label>
            <input className="form-control" type="text" id="user-cidade" placeholder="Insira a cidade" onChange={handleInput}></input>
            {/* Bairro */}
            <label htmlFor="user-bairro">Bairro</label>
            <input className="form-control" type="text" id="user-bairro" placeholder="Insira o bairro" onChange={handleInput}></input>
            {/* CEP */}
            <label htmlFor="user-cep">CEP</label>
            <input className="form-control" type="number" id="user-cep" placeholder="Insira o CEP" onChange={handleInput}></input>
            {/* Complemento */}
            <label htmlFor="user-complemento">Complemento</label>
            <input className="form-control" type="text" id="user-complemento" placeholder="Insira um complemento" onChange={handleInput}></input>
        </div>
        <div className="buttons">
            <div className="total-div">
                <p>Total</p>
                <span>{real.format(props.order.price)}</span>
            </div>
            <button id="add-button" className="btn" onClick={() => {sendOrder()}}>Enviar pedido</button>
        </div>
        </>}
    </div>
    )
}

export default CartOffcanvas