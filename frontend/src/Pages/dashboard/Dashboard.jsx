import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Widget from "../../components/widget/Widget"
import FeaturedChart from "../../components/featuredChart/FeaturedChart"
import Chart from "../../components/chart/Chart"
import TableComponent from "../../components/table/TableComponent"
import "./dashboard.scss"
import axios from 'axios'

// Ok so let's think about this for a hot minute. 
// I need a bunch of functions for fetching data from the db and show it 
// in my dashboard. 

import { useSelector, useDispatch } from 'react-redux';
import { getQuotes } from '../../features/quote/quoteSlice';
import { useEffect, useState } from 'react'





function Dashboard() {


  
  
  // Date stuff
  
  let date = new Date()
  
  console.log("Before " + Date.parse(date))
  let year = date.getFullYear()
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  // + 1 because it starts at 0. That is dumb for sure. 
  let currentMonth = date.getMonth() + 1,
      previousMonth_1 = date.getMonth()
  // OK OK so with this I can get to a month before my current date. 
  // How can I get to the start of the month tho?
  let testsuperDate = date.setMonth(date.getMonth()-1)
  console.log("after " + testsuperDate)
  

  


  

  const dispatch = useDispatch()

  const [goodlineeEntries, setGoodlineeEntries] = useState([])

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
    //test(quote)
    testDate(quote)
    
  }, [quote.length, isError, message, dispatch])



  const testDate = (quote) => {
    for (let i = 0; i < quote.length; i++) {
      //console.log(quote[i].date)
      //console.log(Date.parse(quote[i].date))
      if (Date.parse(quote[i].date) < date) {
        //console.log(quote[i])
      } 
    }
   }
  // I want to try and calculate the number of offers that belong to one company or the other

  // So I think I made it work
  const test = (quote) => {
    

    let k = 0
    for (let i = 0; i < quote.length; i++) {
      try {
        for (let j= 0; j< Object.values(quote[i].products.euroMoebelProducts.products).length; j++) {
        
        
        //console.log(Object.values(quote[i].products.goodlineeProducts.products))
        //console.log(k)
        k++
        
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
      for (let j= 0; j< Object.values(quote[i].products).length; j++) {
        
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
          <Widget type="invoices" total={test(quote)}/>
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