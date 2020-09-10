import React from 'react'
import { MainTemplate, Container, CommonTemplate } from "../../../ui"
import { Header } from "../../header";

export const PokemonCommonPage = ({children}) => {
    return (
        <MainTemplate header={<Header/>}>
            <Container>
                <CommonTemplate>
                    {children}
                </CommonTemplate>
            </Container>
        </MainTemplate>
    )
}