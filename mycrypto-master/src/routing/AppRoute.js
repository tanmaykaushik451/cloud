import Layout from "../layout/Layout"

const { Route, Redirect } = require("react-router")

const AppRoute = ({ component: Component,protect,...rest }) => {
    return (
        <Route {...rest} render={
            props => (
                <>
                    {!protect ?
                    <Layout>
                        <Component {...props}/>
                    </Layout>
                        : <Redirect to="/auth" />}
                </>
            )
        }>

        </Route>
    )
}

export default AppRoute