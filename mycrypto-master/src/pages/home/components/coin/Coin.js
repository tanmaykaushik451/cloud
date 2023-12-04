import React from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router'

const Coin = () => {

    // const { coinData } = props

    const {coinId} = useParams()

    return (
        <div className="Coin">
            {/* <h4 className="bold">{coinData?.name} Price ({coinData?.symbol?.toUpperCase()})</h4> */}
            {/* <div className="d-flex flex-column mt-3 h-100" > */}
                {/* <div className="d-flex align-items-center mb-3">
                    <h1 className="text-grey mb-0 me-1">${coinData?.current_price}</h1><small className={coinData?.price_change_percentage_24h > 0 ? 'green-badge' : 'red-badge'}>{coinData?.price_change_percentage_24h > 0 ? <i className="fa fa-caret-up" aria-hidden="true"></i> : <i className="fa fa-caret-down" aria-hidden="true"></i>}{String(coinData?.price_change_percentage_24h?.toFixed(2))}%</small>
                </div> */}
                <div style={{height:"100%"}}>
                    <div class="tradingview-widget-container" style={{height:"100%"}}>
                        <div id="tradingview_bf4c4" style={{height:"100%"}}></div>
                        <Helmet>
                            <script type="text/javascript">
                                {`
                      new TradingView.widget(
                        {
                        "autosize":true,
                        "symbol": "${coinId?.toUpperCase()}USD",
                        "interval": "D",
  "timezone": "Asia/Kolkata",
  "theme": "light",
  "style": "1",
  "locale": "in",
  "toolbar_bg": "#f1f3f6",
  "enable_publishing": false,
  "withdateranges": true,
  "hide_side_toolbar": false,
  "allow_symbol_change": true,
  "details": true,
  "hotlist": true,
  "calendar": true,
  "container_id": "tradingview_bf4c4"
                      }
                        );
                      
                    `}
                            </script>
                        </Helmet>

                    </div>
                </div>
            </div>
        // </div>
    )
}

export default Coin
