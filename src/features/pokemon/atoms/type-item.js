import React from 'react'
import styled from 'styled-components'
import { Col } from '../../../ui'
import { ucFirst } from '../../../lib/text-editors'

export const TypeItem = ({value}) => {
    return (
        <TypeItemBox>
            {ucFirst(value)}
        </TypeItemBox>
    )
}

const TypeItemBox = styled(Col)`
    background-color: rgba(155, 204, 80);
    padding: 5px 20px;
    color: white;
    font-weight: 600;
`