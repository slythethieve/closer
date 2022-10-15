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

	
	const renderProducts = () => {

		let finalValues = []
		if (quote[0].products.euroMoebelProducts.products) {
		let valuesEM = Object.entries(Object.values(quote[0].products.euroMoebelProducts.products))
		for(let i = 0; i < valuesEM.length; i++) {
			for (let k = 0; k < Object.values(valuesEM[i][1]).length; k++) {
			finalValues.push(
			<div key= {unique_key()}>
				<span>{Object.values(valuesEM[i][1])[k].placeholder}: </span>
				<span>{Object.values(valuesEM[i][1])[k].value}</span>
			</div>
			)
			}
			
		}
		}
		if (quote[0].products.goodlineeProducts.products) {
		let valuesGood = Object.entries(Object.values(quote[0].products.goodlineeProducts.products))
		for(let i = 0; i < valuesGood.length; i++) {
			for (let k = 0; k < Object.values(valuesGood[i][1]).length; k++) {
			finalValues.push(
			<div key= {unique_key()}>
				<span>{Object.values(valuesGood[i][1])[k].placeholder}: </span>
				<span>{Object.values(valuesGood[i][1])[k].value}</span>
			</div>
			)
			}
			
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