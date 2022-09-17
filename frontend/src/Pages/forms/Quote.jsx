import { useState} from 'react';
import Adress_Form from './Adress_Form';
import { useDispatch } from 'react-redux';
import { createQuote, getQuotes } from '../../features/quote/quoteSlice';
import StandardWardrobe from './products/StandardWardrobe'
import unique_key from '../../utils/unique_key';
import Sidebar from '../../components/sidebar/Sidebar'
import './quote.scss'
import Curtain from './products/Curtain';
import InputField from './InputField';
import './form.scss'

// Ok very big progress, the last problem to fix is I think how to handle
// a text area. 

// Maybe I have found the right logic to do this with the text area. Now I need 
// to be sure this way works and also I need to work out the kinks with 
// the onChangehandler

const Quote = () => {

    // To avoid confusion. The indices in the arrays represent:
    // 0: value
    // 1: placeholder
    // 2: label text
    const products = {
        std_ward: {
            inputs: {
                std_ward_position: ["","Posizione Armadio", "Posizione Armadio"],
                std_ward_model: ["","Modello", "Modello"],
                std_ward_finish: ["","Finitura", "Finitura Fianchi/Ante"],
                std_ward_width: ["", "L. in mm", "Larghezza in millimetri"],
                std_ward_height: ["", "H. in mm", "Altezza minima in millimetri"],
                std_ward_depth: ["", "P. in mm", "Profondità in millimetri"]
            },
            textArea: {
                std_ward_accessories: ["", "Accessori", "Accessori"],
                std_ward_notes: ["", "Note", "Note"]
            }
            
        },
        curtain: {
            inputs: {
                std_ward_position: ["","Posizione Armadio", "Posizione Armadio"],
                std_ward_model: ["","Modello", "Modello"],
                std_ward_finish: ["","Finitura", "Finitura Fianchi/Ante"],
                std_ward_width: ["", "L. in mm", "Larghezza in millimetri"],
                std_ward_height: ["", "H. in mm", "Altezza minima in millimetri"],
                std_ward_depth: ["", "P. in mm", "Profondità in millimetri"]
            },
            textArea: {
                std_ward_accessories: ["", "Accessori", "Accessori"],
                std_ward_notes: ["", "Note", "Note"]
            }
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

    // Actually I don't think I really need an index value
    // Maybe I can away with a for loop.
    const onChangeHandler = (index, event) => {
        let data = [...productFields]
        console.log(Object.values(data[0])[0][event.target.name])
        
        // Ok so this base logic works. Have to now turn it in a for loop
        // and be sure it works for all products. 
        Object.values(data[0])[0][event.target.name][0] = event.target.value
        setProductFields(data)
    }

    // With this new approach I have to change the onSubmit function a little bit. 
    // I will get rid of that complicated for loop. The "only" thing I will need to add
    // is a way of putting dividing clientInfo and products data, so that I don't have
    // to change the current model schema. 
    const onSubmit = (event) => {
        event.preventDefault()
        console.log(productFields[0][0])
        
    }

    return (
        <div className='quote'>
            <Sidebar />
            <div className='formContainer'>
                <form onSubmit={onSubmit}>
                    <Adress_Form/>
                    <div>
                        {productFields.map((item) => (
                            Object.values(item).map((test,index) => (
                                <div key= {index}>
                                {Object.entries(test).map(([key, value]) => (
                                    <InputField placeholder={value[1]} key={key} name={key} value={value[0]} onChange={event => onChangeHandler(index, event)}/>
                                ))}
                                </div>
                            ))
                            
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