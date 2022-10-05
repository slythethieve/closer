import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Widget from "../../components/widget/Widget"
import FeaturedChart from "../../components/featuredChart/FeaturedChart"
import Chart from "../../components/chart/Chart"
import TableComponent from "../../components/table/TableComponent"
import "./dashboard.scss"
import { useSelector, useDispatch } from 'react-redux';
import { getQuotes } from '../../features/quote/quoteSlice';
import { useEffect, useState } from 'react'


function Dashboard() {

	const dispatch = useDispatch()

  	//const [goodlineeEntries, setGoodlineeEntries] = useState([])

	// Change these names to better ones.
	const [total, setTotal] = useState(0)
	const [numberOfClients, setNumberOfClients] = useState(0)

	const { quote, isLoading, isError, message } = useSelector((state) =>
		state.quotes)

	let testRevenue = []

	useEffect(() => {

		if (isError) {
		console.log(message)
		}


		dispatch(getQuotes())


		calculateTotal(quote)
		setNumberOfClients(quote.length)
		test(quote)
		//testDate(quote)
		//graph(quote)
		//calculatePastRevenueGoodlinee(sortOnDateGoodlinee(sortEntriesIntoGoodlinee(quote)))
		//testRevenue = calculatePastRevenueGoodlinee(sortOnDateGoodlinee(sortEntriesIntoGoodlinee(quote)))
		//console.log(testRevenue)
		
		

	}, [quote.length, isError, message, dispatch])

	const date = new Date()
	const fistDayPrevMonth_1 = new Date(date.getFullYear(), date.getMonth() -1, 1)
	const fistDayPrevMonth_2 = new Date(date.getFullYear(), date.getMonth() -2, 1)
	const fistDayPrevMonth_3 = new Date(date.getFullYear(), date.getMonth() -3, 1)
	const fistDayPrevMonth_4 = new Date(date.getFullYear(), date.getMonth() -4, 1)
	const fistDayPrevMonth_5 = new Date(date.getFullYear(), date.getMonth() -5, 1)
	const fistDayPrevMonth_6 = new Date(date.getFullYear(), date.getMonth() -6, 1)



	const sortEntriesIntoGoodlinee = (quote) => {
		let entries = []
		for (let i = 0; i < quote.length; i++) {
			try {
				if(Object.values(quote[i].products.goodlineeProducts.products).length > 0) {
					entries.push(quote[i])
				}
			} catch (error) {
				
			}
			
		}
		return entries
	}

	const sortOnDateGoodlinee = (companyEntries) => {
		let prevMonths = []
		let currentMonth = []
		let prevMonth1 = []
		let prevMonth2 = []
		let prevMonth3 = []
		let prevMonth4 = []
		let prevMonth5 = []
		let prevMonth6 = []
		for (let i = 0; i < companyEntries.length; i++) {
			if (Date.parse(companyEntries[i].date)>= Date.parse(new Date(date.getFullYear(), date.getMonth(), 1))) {
				currentMonth.push(companyEntries[i])
			// Previous month 1
			}else if(Date.parse(companyEntries[i].date) >= Date.parse(fistDayPrevMonth_1) && Date.parse(quote[i].date) < Date.parse(date)) {
				prevMonth1.push(companyEntries[i])
			// Previous month 2
			}else if (Date.parse(companyEntries[i].date) >= Date.parse(fistDayPrevMonth_2) && Date.parse(quote[i].date) < Date.parse(fistDayPrevMonth_1)) {
				prevMonth2.push(companyEntries[i])
			// Previous month 3
			}else if (Date.parse(companyEntries[i].date) >= Date.parse(fistDayPrevMonth_3) && Date.parse(quote[i].date) < Date.parse(fistDayPrevMonth_2)) {
				prevMonth3.push(companyEntries[i])
			// Previous month 4
			}else if (Date.parse(companyEntries[i].date) >= Date.parse(fistDayPrevMonth_4) && Date.parse(quote[i].date) < Date.parse(fistDayPrevMonth_3)) {
				prevMonth4.push(companyEntries[i])
			// Previous month 5
			}else if (Date.parse(companyEntries[i].date) >= Date.parse(fistDayPrevMonth_5) && Date.parse(quote[i].date) < Date.parse(fistDayPrevMonth_4)) {
				prevMonth5.push(companyEntries[i])
			// Previous month 6
			}else if (Date.parse(companyEntries[i].date) >= Date.parse(fistDayPrevMonth_6) && Date.parse(quote[i].date) < Date.parse(fistDayPrevMonth_5)) {
				prevMonth6.push(companyEntries[i])
			}
		}
		prevMonths.push(currentMonth)
		prevMonths.push(prevMonth1)
		prevMonths.push(prevMonth2)
		prevMonths.push(prevMonth3)
		prevMonths.push(prevMonth4)
		prevMonths.push(prevMonth5)
		prevMonths.push(prevMonth6)

		return prevMonths
	}

	// This calculates the revenue of teh last 6 months and also the current month. 
	const calculatePastRevenueGoodlinee = (goodlineeEntriesSortedByDates) => {
		let pastRevenue6Months = []

		// Here I'm iterating through the months
		for (let i = 0; i < goodlineeEntriesSortedByDates.length; i ++) {
			// Here through the entries of each month
			let tempTotal = 0
			for (let j = 0; j < goodlineeEntriesSortedByDates[i].length; j++) {
				// Here I'm looking at a particular entry
				if(goodlineeEntriesSortedByDates[i][j].products.goodlineeProducts.isOrder) {
					for (let k = 0; k < Object.values(goodlineeEntriesSortedByDates[i][j].products.goodlineeProducts.products).length; k++) {
					//console.log(Object.values(goodlineeEntriesSortedByDates[i][j].products.goodlineeProducts.products)[k].price)
					tempTotal = tempTotal + (Number(Object.values(goodlineeEntriesSortedByDates[i][j].products.goodlineeProducts.products)[k].price) || 0)
					}
				}
			}
			pastRevenue6Months.push(tempTotal)
		}

		return pastRevenue6Months
	}

	
	// I want to try and calculate the number of offers that belong to one company or the other

	// So I think I made it work. just need to change the length. if one offer has 3 products
	// it does not count as 3 offers but just one. D'uh. 
	const test = (quote) => {


		let k = 0
		for (let i = 0; i < quote.length; i++) {
		try {
			for (let j = 0; j < Object.values(quote[i].products.goodlineeProducts.products).length; j++) {

			if(quote[i].products.goodlineeProducts.isOrder === false) {
				k++
			}
			//console.log(Object.values(quote[i].products.goodlineeProducts.products))
			//console.log(k)
			

			}
		} catch (error) {

		}

		}

		return k;


	}

	// Total revenue. With the new db schema I also need to change this one. 
	const calculateTotal = (quote) => {
		let totalRev = 0
		for (let i = 0; i < quote.length; i++) {
		for (let j = 0; j < Object.values(quote[i].products).length; j++) {

			totalRev = totalRev + (Number(Object.values(quote[i].products)[j].price) || 0)

		}
		}
		setTotal(totalRev)
	}

	return (
		<div className="dashboard">
		<Sidebar />
		<div className="homeContainer">
			<Navbar />
			<div className="widgets">
			<Widget type="invoices" total={0} />
			<Widget type="contracts" total={test(quote)} />
			<Widget type="revenue" total={calculatePastRevenueGoodlinee(sortOnDateGoodlinee(sortEntriesIntoGoodlinee(quote)))} />
			<Widget type="clients" total={numberOfClients} />
			</div>
			<div className="charts">
			<FeaturedChart total={total} />
			<Chart />
			</div>
			<div className="listContainer">
			<TableComponent />
			</div>
		</div>
		</div>
	)
	}

export default Dashboard