import styled from 'styled-components';
import {ExpandMore} from 'styled-icons/material'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 11px 0 16px;

  background-color: #2f3136;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
  z-index: 2;

`
export const  Title = styled.h1`
  font-size: 16px;
  font-weigth: bold;

  color: #fff;
`
export const  Expandicon = styled(ExpandMore)`
   width: 28px;
   heig: 20px;

   color: #fff;
   cursor: pointer;
`