import styled from 'styled-components';
import {Add} from 'styled-icons/material'

export const Container = styled.div`
  grid-area: CL;

  display: flex;
  flex-direction: column;

  padding: 24px 9.5px 0 16px;
  background-color: #2f3136;
`
export const  Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 6px;

  > span  {
    text-transform: upperCase;
    font-size: 12px;
    font=weight: 500;
    color: #8a8c90;
  }
`;

export const AddCategoryIcon = styled(Add)`
  width: 21px;
  height: 21px;
  color:  #74777;

  cursor: pointer;
`;
