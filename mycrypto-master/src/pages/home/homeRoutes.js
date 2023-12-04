import React, { Suspense } from "react"
import { Route } from "react-router"
import Loader from "../../reuseable/Loader/Loader"

const homeRoutes = ({match}) => {

    const Home = React.lazy(()=>import("./Home"))
    const Coin = React.lazy(()=>import("./components/coin/Coin"))


    return (
        <Suspense fallback={<Loader/>}>
            <Route exact path={match.path} component={Home}/>
            <Route exact path={`${match.path}/:coinId`} component={Coin}/>
        </Suspense>
    )
}

export default homeRoutes