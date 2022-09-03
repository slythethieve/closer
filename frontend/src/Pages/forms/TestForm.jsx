

const TestForm = () => {
    return (
        <div 
            className="add-form"
            name ="stand">
            <div 
                className = "task h3"
                >
                <label 
                    >Armadio standard giessegi</label>
            </div>
            <div 
                >
            <label
                >Numero</label>
            </div>
            <div 
                className="form-control"
                >
                <label
                    >Posizione Armadio</label>
                <input 
                    type = 'text' 
                    placeholder = "Posizione Armadio"
                    
                    name ="arm_std_posizione"/>

            </div>
            <div 
                className="form-control"
                >
                <label
                    >Modello Armadio</label>
                <input 
                    type = 'text' 
                    placeholder = "Modello"
                    
                    name ="arm_std_modello"/>

            </div>
            <div 
                className="form-control"
                >
                <label
                    >Finitura Fianchi/Ante</label>
                <input 
                    type = 'text' 
                    placeholder = "Finitura"
                    
                    name ="arm_std_finitura"/>

            </div>
            <div 
                className="form-control"
                >
                <label
                    >Larghezza in millimetri</label>
                <input 
                    type = 'number' 
                    placeholder = "L. in mm"
                    
                    name ="arm_std_larghezza"/>
                
            </div>
            <div 
                className="form-control"
                >
                <label
                    >Altezza minima in millimetri</label>
                <input 
                    type = 'number' 
                    placeholder = "H. min in mm"
                
                    name ="arm_std_altezza"/>

            </div>
            <div 
                className="form-control"
                >
                <label
                    >Accessori</label>
                <textarea 
                    className="form-control textarea"
                    placeholder="Accessori"
                    
                    name ="arm_std_accessori" ></textarea>

            </div>
            <div 
                className="form-control"
                >
                <label 
                    >Note</label>
                <textarea 
                    className="form-control textarea"
                    placeholder="Note"
                    
                    name ="arm_std_note"></textarea>
            </div>
            
        </div>
    )

}

export default TestForm