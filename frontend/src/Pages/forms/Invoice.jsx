import { useState } from 'react';
import Adress_Form from './Adress_Form';
import { useDispatch } from 'react-redux';
import { createClient } from '../../features/test/testSlice';


const Invoice = () => {
    // Test
    const dispatch = useDispatch()
    const clientData = {
        firstName: "",
        lastName: "",

    }

    const [inputFields, setInputFields] = useState ([])
    // Ok so now I can differentiate between the different orders. 
    // There might be a better way to do this but I have no idea how
    // yet. I can differentiate it by giving a name to a button and
    // then checking for that name inside here. I then show the corresponding
    // form
    const onClick = event => {
        event.preventDefault()
        // let newField;
        // if (event.target.name === "arm_std") {
        //     newField = <Giessegi_Normal_Wardrobe_Component key={unique_id()}/>
        // }else {
        //     newField = <Adress_Form key={unique_id()}/>
        // }
        // setInputFields([...inputFields, newField])
        
    }

    // Ok I can pass down this on submit as a prop to the adress form 
    // and correctly log whatever i type in . 
    const onSubmit = (event) => {
        event.preventDefault()
        let target = event.target
        let formData = {}
        for (let i = 0; i < target.length; i++) {
            formData[target.elements[i].getAttribute("name")] = target.elements[i].value
        }
        dispatch(createClient(formData))
        
    }

    // If this approach works I really need to add unique ids for each form
    return (
        <div className='container'
            >
            <form 
                onSubmit={onSubmit} 
                >
                <Adress_Form />
                
                {inputFields.map(item => (
                    <div 
                        >{item}</div>
                ))}
                <input 
                    type="submit"
                    ></input>
            </form>
            <button
                
                onClick = {onClick}
                className='btn' 
                name="arm_std">Armadio Standard</button>
            <button 
                
                onClick = {onClick}
                className='btn' 
                name="arm_nic">Armadio in Nicchia</button>
            <button 
                
                onClick = {onClick}
                className='btn'>Armadio Mansardato</button>
            <button 
                
                onClick = {onClick}
                className='btn'>Armadio Scorrevole</button>
        </div>
    )
}
export default Invoice