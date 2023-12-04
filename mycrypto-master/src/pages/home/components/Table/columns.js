import Cell from "./Cell/Cell"
import ColoredCell from "./ColoredCell/ColoredCell"
import NameCell from "./NameCell/NameCell"

export const COLUMNS =[
    {
        Header : '#',
        accessor :'market_cap_rank',
        Cell: ({value})=>{
            return <Cell className="" currency="" value={value}/>
         }
    },
    {
        Header : 'Name',
        accessor:'name',
        Cell: (props)=>{
            return <NameCell value={props.value} coinid={props.row.original.symbol}/>
        }
    },
    {
        Header : 'Symbol',
        accessor:'symbol',
        Cell: ({value})=>{
            return <Cell className="text-uppercase text-grey" currency="" value={value}/>
        }
    },
    {
        Header : 'Price',
        accessor:'current_price',
        Cell: ({value})=>{
           return <Cell className="" currency="$" value={value}/>
        }
    },
    {
        Header : '24hr %',
        accessor:'market_cap_change_percentage_24h',
        Cell: ({value}) => {
            return <ColoredCell value={value} currency={''}/>
        },
    },
    {
        Header : 'Market Cap',
        accessor:'market_cap',
        Cell: ({value})=>{
            return <Cell className="" currency="$" value={value}/>
         }
    },
    {
        Header : 'Total volume',
        accessor:'total_volume',
        Cell: ({value}) => {
            return <Cell className="" currency="" value={value}/>
        },
    },
    {
        Header : 'Total Supply',
        accessor:'total_supply',
        Cell: ({value})=>{
            return <Cell className="text-purple" currency="" value={value}/>
        }
    },
]