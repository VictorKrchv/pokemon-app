import React from 'react'
import { H3 } from '../../../ui'
import styled from 'styled-components'
import { StatItem } from '../atoms/stat-item'

export const PokemonStatsList = ({stats}) => {
    return (
        <PokemonStatsListBox>
            <H3 margin="10px 0 0">Stats</H3>
            <ListStats>
                {stats && stats.map((stat, i) => {
                    return <StatItem key={i} stat={stat} />
                })}
            </ListStats>
        </PokemonStatsListBox>
    )
}

const PokemonStatsListBox = styled.div`

`

const ListStats = styled.ul`
    list-style: none;
` 