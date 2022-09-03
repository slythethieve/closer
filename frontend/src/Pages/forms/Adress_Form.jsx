
const Adress_Form = () => {
    
    return (
        <div className="add-form" id="clientInfo">
            <div className="form-control" name="firm">
                <label id='firstName'>Nome</label>
                <input 
                    type = 'text' 
                    placeholder = "Nome"
                    id="firstName"/>
            </div>
            <div className="form-control">
                <label id='lastName'>Cognome</label>
                <input 
                    type = 'text' 
                    placeholder = "Cognome"
                    id="lastName"/>

            </div>
            <div className="form-control">
                <label id='address'>Indirizzo</label>
                <input 
                    type = 'text' 
                    placeholder = "Indirizzo"
                    id="adress"/>
            </div>
            <div className="form-control">
                <label id='plz'>CAP</label>
                <input 
                    type = 'number' 
                    placeholder = "CAP"
                    id="PLZ"/>
            </div>
            <div className="form-control">
                <label id='city'>Città</label>
                <input 
                    type = 'text' 
                    placeholder = "Città"
                    id="city"/>
            </div>
            <div className="form-control">
                <label id='phone'>Numero di Telefono</label>
                <input 
                    type = 'tel' 
                    placeholder = "0761234567"
                    id="phoneNumber"/>
            </div>
            <div className="form-control">
                <label id='email'>Email</label>
                <input 
                    type = 'email' 
                    placeholder = "123@gmail.com"
                    id="email"/>

            </div>
        </div>
    )
}

export default Adress_Form