import styled from 'styled-components';
import {Hashtag} from 'styled-icons/heroicons-outline'
import {PersonAdd, Settings} from 'styled-icons/material'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
  padding: 5px 3px;
  border-radius: 5px;

  background-color: transparent;

  transition: background-color .2s;

  >div {
    display: flex;
    align-items: center;
  }

  >section span{
    margin-left: 5px;
    color: #828386;
  }

  &:hover, &.active {
    background-color: #393d42;

    >div span {
      color: #fff;
    }

    > div svg {
      display: inline;
    }
  
  }
 
  > div svg {
    display: none;
  }

`
export const  HashtagIcon = styled(Hashtag)`
  width: 20px;
  height: 20px;

  color: #828386;
`
export const  InviteIcon = styled(PersonAdd)`
  width: 16px;
  height: 16px;

  color: #74777a;  
  cursor: pointer;
  
  transition: color .2s;

  &:hover {
    color: #fff;
  }
`
export const  SettingsIcon = styled(Settings)`
  width: 16px;
  height: 16px;

  margin-left: 4px;

  color: #74777a;  
  cursor: pointer;

  transition: color .2s;

  &:hover {
    color: #fff;
  }
`