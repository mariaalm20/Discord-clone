import React from 'react'

import {Container, Profile, Avatar, UserData, Icons, MicIcon, HeadphoneIcon, SettingsIcon} from './styles'
import image from '../../assets/foto.jpg'


const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar>
          <img  src = {image} alt = "ProfilePhoto"/>
        </Avatar>
        <UserData>
          <strong>Maria Fernanda</strong>
          <span>#mafe</span>
        </UserData>
      </Profile>
     

      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  )
}

export default UserInfo