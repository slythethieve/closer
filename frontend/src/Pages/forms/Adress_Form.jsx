import unique_key from "../../utils/unique_key"

const Adress_Form = () => {
    
    return (
        <div className="add-form" id="clientInfo">
            <div className="form-control">
                <label>Nome</label>
                <input type = 'text' placeholder = "Nome" id="firstName"/>
            </div>
            <div className="form-control">
                <label>Cognome</label>
                <input type = 'text' placeholder = "Cognome" id="lastName"/>
            </div>
            <div className="form-control">
                <label>Indirizzo</label>
                <input type = 'text' placeholder = "Indirizzo" id="address"/>
            </div>
            <div className="form-control">
                <label>CAP</label>
                <input type = 'number' placeholder = "CAP" id="PLZ"/>
            </div>
            <div className="form-control">
                <label>Città</label>
                <input type = 'text' placeholder = "Città" id="city"/>
            </div>
            <div className="form-control">
                <label>Numero di Telefono</label>
                <input type = 'tel' placeholder = "0761234567" id="phoneNumber"/>
            </div>
            <div className="form-control">
                <label>Email</label>
                <input type = 'email' placeholder = "123@gmail.com" id="email"/>
            </div>
        </div>
    )
}

export default Adress_Form