import styled from 'styled-components';



export const Container = styled.div`
  grid-area: UL;

  display: flex;
  flex-direction: column;

  padding: 3px 6px 0 16px;
  background-color: #2f3136;

  max-height: calc(100vh - 46px);
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
export const  Role = styled.span`
  margin-top: 20px;

  text-transform: upperCase;
  font-size: 12px;
  font-weigth: 500;
  color: #8a8c90;
`
export const  User = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  margin-top: 5px;
  padding: 5px;

  background: transparent;
  transition: background 0.2s;
  &:hover {
    background : rgba(255, 255, 255, 0.1)
  }

  >strong {
    margin-left: 13px;
    font-weigth: 500px;
    color: #fff;
    opacity: 0.7;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  >span {
    margin-left: 9px;
    background-color: #6e86d6;
    color: #fff;

    border-radius: 4px;
    padding: 4px 5px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 11px;
  }
`
export const  Avatar = styled.div`
  flex-shrink: 0;

  width: 32px;
  height: 32px;

  background-color: #36393f;
  border-radius: 50%;

  > img {
    flex-shrink: 0;

    width: 32px;
    height: 32px;
  
    background-color: #36393f;
    border-radius: 50%;
  }

  &.bot {
    background-color: #f9a839;
  }
`