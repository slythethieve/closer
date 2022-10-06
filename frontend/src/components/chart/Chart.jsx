import "./chart.scss"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



function Chart({revenue}) {

  const date = new Date()

  let index = date.getMonth() - 6
  const months = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"]
  let data = [
    {
      name: months[index],
      value: revenue[1]
    },
    {
      name: months[index + 1],
      value: revenue[2]
    },
    {
      name: months[index + 2],
      value: revenue[3]
    },
    {
      name: months[index + 3],
      value: revenue[4]
    },
    {
      name: months[index + 4],
      value: revenue[5]
    },
    {
      name: months[index + 5],
      value: revenue[6]
    },
  ]
  
  return (
    <div className="chart">
      <div className="title">Fatturato ultimi 6 mesi</div>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart width={730} height={250} data={data}
          margin={{ top: 30, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorGood" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FFA246" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#FFC77F" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorEuro" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2D3CFF" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#B4BAFF" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis label={{value:"CHF", position:"top", dy: -10, dx:10}}  />
          <CartesianGrid strokeDasharray="3 3" className="chartsGrid"/>
          <Tooltip />
          <Area type="monotone" dataKey="goodlinee" stroke="#8884d8" fillOpacity={1} fill="url(#colorGood)" />
          <Area type="monotone" dataKey="value" stroke="#000000" fillOpacity={1} fill="url(#colorEuro)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart