import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SummarizeIcon from '@mui/icons-material/Summarize';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PeopleIcon from '@mui/icons-material/People';



function Widget({type, total}) {
    let data;
    const amount = 100
    const diff = 20
    
    switch(type) {
        case "invoices":
            data = {
                title: "NUMERO OFFERTE MESE CORRENTE",
                isMoney: false,
                link: "Vedi tutte le offerte",
                icon: (
                    <SummarizeIcon className="icon" />
                ),
                amount: total[0].length,
                
            }
            break;
        case "contracts":
            data = {
                title: "NUMERO CONTRATTI MESE CORRENTE",
                isMoney: false,
                link: "Vedi tutte i contratti",
                icon: (
                    <RequestPageIcon className="icon" />
                ),
                amount: total[0]
            }
            break;
        case "revenue":
            data = {
                title: "FATTURATO MESE CORRENTE",
                isMoney: true,
                link: "Vedi lo sviluppo del fatturato",
                icon: (
                    <PointOfSaleIcon className="icon" />
                ),
                amount: total[0]
            }
            break;
        case "clients":
            data = {
                title: "NUMERO CLIENTI",
                isMoney: false,
                link: "Vedi tutte i clienti",
                icon: (
                    <PeopleIcon className="icon" />
                ),
                amount: total
            }
            break;
        default: 
            break;
    }
  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "CHF"} {data.amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget