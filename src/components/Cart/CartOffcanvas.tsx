import React, { useEffect, useState } from 'react'
import CartItem from './CartItem'
import "../../styles/CartOffcanvas.scss"

const CartOffcanvas = (props: any) => {
    const real = Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL"})
    const [step, setStep] = useState(1)
    const [observation, setObservation] = useState('')

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
            <input className="form-control" type="text" id="user-name" placeholder="Insira seu nome"></input>
            {/* Forma de pagamento */}
            <label htmlFor="user-pay">Forma de pagamento</label>
            <select className="form-select" id="user-pay" aria-label="Forma de pagamento">
                <option>Cartão de crédito/débito</option>
                <option>Dinheiro</option>
                <option>Pix</option>
            </select>
            <div className="alert alert-warning" role="alert">
                O pagamento é feito na entrega!
            </div>  
            {/* Rua */}
            <label htmlFor="user-rua">Rua</label>
            <input className="form-control" type="text" id="user-rua" placeholder="Insira a rua"></input>
            {/* Cidade */}
            <label htmlFor="user-cidade">Cidade</label>
            <input className="form-control" type="text" id="user-cidade" placeholder="Insira a cidade"></input>
            {/* Bairro */}
            <label htmlFor="user-bairro">Bairro</label>
            <input className="form-control" type="text" id="user-bairro" placeholder="Insira o bairro"></input>
            {/* CEP */}
            <label htmlFor="user-cep">CEP</label>
            <input className="form-control" type="text" id="user-cep" placeholder="Insira o CEP"></input>
            {/* Complemento */}
            <label htmlFor="user-complemento">Complemento</label>
            <input className="form-control" type="text" id="user-complemento" placeholder="Insira um complemento"></input>
        </div>
        <div className="buttons">
            <div className="total-div">
                <p>Total</p>
                <span>{real.format(props.order.price)}</span>
            </div>
            <button id="add-button" className="btn" onClick={() => {buildOrder()}}>Enviar pedido</button>
        </div>
        </>}
    </div>
    )
}

export default CartOffcanvas