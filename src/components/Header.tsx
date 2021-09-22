import React from 'react'
import Logo from '../assets/logo.svg'
import "../styles/Header.scss"
import "../styles/Header.responsivity.scss"

const Header = () => {
    const startHour = 11, endHour = 20
    const startTime = startHour * 60, endTime = endHour * 60
    const now = new Date().getHours() * 60 + new Date().getMinutes();
    const isOpen = startTime <= now && now <= endTime

    return (
        <header>
            <div>
                <img src={Logo} alt="Logomarca da Fatburger"></img>
                <section>
                    <h2>Fatburger</h2>
                    <address>Av. Duque de Caxias, 1326 - Marco, Belém</address>
                    <p>Pedido mínimo <b>R$20,00</b></p>
                    <hr></hr>
                    <div>
                        {isOpen ?
                        <span className="badge bg-success">Aberto</span> :
                        <span className="badge bg-danger">Fechado</span>}
                        <p><i className="bi bi-clock" role="img" aria-label="Horário de funcionamento"></i> {startHour}:00 - {endHour}:00</p>
                    </div>
                </section>
            </div>
        </header>
    )
}

export default Header