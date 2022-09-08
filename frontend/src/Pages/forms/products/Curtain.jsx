

function Curtain() {
    return (
        <div className="add-form" id="curtain">
            <div className = "task h3" >
                <label>Tenda</label>
            </div>
            <div className="form-control">
                <label>Posizione</label>
                <input type = 'text' placeholder = "Posizione" id="curtain_position" />
            </div>
            <div className="form-control">
                <label>Larghezza in millimetri</label>
                <input type = 'number' placeholder = "L. in mm" id ="curtain_width"/>
            </div>
            <div className="form-control">
                <label>Altezza sinistra in millimetri</label>
                <input type = 'number' placeholder = "H. sx in mm" id ="curtain_height_left"/>
            </div>
            <div className="form-control">
                <label>Altezza destra in millimetri</label>
                <input type = 'number' placeholder = "H. dx in mm" id ="curtain_height_right"/>
            </div>
            <div className="form-control">
                <label>Stoffa</label>
                <input type = 'text' placeholder = "Stoffa" id="curtain_fabric" />
            </div>
            <div className="form-control">
                <label>Stoffa</label>
                <input type = 'text' placeholder = "Rapporto" id="curtain_fabric_multiply" />
            </div>
            <div className="form-control">
                <label>Cucitura</label>
                <input type = 'text' placeholder = "Cucitura" id="curtain_sawing" />
            </div>
            <div className="form-control">
                <label>Note</label>
                <textarea className="form-control textarea"placeholder="Note" id ="curtain_notes" />
            </div>
            <div className="form-control">
                <label>Prezzo</label>
                <input type = 'number' placeholder = "Prezzo" id="price" />
            </div>
        </div>
    )
}

export default Curtain