

const StandardWardrobe = () => {
    return (
        <div className="add-form" id="arm_std">
            <div className = "task h3">
                <label>Armadio standard giessegi</label>
            </div>
            <div className="form-control">
                <label>Posizione Armadio</label>
                <input type = 'text' placeholder = "Posizione Armadio" id="arm_std_position"/>
            </div>
            <div className="form-control">
                <label>Modello Armadio</label>
                <input type = 'text' placeholder = "Modello" id ="arm_std_model"/>
            </div>
            <div className="form-control">
                <label>Finitura Fianchi/Ante</label>
                <input type = 'text' placeholder = "Finitura" id ="arm_std_finish"/>
            </div>
            <div className="form-control">
                <label>Larghezza in millimetri</label>
                <input type = 'number' placeholder = "L. in mm" id ="arm_std_width"/>
            </div>
            <div className="form-control">
                <label>Altezza minima in millimetri</label>
                <input type = 'number' placeholder = "H. min in mm" id ="arm_std_height"/>
            </div>
            <div className="form-control">
                <label>Accessori</label>
                <textarea className="form-control textarea"placeholder="Accessori"  id="arm_std_accessories" />
            </div>
            <div className="form-control">
                <label>Note</label>
                <textarea className="form-control textarea"placeholder="Note" id ="arm_std_notes" />
            </div>
        </div>
    )

}

export default StandardWardrobe