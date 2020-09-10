import styled from "styled-components";

export const PageNumber = styled.a`

  height: 100%;
  background-color: ${props => props.active ? '#E3E3E3' : "#313131"} ;
  color: ${props => props.active ? '000' : "#EBEBEB"} ;;
  display: inline-block;
  cursor: pointer;
  padding: 2px 15px;
  transition: all 0.3s ease;
  user-select: none;

  &:hover{
    background-color: #E3E3E3;
    color: #000;
  }
`;
