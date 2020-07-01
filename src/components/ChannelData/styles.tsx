import styled from 'styled-components';
import {AlternateEmail} from 'styled-icons/material'

export const Container = styled.div`
  grid-area: CD;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: #36393f;
` 
export const  Messages = styled.div`
  padding: 20px 0;

  display: flex;
  flex-direction: column;

  max-height: calc(100vh - 46px - 67px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgb(32,34,37);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color:  #2f3136;
  }
` 
export const  InputWrapper = styled.div`
  width: 100%;

  padding: 0 16px;
` 
export const  Input = styled.input`
  width: 100%;

  height: 44px;
  padding: 0 10px 0 57px;

  border-radius: 7px;
  color: #fff;
  background-color: rgb(64,68,75);

  position: relative;

  &::placeholder {
    color : #8a8c90;
  }

   ~ svg {
    position: relative;
    top: -50%;
    left: 14px;
    transition: 180ms  ease-in-out;
  }
` 
export const  InputIcon = styled(AlternateEmail)`
  width: 24px;
  height: 24px;
  color: #8a8c90;
` 