import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router'
import { UserContext } from '../../App'

function PrivateRoute({ children, ...rest }) {
    const [user, setUser] = useContext(UserContext);
    console.log(user)
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    )
}

export default PrivateRoute;
