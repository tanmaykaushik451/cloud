import React from 'react'

const HorizontalCard = (props) => {

    return (
        <div className="HorizontalCard">
            <div className="HorizontalCard__image">
                <img src={props?.coin?.item?.large} />
            </div>
            <div className="HorizontalCard__body">
            <div className="HorizontalCard__body__info">
                <h6>{props?.coin?.item?.name}</h6>
                <h6 className="text-grey">{props?.coin?.item?.symbol}</h6>
            </div>
            <div className="HorizontalCard__body__price">
                <small>Rank <small className="text-blue">{props?.coin?.item?.market_cap_rank}</small></small>
                <small><small className="text-yellow">{props?.coin?.item?.price_btc?.toFixed(7)}</small>&nbsp;BTC</small>
            </div>
            </div>
        </div>
    )
}

export default HorizontalCard
