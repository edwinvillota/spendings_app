import styled from 'styled-components'

export const List = styled.ul`
    display: grid;
    width: 100%;
    row-gap: ${({theme}) => theme.sizes.m };
`

export const ListItem = styled.li`
    display: flex;
    width: 100%;
`