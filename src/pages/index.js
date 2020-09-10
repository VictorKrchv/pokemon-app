import React from "react"
import { HomePage } from "./home/page"
import { Switch, Route } from "react-router-dom"
import { PokemonPage } from "./pokemon/page"

export const Routes = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Route path="/pokemon/:id">
                    <PokemonPage/>
                </Route>
            </Switch>
        </>
    )
}