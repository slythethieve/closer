import { useState } from 'react';
import Adress_Form from './Adress_Form';
import { useDispatch } from 'react-redux';
import { createQuote } from '../../features/quote/quoteSlice';
import StandardWardrobe from './StandardWardrobe'


const Quote = () => {
    // Test
    const dispatch = useDispatch()
    const quoteData = {
        firstName: "",
        lastName: "",

    }

    const [inputFields, setInputFields] = useState ([])
    const onClick = event => {
        event.preventDefault()


        // Maybe do switch case here instead of a bunch of
        // ifs statements
         let newProduct;
         if (event.target.name === "arm_std") {
             newProduct = <StandardWardrobe />
         }else {
            newProduct = <Adress_Form />
         }
         setInputFields([...inputFields, newProduct])
        
    }

    // Ok I can pass down this on submit as a prop to the adress form 
    // and correctly log whatever i type in . 
    const onSubmit = (event) => {
        event.preventDefault()
        let target = event.target
        let formData = {}
        //for (let i = 0; i < target.length; i++) {
        //    formData[target.elements[i].getAttribute("name")] = target.elements[i].value
        //}
        //console.log(target.elements)
        //console.log('formData', formData)

        let clientInfoData = []
        let products = []



        // Maybe something to useful in these 2 lines of code. Honestly does not not look clean at all. 
        // In theory like this I can differentiate between each one of the forms. 
        // The nwxt question to answer is how to put these things in the database depending on which approach you want to use. 
        
        //const test = document.getElementById("testing")
        // I can also get it by the name. Maybe as this name suggests this can potentially return multiple elements with a name. 
        //const test2 = document.getElementsByName("firm")
        //console.log(test.firstChild.childNodes.item(1).value)

        


        // HOLY SHIT IT FUCKING WORKS. I CANNOT BELIEVE THIS!!!! NOW NEED TO WORK VERY CAREFULLY TO MAKE THIS ALL PRETTY-
        // RIGHT IT'S A BIG MESS. ONE THING TO CHANGE IS REMOVE IDS FROM LABEL INSIDE THE FORMS. JUST NEED THE IDS IN THE INPUT FIELDS. 
        const clientInfo = document.getElementById("clientInfo")
        //console.log(clientInfo.childNodes[0].childNodes[0].id)
        for (let i= 0; i < clientInfo.childNodes.length; i++) {
            clientInfoData.push({
                [clientInfo.childNodes[i].childNodes[1].id]: clientInfo.childNodes[i].childNodes[1].value
            })
        }

        const productInfo = document.getElementById("products")
        console.log(productInfo.childNodes[0].childNodes[0].childNodes[1])
        for (let i= 1; i < productInfo.childNodes[0].childNodes[0].childNodes.length; i++) {
            products.push({
                [productInfo.childNodes[0].childNodes[0].childNodes[i].childNodes[1].id]: productInfo.childNodes[0].childNodes[0].childNodes[i].childNodes[1].value
            })
        }
        let str = JSON.stringify(clientInfoData)
        let str2 = JSON.stringify(products)
        console.log(str)
        console.log(str2)

        
        
        //console.log(test2)
        //dispatch(createClient(formData))


        // Maybe start by using an array like formdata. 
        
    }

    // If this approach works I really need to add unique ids for each form
    return (
        <div className='container'>
            <form onSubmit={onSubmit}>
                <Adress_Form />
                <div id = 'products'>
                {inputFields.map(item => (
                    <div>{item}</div>
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