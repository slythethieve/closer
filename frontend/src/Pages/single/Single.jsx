import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import InputField from '../forms/InputField';
import { useLocation } from "react-router-dom";
import unique_key from "../../utils/unique_key";
import { Link } from "react-router-dom";


const Single = () => {


  const location = useLocation() 
  const quote = location.state.quote

  


  // Potentially I can also set this as input fields so that I can change it and then save it. 
  // Need to think about the text area though
  const renderProducts = () => {

    let finalValues = []
    if (quote[0].products.euroMoebelProducts.products) {
      let valuesEM = Object.entries(Object.values(quote[0].products.euroMoebelProducts.products)[0])
      for(let i = 0; i < valuesEM.length; i++) {
        finalValues.push(
          <div key= {unique_key()}>
            <span>{valuesEM[i][1].placeholder}: </span>
            <span>{valuesEM[i][1].value}</span>
          </div>
        )
      }
    }
     if (quote[0].products.goodlineeProducts.products) {
       let valuesGood = Object.entries(Object.values(quote[0].products.goodlineeProducts.products)[0])
       for(let i = 0; i < valuesGood.length; i++) {
         finalValues.push(
           <div key= {unique_key()}>
             <span>{valuesGood[i][1].placeholder}: </span>
             <span>{valuesGood[i][1].value}</span>
           </div>
         )
       }
     }
    return finalValues
    
  }

  
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">
              <Link to={`/pdf`} state={{ quote: quote}}>
                <div>Crea Fattura</div>
              </Link>
            </div>
            <h1 className="title">Informazioni</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733842/pexels-photo-733842.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{quote[0].clientInfo.name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email: </span>
                  <span className="itemValue">{quote[0].clientInfo.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Telefono:</span>
                  <span className="itemValue">{quote[0].clientInfo.phone_number}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Indirizzo:</span>
                  <span className="itemValue">{quote[0].clientInfo.address}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">PLZ:</span>
                  <span className="itemValue">{quote[0].clientInfo.plz}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Città:</span>
                  <span className="itemValue">{quote[0].clientInfo.city}</span>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          {renderProducts()}
        </div>
      </div>
    </div>
  );
};

export default Single;