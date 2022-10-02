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
    
    // To avoid confusion. The indices in the arrays represent:
    // 0: value
    // 1: placeholder
    // 2: label text
    // 3: element type (input, textArea, etc.)
    // 4: product name
    // 5: company this product belongs to
    // 6: Title Lable Text
    const products = {
        std_ward: {
            std_ward_position: ["","Posizione Armadio", "Posizione Armadio", "input", "std_ward", "euroMoebel", "Armadio Standard"],
            std_ward_model: ["","Modello", "Modello", "input", "std_ward", "euroMoebel", "Armadio Standard"],
            std_ward_finish: ["","Finitura", "Finitura Fianchi/Ante", "input", "std_ward", "euroMoebel", "Armadio Standard"],
            std_ward_width: ["", "L. in mm", "Larghezza in millimetri", "input", "std_ward", "euroMoebel", "Armadio Standard"],
            std_ward_height: ["", "H. in mm", "Altezza minima in millimetri", "input", "std_ward", "euroMoebel", "Armadio Standard"],
            std_ward_depth: ["", "P. in mm", "Profondità in millimetri", "input", "std_ward", "euroMoebel", "Armadio Standard"],
            std_ward_accessories: ["", "Accessori", "Accessori", "textArea", "std_ward", "euroMoebel", "Armadio Standard"],
            std_ward_notes: ["", "Note", "Note", "textArea", "std_ward", "euroMoebel", "Armadio Standard"],
            price: ["", "Prezzo", "Prezzo", "input", "std_ward", "euroMoebel", "Armadio Standard"]
        },
        roof_pitched_ward: {
            roof_pitched_position: ["","Posizione Armadio", "Posizione Armadio", "input", "roof_pitched_ward", "euroMoebel", "Armadio Mansardato"],
            roof_pitched_model: ["","Modello", "Modello", "input", "roof_pitched_ward", "euroMoebel", "Armadio Mansardato"],
            roof_pitched_finish: ["","Finitura", "Finitura Fianchi/Ante", "input", "roof_pitched_ward", "euroMoebel", "Armadio Mansardato"],
            roof_pitched_width: ["", "L. in mm", "Larghezza in millimetri", "input", "roof_pitched_ward", "euroMoebel", "Armadio Mansardato"],
            roof_pitched_height_max: ["", "H. max in mm", "Altezza massima in millimetri", "input", "roof_pitched_ward", "euroMoebel", "Armadio Mansardato"],
            roof_pitched_height_min: ["", "H. min in mm", "Altezza minima in millimetri", "input","roof_pitched_ward", "euroMoebel", "Armadio Mansardato"],
            roof_pitched_depth: ["", "P. in mm", "Profondità in millimetri", "input", "roof_pitched_ward", "euroMoebel", "Armadio Mansardato"],
            roof_pitched_accessories: ["", "Accessori", "Accessori", "textArea", "roof_pitched_ward", "euroMoebel", "Armadio Mansardato"],
            roof_pitched_notes: ["", "Note", "Note", "textArea", "roof_pitched_ward", "euroMoebel", "Armadio Mansardato"],
            price: ["", "Prezzo", "Prezzo", "input", "roof_pitched_ward", "euroMoebel", "Armadio Mansardato"]
        },
        curtain: {
            curtain_position: ["","Posizione Tenda", "Posizione Tenda", "input", "curtain", "goodlinee", "Tenda"],
            curtain_width: ["", "L. in mm", "Larghezza in millimetri", "input", "curtain", "goodlinee", "Tenda"],
            curtain_height_left: ["", "H. sx in mm", "Altezza sinistra in millimetri", "input", "curtain", "goodlinee", "Tenda"],
            curtain_height_right: ["", "H. dx in mm", "Altezza destra in millimetri", "input", "curtain", "goodlinee", "Tenda"],
            curtain_fabric: ["", "Stoffa", "Stoffa", "input", "curtain", "goodlinee", "Tenda"],
            curtain_sewing: ["", "Cucitura", "Cucitura", "input", "curtain", "goodlinee", "Tenda"],
            curtain_fabric_multiplicator: ["", "Rapporto", "Rapporto", "input", "curtain", "goodlinee", "Tenda"],
            curtain_notes: ["", "Note", "Note", "textArea", "curtain", "goodlinee", "Tenda"],
            price: ["", "Prezzo", "Prezzo", "input", "curtain", "goodlinee", "Tenda"]
        },
        mosquito_net: {
            mosquito_net_position: ["","Posizione Zanzariera", "Posizione Zanzariera", "input", "mosquito_net", "goodlinee", "Zanzariera"],
            mosquito_net_model: ["","Modello", "Modello", "input", "mosquito_net", "goodlinee", "Zanzariera"],
            mosquito_net_finish_structure: ["","Colore Struttura", "Colore Struttura", "input", "mosquito_net", "goodlinee", "Zanzariera"],
            mosquito_net_finish_net: ["","Colore Rete", "Colore Rete", "input", "mosquito_net", "goodlinee", "Zanzariera"],
            mosquito_net_width: ["", "L. in mm", "Larghezza in millimetri", "input", "mosquito_net", "goodlinee", "Zanzariera"],
            mosquito_net_height: ["", "H. in mm", "Altezza in millimetri", "input", "mosquito_net", "goodlinee", "Zanzariera"],
            mosquito_net_notes: ["", "Note", "Note", "textArea", "mosquito_net", "goodlinee", "Zanzariera"],
            price: ["", "Prezzo", "Prezzo", "input", "mosquito_net", "goodlinee", "Zanzariera"]
        },
        plissee: {
            plissee_position: ["","Posizione Plissée", "Posizione Plissée", "input", "plissee", "goodlinee", "Plissée"],
            plissee_model: ["","Modello", "Modello", "input", "plissee", "goodlinee", "Plissée"],
            plissee_finish_structure: ["","Colore Struttura", "Colore Struttura", "input", "plissee", "goodlinee", "Plissée"],
            plissee_fabric: ["","Articolo Stoffa", "Articolo Stoffa", "input", "plissee", "goodlinee", "Plissée"],
            plissee_width: ["", "L. in mm", "Larghezza in millimetri", "input", "plissee", "goodlinee", "Plissée"],
            plissee_height: ["", "H. in mm", "Altezza in millimetri", "input", "plissee", "goodlinee", "Plissée"],
            plissee_notes: ["", "Note", "Note", "textArea", "plissee", "goodlinee", "Plissée"],
            price: ["", "Prezzo", "Prezzo", "input", "plissee", "goodlinee", "Plissée"]
        },
    }
    
    // By default we want to see the client info form
    // The empty string field are there to match the index of the Title Lable Text 
    // It's not the greatest solution, but it works for now.
    // Technically speaking I don't even need to put them in every field. I did anyway
    const [productFields, setProductFields] = useState([{
        name: ["", "Nome", "Nome", "input", "", "", "Dati Cliente"],
        address: ["", "Indirizzo", "Indirizzo", "input", "", "", "Dati Cliente"],
        plz: ["", "CAP", "CAP", "input", "", "", "Dati Cliente"],
        city: ["", "Città", "Città", "input", "", "", "Dati Cliente"],
        phone_number: ["", "076 123 45 67", "Numero di Telefono", "input", "", "", "Dati Cliente"],
        email: ["", "paolo.rossi@gmail.com", "Email", "input", "", "", "Dati Cliente"],
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

        console.log(productFields)
    }

    const onChangeHandler = (index, event) => {
        let data = [...productFields]
        data[index][event.target.name][0] = event.target.value
        setProductFields(data)
    }

    const dispatch = useDispatch()

    const onSubmit = (event) => {
        event.preventDefault()

        let quoteData = {}
        let clientInfoData = {}
        let productsInfoData = {}
        let euroMoebelProducts = {
            products: {

            }
        }
        let goodlineeProducts = {
            products: {

            }
        }

        Object.entries(productFields[0]).map(([key, value]) => {
            clientInfoData[key] = value[0]
        })

        for (let i = 1; i < productFields.length; i++ ) {
            Object.entries(productFields[i]).map(([key,value]) => {
                if (value[5]==="euroMoebel") {
                    euroMoebelProducts.products[`product_${i}_${value[4]}`] = {
                        ...euroMoebelProducts.products[`product_${i}_${value[4]}`], ...{
                            [key]: value[0]
                        }
                    }
                }else {
                    goodlineeProducts.products[`product_${i}_${value[4]}`] = {
                        ...goodlineeProducts.products[`product_${i}_${value[4]}`], ...{
                            [key]: value[0]
                        }
                    }
                }
            })
        }

        let status = "offer"
        let isOrder = false
        euroMoebelProducts["status"] = status
        euroMoebelProducts["isOrder"] = isOrder
        goodlineeProducts["status"] = status
        goodlineeProducts["isOrder"] = isOrder

        productsInfoData["euroMoebelProducts"] = euroMoebelProducts
        productsInfoData["goodlineeProducts"] = goodlineeProducts
        
        quoteData["clientInfo"] = clientInfoData
        quoteData["products"] = productsInfoData
        dispatch(createQuote(quoteData))
        
    }


    return (
        <div className='quote'>
            <Sidebar />
            <div className='formContainer'>
                <form onSubmit={onSubmit}>
                    <div>
                        {productFields.map((item, index) => (
                                <div key= {index}>
                                    <label className='labelTitle'>{Object.values(item)[0][6]}</label>
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
                <div className='buttonDiv'>
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
        </div>
    )
}
export default Quote