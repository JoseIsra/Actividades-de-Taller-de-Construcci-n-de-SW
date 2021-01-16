import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import { useDataLayerValue } from '../DataLayer'

export const ProtectedLogin = ({ children, ...rest }) => {
    const [{ client }] = useDataLayerValue();
        return (
        <Route
            {...rest}
            render={({ location }) =>
                client ? (
                    <Redirect
                            to={{
                                pathname: "/mainpage",
                                state: { from: location }
                            }}
                        />
                ) : (
                        children
                    )
            }
        />
    )
}
