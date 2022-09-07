import { useState } from 'react';
import Adress_Form from './Adress_Form';
import { useDispatch } from 'react-redux';
import { createQuote, getQuotes } from '../../features/quote/quoteSlice';
import StandardWardrobe from './products/StandardWardrobe'
import unique_key from '../../utils/unique_key';


const Quote = () => {

    const dispatch = useDispatch()
    
    const [formFields, setFormFields] = useState ([])

    // weird issue with prevent default not working. Maybe it does not recognize what it should not re render. 
    const onClick = (event) => {
        event.preventDefault()
        
        
        let newProduct;
        switch (event.target.name) {
            case "arm_std": 
                newProduct = <StandardWardrobe />
                break
            
        }
        setFormFields([...formFields, newProduct])
    }

    const onSubmit = (event) => {
        event.preventDefault()
        let formData = {}
        let clientInfoData = []
        let productsInfoData = []
 
        const clientInfo = document.getElementById("clientInfo")
        for (let i= 0; i < clientInfo.childNodes.length; i++) {
            clientInfoData.push({
                [clientInfo.childNodes[i].childNodes[1].id]: clientInfo.childNodes[i].childNodes[1].value
            })
        }

        const productInfo = document.getElementById("products")
        try {
            for (let j = 0; j < productInfo.childNodes.length; j++) {
                for (let i= 1; i < productInfo.childNodes[j].childNodes[0].childNodes.length; i++) {
                    productsInfoData.push({
                    [productInfo.childNodes[j].childNodes[0].childNodes[i].childNodes[1].id]: productInfo.childNodes[j].childNodes[0].childNodes[i].childNodes[1].value
                    })
                }
            }
        } catch (error) {
            console.log(error)
            
        }
        
        // Maybe you also need to move this inside the try block, right after the double loop. 
        let clientInfoDataPretty = JSON.stringify(clientInfoData)
        let productsInfoDataPretty = JSON.stringify(productsInfoData)
        formData["clientInfo"] = clientInfoData
        formData["products"] = productsInfoData

       
        //dispatch(getQuotes())
        dispatch(createQuote(formData))
        
    }

    return (
        <div className='container'>
            <form onSubmit={onSubmit}>
                <Adress_Form />
                <div id = 'products' key ={unique_key()}>
                {formFields.map(item => (
                    <div key ={unique_key()}>{item}</div>
                ))}
                </div>
                <input type="submit"></input>
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
export default Quote