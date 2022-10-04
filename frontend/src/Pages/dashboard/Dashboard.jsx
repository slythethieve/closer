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

// Let's also do a recap: 
// - I can probably now sum up the number of quotes of one company and the other
// - I can probably quickly implement how many contracts there are (just check for the flag)
// - I need to tinker a bit to get the total price working again (again need to check for isOrder flag)
// - The last 2 functions which require a bit more thought are the ones using dates. 
// - In fact even tho I can implement the first 3 functions I need to implement the date filtering first
//   Also especially for the graph widgets I should really use the filter method instead of loops to ease the calculations. 
import { useSelector, useDispatch } from 'react-redux';
import { getQuotes } from '../../features/quote/quoteSlice';
import { useEffect, useState } from 'react'





function Dashboard() {

  // Maybe this is the best way to do solve this. 
  // I can probably put some parameters in this functions (maybe change it to const),
  // add some parameters for the start end date and finally parse the values to do 
  // comparisons with the mongo db date format. 
  function getFirstDayPreviousMonth() {
    const date = new Date();
    return new Date(date.getFullYear(), date.getMonth() - 1, 1);
  }

  //console.log("Man " +getFirstDayPreviousMonth());

  // Ok now let's try and get the last day of the previous month
  // Ok I did it as well. 
  function getLastDayPreviousMonth() {
    const date = new Date()
    return new Date(date.getFullYear(), date.getMonth(), 0)
  }





  const dispatch = useDispatch()

  const [goodlineeEntries, setGoodlineeEntries] = useState([])

  // Change this names to better ones.
  const [total, setTotal] = useState(0)
  const [numberOfClients, setNumberOfClients] = useState(0)

  const { quote, isLoading, isError, message } = useSelector((state) =>
    state.quotes)

  useEffect(() => {

    if (isError) {
      console.log(message)
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
      if (Date.parse(quote[i].date) > Date.parse(getFirstDayPreviousMonth())) {
        console.log(quote[i])
      }
    }
  }
  // I want to try and calculate the number of offers that belong to one company or the other

  // So I think I made it work. just need to change the length. if one offer has 3 products
  // it does not count as 3 offers but just one. D'uh. 
  const test = (quote) => {


    let k = 0
    for (let i = 0; i < quote.length; i++) {
      try {
        for (let j = 0; j < Object.values(quote[i].products.euroMoebelProducts.products).length; j++) {


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
          <Widget type="invoices" total={test(quote)} />
          <Widget type="contracts" total={numberOfClients} />
          <Widget type="revenue" total={total} />
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