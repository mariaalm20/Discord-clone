import styled from 'styled-components';


export const Container = styled.div`
  display: flex;
  align-items: center;

  padding: 4px 16px;
  margin-right: 4px;

  background-color: transparent;

  &.mention{
    background-color: #413f3f;
    border-left: 2px solid #f9a839;
    padding-lefth: 14px;
  }

  & + div {
    margin-top: 13px;
  }
`;
export const  Avatar = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #2f3136;

  > img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: #2f3136;
  }

  &.bot {
    background-color: #f9a839;
  };
`
export const  Message = styled.div`
  min-height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 17px;
`
export const  Header = styled.div`
  display: flex;
  align-items: content;

  > strong {
    color: #fff;
    font-size: 16px;
  } 

  >span {
    margin-left: 6px;
    background-color: #6e86d6;
    color: #fff;

    border-radius: 4px;
    padding: 4px 5px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 11px;
  }

  > time {
    margin-left: 6px;
    color: #8a8c90;
    font-size: 13px;
  }
`
export const  Content = styled.div`
  text-align: left;
  font-size: 16px;
  color: #fff;
`
export const  Mention = styled.span`
  color: #5d80d6;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`