import React from 'react'

import {Button} from './styles'
import image from '../../assets/foto.jpg'
import logo from '../../assets/logoo.png'

export interface Props {
  selected?: boolean;
  isHome?:boolean;
  hasNotification?:boolean;
  mentions?:number;
}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotification,
  mentions
}) => {
  return(
    <Button
     isHome = {isHome}
     hasNotification = {hasNotification}
     mentions = {mentions}
     className = {selected ? 'active' : ''}
    >
      {isHome ? ( <img src = {image} alt = 'Profile'/>) 
        : (<img src = {logo} alt = "LogoDiscord"/>)}
    </Button>
  )
} 

export default ServerButton