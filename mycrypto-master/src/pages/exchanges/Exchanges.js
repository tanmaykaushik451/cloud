import React, { useEffect } from 'react'
import { useState } from 'react'
import ExchangeCard from './components/ExchangeCard/ExchangeCard'
import {getExchanges} from "./api"
import skate from "../../assets/skate.gif"

const Exchanges = () => {

    const [exchanges,setExchanges] = useState([])
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        getExchanges().then((res)=>{
            setExchanges(res.data.slice(0,10))
            setLoading(false)
        }).catch((e)=>{
            setLoading(false)
            console.log("cannto fetch excahnges")
        })
    },[])

    return (
        <div className="Exchanges">
            <div className="d-flex justify-content-center">
                <h3 className="bold mt-3">Top 10 Exchanges</h3>
            </div>
            {loading ? <div className="d-flex justify-content-center">
                <img src={skate} alt="loading..."/>
                </div> : <div className="row">
                {exchanges?.map((a)=>{
                    return(
                        <div className="col-md-4 col-sm-12">
                            <ExchangeCard exchange={a}/>
                        </div>
                    )
                })}
            </div>}
        </div>
    )
}

export default Exchanges
