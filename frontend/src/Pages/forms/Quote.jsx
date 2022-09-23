import { useState} from 'react';
import { useDispatch } from 'react-redux';
import { createQuote, getQuotes } from '../../features/quote/quoteSlice';
import unique_key from '../../utils/unique_key';
import Sidebar from '../../components/sidebar/Sidebar'
import TextArea from './TextArea';
import InputField from './InputField';
import './form.scss'
import './quote.scss'

// TODO: Put another div with better styling for
// proper button placement. 

const Quote = () => {

    // Ok so I hope my last big challenge will be to modify this file
    // for the last time. Maybe one more time to handle the client add button. 
    // I tried modifying how those products field get added to the productFields 
    // useState, but it's a nightmare. So I thought that maybe I can leave it 
    // the way it is, and do the sorting inside the onSubmit function instead. 

    // Look at the section about the form in the Lama Dev tutorial
    // He actually does something very similar to you. Only with 
    // objects instead of arrays. But I guess it's pretty much the same thing.

    
    // To avoid confusion. The indices in the arrays represent:
    // 0: value
    // 1: placeholder
    // 2: label text
    // 3: element type (input, textArea, etc.)
    // 4: product name
    // 5: company this product belongs to
    const products = {
        std_ward: {
            std_ward_position: ["","Posizione Armadio", "Posizione Armadio", "input", "std_ward", "euroMoebel"],
            std_ward_model: ["","Modello", "Modello", "input", "std_ward", "euroMoebel"],
            std_ward_finish: ["","Finitura", "Finitura Fianchi/Ante", "input", "std_ward", "euroMoebel"],
            std_ward_width: ["", "L. in mm", "Larghezza in millimetri", "input", "std_ward", "euroMoebel"],
            std_ward_height: ["", "H. in mm", "Altezza minima in millimetri", "input", "std_ward", "euroMoebel"],
            std_ward_depth: ["", "P. in mm", "Profondità in millimetri", "input", "std_ward", "euroMoebel"],
            std_ward_accessories: ["", "Accessori", "Accessori", "textArea", "std_ward", "euroMoebel"],
            std_ward_notes: ["", "Note", "Note", "textArea", "std_ward", "euroMoebel"],
            price: ["", "Prezzo", "Prezzo", "input", "std_ward", "euroMoebel"]
        },
        roof_pitched_ward: {
            roof_pitched_position: ["","Posizione Armadio", "Posizione Armadio", "input"],
            roof_pitched_model: ["","Modello", "Modello", "input"],
            roof_pitched_finish: ["","Finitura", "Finitura Fianchi/Ante", "input"],
            roof_pitched_width: ["", "L. in mm", "Larghezza in millimetri", "input"],
            roof_pitched_height_max: ["", "H. max in mm", "Altezza massima in millimetri", "input"],
            roof_pitched_height_min: ["", "H. min in mm", "Altezza minima in millimetri", "input"],
            roof_pitched_depth: ["", "P. in mm", "Profondità in millimetri", "input"],
            roof_pitched_accessories: ["", "Accessori", "Accessori", "textArea"],
            roof_pitched_notes: ["", "Note", "Note", "textArea"],
            price: ["", "Prezzo", "Prezzo", "input"]
        },
        curtain: {
            curtain_position: ["","Posizione Tenda", "Posizione Tenda", "input"],
            curtain_width: ["", "L. in mm", "Larghezza in millimetri", "input"],
            curtain_height_left: ["", "H. sx in mm", "Altezza sinistra in millimetri", "input"],
            curtain_height_right: ["", "H. dx in mm", "Altezza destra in millimetri", "input"],
            curtain_fabric: ["", "Stoffa", "Stoffa", "input"],
            curtain_sewing: ["", "Cucitura", "Cucitura", "input"],
            curtain_fabric_multiplicator: ["", "Rapporto", "Rapporto", "input"],
            curtain_notes: ["", "Note", "Note", "textArea"],
            price: ["", "Prezzo", "Prezzo", "input"]
        },
        mosquito_net: {
            mosquito_net_position: ["","Posizione Zanzariera", "Posizione Zanzariera", "input"],
            mosquito_net_model: ["","Modello", "Modello", "input"],
            mosquito_net_finish_structure: ["","Colore Struttura", "Colore Struttura", "input"],
            mosquito_net_finish_net: ["","Colore Rete", "Colore Rete", "input"],
            mosquito_net_width: ["", "L. in mm", "Larghezza in millimetri", "input"],
            mosquito_net_height: ["", "H. in mm", "Altezza in millimetri", "input"],
            mosquito_net_notes: ["", "Note", "Note", "textArea"],
            price: ["", "Prezzo", "Prezzo", "input"]
        },
        plissee: {
            plissee_position: ["","Posizione Plissée", "Posizione Plissée", "input"],
            plissee_model: ["","Modello", "Modello", "input"],
            plissee_finish_structure: ["","Colore Struttura", "Colore Struttura", "input"],
            plissee_fabric: ["","Articolo Stoffa", "Articolo Stoffa", "input"],
            plissee_width: ["", "L. in mm", "Larghezza in millimetri", "input"],
            plissee_height: ["", "H. in mm", "Altezza in millimetri", "input"],
            plissee_notes: ["", "Note", "Note", "textArea"],
            price: ["", "Prezzo", "Prezzo", "input"]
        },
    }
    
    // By default we want to see the client info form
    const [productFields, setProductFields] = useState([{
        firstName: ["", "Nome", "Nome", "input"],
        lastName: ["", "Cognome", "Cognome", "input"],
        address: ["", "Indirizzo", "Indirizzo", "input"],
        plz: ["", "CAP", "CAP", "input"],
        city: ["", "Città", "Città", "input"],
        phone_number: ["", "076 123 45 67", "Numero di Telefono", "input"],
        email: ["", "paolo.rossi@gmail.com", "Email", "input"],
        
        
    }])

    const onClick = (event) => {
        let newProduct 
        switch (event.target.name) {
            case "std_ward":
                newProduct = products.std_ward
                break
            case "curtain":
                newProduct = products.curtain
                break
            case "roof_pitched_ward":
                newProduct = products.roof_pitched_ward
                break
            case "mosquito_net":
                newProduct = products.mosquito_net
                break
            case "plissee":
                newProduct = products.plissee
                break
        }
        
        
        setProductFields([...productFields, newProduct])
        // setProductFields({
        //     ...productFields,
        //     euroMoebelProducts: {
        //         ...productFields.euroMoebelProducts,
        //         newProduct
        //     }
        // })
        
        console.log(productFields)
    }

    const onChangeHandler = (index, event) => {
        let data = [...productFields]
        data[index][event.target.name][0] = event.target.value
        setProductFields(data)
    }

    const dispatch = useDispatch()

    // Submit works exactly like I wanted it to. 
    const onSubmit = (event) => {
        event.preventDefault()

        let quoteData = {}
        let clientInfoData = {}
        let productsInfoData = {}
        let euroMoebelProducts = {}

        Object.entries(productFields[0]).map(([key, value]) => {
            clientInfoData[key] = value[0]
        })

        for (let i = 1; i < productFields.length; i++ ) {
            Object.entries(productFields[i]).map(([key,value]) => {
                // productsInfoData[`product${i}`] = 
                //     {...productsInfoData[`product${i}`],...{
                //         [key]: value[0]
                // }}

                // Ok so this works. Now what if I add another product which is different. 
                // Maybe I need a couple of variables for each of the companies. 
                // Let's work this through. I need the following:
                // - The products should get sorted in the right company. 
                // - Ideally the indices should be correct for each product type. 
                
                euroMoebelProducts[`product_${i}_${value[4]}`] = {
                    ...euroMoebelProducts[`product_${i}_${value[4]}`], ...{
                        [key]: value[0]
                    }
                }

            })
        }

        productsInfoData["euroMoebelProducts"] = euroMoebelProducts

        console.log(productsInfoData)
        
        quoteData["clientInfo"] = clientInfoData
        quoteData["products"] = productsInfoData
        //dispatch(createQuote(quoteData))
        
    }

    return (
        <div className='quote'>
            <Sidebar />
            <div className='formContainer'>
                <form onSubmit={onSubmit}>
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
                    <input className="button" type="submit"></input>
                </form>
                <button
                    onClick = {onClick}
                    className='button' 
                    name="std_ward">Armadio Standard</button>
                <button 
                    onClick = {onClick}
                    className='button' 
                    name="roof_pitched_ward">Armdadio Mansardato</button>
                <button 
                    onClick = {onClick}
                    className='button'
                    name="curtain">Tenda</button>
                <button 
                    onClick = {onClick}
                    className='button'
                    name ="mosquito_net">Zanzariera</button>
                <button 
                    onClick = {onClick}
                    className='button'
                    name ="plissee">Plissée</button>

            </div>
        </div>
    )
}
export default Quote