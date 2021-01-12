import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import { useDataLayerValue } from '../DataLayer'

export const PrivateRoute = ({ children, ...rest }) => {
    const [{ client }] = useDataLayerValue();
        return (
        <Route
            {...rest}
            render={({ location }) =>
                client ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    )
}
