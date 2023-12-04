import React, { Suspense } from "react"
import { Route } from "react-router"
import Loader from "../../reuseable/Loader/Loader"

const exchangesRoutes = ({match}) => {

    const Exchanges = React.lazy(()=>import("./Exchanges"))

    return (
        <Suspense fallback={<Loader/>}>
            <Route exact path={match.path} component={Exchanges}/>
        </Suspense>
    )
}

export default exchangesRoutes