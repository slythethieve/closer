
const Adress_Form = () => {
    
    return (
        <div className="add-form" id="adress">
            <div className="form-control">
                <label>Nome</label>
                <input 
                    type = 'text' 
                    placeholder = "Nome"
                    name="firstName"/>
            </div>
            <div className="form-control">
                <label>Cognome</label>
                <input 
                    type = 'text' 
                    placeholder = "Cognome"
                    name="lastName"/>

            </div>
            <div className="form-control">
                <label>Indirizzo</label>
                <input 
                    type = 'text' 
                    placeholder = "Indirizzo"
                    name="adress"/>
            </div>
            <div className="form-control">
                <label>CAP</label>
                <input 
                    type = 'number' 
                    placeholder = "CAP"
                    name="PLZ"/>
            </div>
            <div className="form-control">
                <label>Città</label>
                <input 
                    type = 'text' 
                    placeholder = "Città"
                    name="city"/>
            </div>
            <div className="form-control">
                <label>Numero di Telefono</label>
                <input 
                    type = 'tel' 
                    placeholder = "0761234567"
                    name="phoneNumber"/>
            </div>
            <div className="form-control">
                <label>Email</label>
                <input 
                    type = 'email' 
                    placeholder = "123@gmail.com"
                    name="email"/>

            </div>
        </div>
    )
}

export default Adress_Form