import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Widget from "../../components/widget/Widget"
import FeaturedChart from "../../components/featuredChart/FeaturedChart"
import Chart from "../../components/chart/Chart"
import TableComponent from "../../components/table/TableComponent"
import "./dashboard.scss"

// Ok so let's think about this for a hot minute. 
// I need a bunch of functions for fetching data from the db and show it 
// in my dashboard. 

import { useSelector, useDispatch } from 'react-redux';
import { getQuotes } from '../../features/quote/quoteSlice';
import { useEffect, useState } from 'react'





function Dashboard() {

  const dispatch = useDispatch()

  const [total, setTotal] = useState(0)
  const [numberOfClients, setNumberOfClients] = useState(0)

  const {quote, isLoading, isError, message} = useSelector((state) => 
        state.quotes)

  useEffect(() => {

    if(isError) {
      console.log('message')
    }
    

    dispatch(getQuotes())

    
    calculateTotal(quote)
    setNumberOfClients(quote.length)
    
  }, [quote.length, isError, message, dispatch])

  // Total revenue
  const calculateTotal = (quote) => {
    let totalRev = 0
    for (let i = 0; i < quote.length; i++) {
      for (let j= 0; j< Object.values(quote[i].products).length; j++) {
        
        totalRev = totalRev + Number(Object.values(quote[i].products)[j].price)
        
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
          <Widget type="invoices" total={numberOfClients}/>
          <Widget type="contracts" total = {numberOfClients}/>
          <Widget type="revenue" total ={total}/>
          <Widget type="clients" total ={numberOfClients}/>
        </div>
        <div className="charts">
          <FeaturedChart total= {total}/>
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