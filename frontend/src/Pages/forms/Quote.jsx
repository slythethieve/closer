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


// This shit is getting crazy. So I thought I was closing in on a decent solution, but I have encountered another 
// problem. So now what the fuck do I do? 

const Quote = () => {

    // Maybe I can construct another object and put the fields inside there. 
    // But I would also probably need another complicated map loop. Let's see. 
    // You need to put some thought as to how to construct this new object with all
    // the necessary values. 
    // The main issue is to read with all the necessary values with the same loop

    // Ok I have also made this way work, still a bit of repetition but I guess it's even
    // better than what I had at the beginning. 
    const testComp = {
        placeholders: {
            arm_std_position: "Posizione Armadio",
            arm_std_model: "Modello",
            arm_std_finish: "Finitura"
        },
        std_ward_fields: {
            arm_std_position: "",
            arm_std_model: "",
            arm_std_finish: ""
        }
         
    }


    const lastTest = {
        placeholders: {
            std_ward: {
                arm_std_position: "Posizione Armadio",
                arm_std_model: "Modello",
                arm_std_finish: "Finitura"
            },
            curtain: {
                length: "lunghezza",
                width: "larghezza"
            }
        },
        fields: {
            std_ward: {
                arm_std_position: "",
                arm_std_model: "",
                arm_std_finish: ""
            },
            curtain: {
                length: "",
                width: ""
            }
        }
    }

    

    

    // Ok ok this way works for sure. I don't think it is as clean as I would like. 
    // I would prefer it if I could put everything inside an object. 
    const testPlaceholders = [
        "Posizione Armadio",
        "Modello",
        "Finitura"
    ]

    const placeholders = {
        arm_std_position: "Posizione",
        arm_std_model: "test",
        arm_finish: "test"
    }

    const [testState, setTestState] = useState([])

    const std_ward_fields = {
        arm_std_position: "",
        arm_std_model: "",
        arm_finish: ""
    }
    const curtain_fields = {
        length: "",
        width: ""
    }

    const [productFields, setProductFields] = useState([])
    // Holy shit, I'm actually getting somewhere with this approach
    // Now I have to implement styling, labels and then the last big thing
    // will be handling submit, avoiding the convoluted way I was doing it before.
    // To potentially also add other fields to this new approach take a look at that question on Stack Overflow

    const onClick = (event) => {
        let newProduct 
        switch (event.target.name) {
            case "arm_std":
                //newProduct = testComp.std_ward_fields
                newProduct = lastTest.fields.std_ward
                
                break
            case "curtain":
                newProduct = lastTest.fields.curtain
                
                break
        }
        setProductFields([...productFields, newProduct])
        
    }

    const onChangeHandler = (index, event) => {
        let data = [...productFields]
        data[index][event.target.name] = event.target.value
        setProductFields(data)
    }

    // With this new approach I have to change the onSubmit function a little bit. 
    // I will get rid of that complicated for loop. The "only" thing I will need to add
    // is a way of putting dividing clientInfo and products data, so that I don't have
    // to change the current model schema. 
    const onSubmit = (event) => {
        event.preventDefault()
        console.log(productFields)
        
    }

    return (
        <div className='quote'>
            <Sidebar />
            <div className='formContainer'>
                <form onSubmit={onSubmit}>
                    <Adress_Form/>
                    <div>
                        {Object.entries(productFields).map(([test,item], index) => (
                            
                            <div key= {index}>
                            {Object.entries(item).map(([key, value]) => (
                                <InputField placeholder = {lastTest.placeholders[key]} key={key} name={key} value={value} onChange={event => onChangeHandler(index, event)}/>
                                
                            ))}
                            </div>
                        ))}
                    </div>
                    
                    <input type="submit"></input>
                </form>
                <button
                    onClick = {onClick}
                    className='button' 
                    name="arm_std">Armadio Standard</button>
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