import styled from 'styled-components';
import {Mic, Headset, Settings} from 'styled-icons/material'

export const Container = styled.div`
  grid-area: UI;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;
  background-color:  #292b2f;

  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 0 0;
`

 export const Profile = styled.div`
   display: flex;
   align-items: center
 `
 export const  Avatar = styled.div`
   width: 32px;
   height: 32px;
   border-radius: 50%;

   background-color: #8a8c90;

   > img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
 
    background-color: #8a8c90;
   } 
 `
 export const  UserData = styled.div`
   margin-left: 8px;
   display: flex;
   flex-direction: column;

   > strong {
     color: #fff;
     display: block;
     font-size: 13px;
   }

   > span {
    color: #8a8c90;
    display: block;
    font-size: 13px;
  }
 `
 export const  Icons = styled.div`
   display: flex;
   align-items: center;

   > svg:not(:first-child){
     margin-left: 7px;
   }
 `
 export const  MicIcon = styled(Mic)`
   width: 20px;
   heigth: 20px;
   color: #fff;
   opacity: .7;

   transition: opacity .2s;

   &:hover {
     opacity: 1;
   }

   cursor: pointer;
 `
 export const  HeadphoneIcon = styled(Headset)`
   width: 20px;
   heigth: 20px;
   color: #fff;
   opacity: .7;

   transition: opacity .2s;

   &:hover {
     opacity: 1;
   }

   cursor: pointer;
 `
 export const  SettingsIcon = styled(Settings)`
   width: 20px;
   heigth: 20px;
   color: #fff;
   opacity: .7;

   transition: opacity .2s;

   &:hover {
     opacity: 1;
   }

   cursor: pointer;
 `
