import { useState} from 'react';
import Adress_Form from './Adress_Form';
import { useDispatch } from 'react-redux';
import { createQuote, getQuotes } from '../../features/quote/quoteSlice';
import unique_key from '../../utils/unique_key';
import Sidebar from '../../components/sidebar/Sidebar'
import TextArea from './TextArea';
import InputField from './InputField';
import './form.scss'
import './quote.scss'



const Quote = () => {

    // To avoid confusion. The indices in the arrays represent:
    // 0: value
    // 1: placeholder
    // 2: label text
    // 3: element type (input, textArea, etc.)
    const products = {
        std_ward: {
            std_ward_position: ["","Posizione Armadio", "Posizione Armadio", "input"],
            std_ward_model: ["","Modello", "Modello", "input"],
            std_ward_finish: ["","Finitura", "Finitura Fianchi/Ante", "input"],
            std_ward_width: ["", "L. in mm", "Larghezza in millimetri", "input"],
            std_ward_height: ["", "H. in mm", "Altezza minima in millimetri", "input"],
            std_ward_depth: ["", "P. in mm", "Profondità in millimetri", "input"],
            std_ward_accessories: ["", "Accessori", "Accessori", "textArea"],
            std_ward_notes: ["", "Note", "Note", "textArea"],
            std_ward_price: ["", "Prezzo", "Prezzo", "input"]
        },
        curtain: {
            curtain_position: ["","Posizione Tenda", "Posizione Tenda", "input"],
            curtain_width: ["", "L. in mm", "Larghezza in millimetri", "input"],
            curtain_height_left: ["", "H. sx in mm", "Altezza sinistra in millimetri", "input"],
            curtain_height_right: ["", "H. dx in mm", "Altezza destra in millimetri", "input"],
            curtain_fabric: ["", "Stoffa", "Stoffa", "input"],
            curtain_sewing: ["", "Cucitura", "Cucitura", "input"],
            curtain_notes: ["", "Note", "Note", "textArea"],
            curtain_price: ["", "Prezzo", "Prezzo", "input"]
        }
    }

    const [productFields, setProductFields] = useState([])

    const onClick = (event) => {
        let newProduct 
        switch (event.target.name) {
            case "std_ward":
                newProduct = products.std_ward
                break
            case "curtain":
                newProduct = products.curtain
                break
        }
        setProductFields([...productFields, newProduct])
    }

    const onChangeHandler = (index, event) => {
        let data = [...productFields]
        data[index][event.target.name][0] = event.target.value
        setProductFields(data)
    }

    // With this new approach I have to change the onSubmit function a little bit. 
    // I will get rid of that complicated for loop. The "only" thing I will need to add
    // is a way of putting dividing clientInfo and products data, so that I don't have
    // to change the current model schema. 
    const onSubmit = (event) => {
        event.preventDefault()
        //console.log(productFields[0][0])
        
    }

    return (
        <div className='quote'>
            <Sidebar />
            <div className='formContainer'>
                <form onSubmit={onSubmit}>
                    <Adress_Form/>
                    <div>
                        {productFields.map((item, index) => (
                            <div key= {index}>
                                {Object.entries(item).map(([key, value]) => {
                                    if(value[3] === "input") {
                                        return (
                                            <InputField label={value[2]} placeholder={value[1]} key={key} name={key} value={value[0]} onChange={event => onChangeHandler(index, event)}/>
                                        )
                                    }else if(value[3] === "textArea") {
                                        return (
                                            <TextArea label={value[2]} placeholder={value[1]} key={key} name={key} value={value[0]} onChange={event => onChangeHandler(index, event)}/>
                                        )
                                    }
                                })}
                                </div>
                        ))}
                    </div>
                    <input type="submit"></input>
                </form>
                <button
                    onClick = {onClick}
                    className='button' 
                    name="std_ward">Armadio Standard</button>
                <button 
                    onClick = {onClick}
                    className='button' 
                    name="curtain">Tenda</button>
                <button 
                    onClick = {onClick}
                    className='button'>Armadio Mansardato</button>
                <button 
                    onClick = {onClick}
                    className='button'>Armadio Scorrevole</button>
            </div>
            
            
        </div>
    )
}
export default Quote