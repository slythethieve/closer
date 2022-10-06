import './list.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Datatable from '../../components/datatable/Datatable'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react'
import { getQuotes } from '../../features/quote/quoteSlice';

function List() {

  const dispatch = useDispatch()

  const { quote, isLoading, isError, message } = useSelector((state) =>
		state.quotes)

	useEffect(() => {

		if (isError) {
		console.log(message)
		}

		dispatch(getQuotes())
		

	}, [quote.length, isError, message, dispatch])

  return (
    <div className='list'>
        <Sidebar />
        <div className='listContainer'>
            <Navbar />
            <Datatable quote={quote}/>
        </div>
    </div>
  )
}

export default List