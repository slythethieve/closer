import "./chart.scss"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
  {
    name: 'Gennaio',
    goodlinee: 24000,
    euroMoebel: 39000,
    
  },
  {
    name: 'Febbraio',
    goodlinee: 32000,
    euroMoebel: 36000,
  },
  {
    name: 'Marzo',
    goodlinee: 40000,
    euroMoebel: 24000,

  },
  {
    name: 'Aprile',
    goodlinee: 50000,
    euroMoebel: 44000,
  },
  {
    name: 'Maggio',
    goodlinee: 40000,
    euroMoebel: 13000,
  },
  {
    name: 'Giugno',
    goodlinee: 23000,
    euroMoebel: 24000,
  }
];
function Chart({pastRevenue}) {
  return (
    <div className="chart">
      <div className="title">Fatturato ditte ultimi 6 mesi</div>
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
          <Area type="monotone" dataKey="euroMoebel" stroke="#000000" fillOpacity={1} fill="url(#colorEuro)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart