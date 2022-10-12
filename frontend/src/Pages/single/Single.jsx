import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import TableComponent from "../../components/table/TableComponent";
import { useLocation } from "react-router-dom";

// This works fine if access this page from the orders view, but if we instead 
// input the page directly providing the id it does not work. Same thing might happen
// with the pdf generation. 

// So now I need to display the details of an order. I already have dispayed the client details. 

const Single = () => {
  const location = useLocation() 
  const quote = location.state.quote

  if (quote[0].products) {
    console.log("Yo")
  }else {
    console.log("no")
  }

  const renderProducts = () => {
    
  }

  // So this checks if there is any product inside this category.
  // Actually I could maybe put this directly down below with a map.
  if (quote[0].products.goodlineeProducts.products) {
    
  }


  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
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
          {}
        </div>
      </div>
    </div>
  );
};

export default Single;