import React from 'react'

import {Container, Role, User, Avatar} from './styles'
import photo from '../../assets/foto.jpg'
import discorduser from '../../assets/discorduser.png'
import bot from '../../assets/botright.png'

interface UserProps {
  nickname: string;
  avatar: string;
  isBot ?: boolean;
}

const UserRow : React.FC<UserProps> = ({nickname, isBot, avatar}) => {
  return (
    <User>
      <Avatar className = {isBot? 'bot' : ''}>
        <img src = {avatar} alt = "Avatar"/>
      </Avatar>
      <strong>{nickname}</strong>
      {/*<img src = {avatar} alt = "Avatar"/>*/}
      {isBot && <span>Bot</span>}
    </User>
  )
}

const UserList: React.FC = () => {
  return (
    <Container>
     <Role>Disponível 1</Role>
     <UserRow nickname = "Maria Fernanda" avatar = {photo}/>

     <Role>Offline 18</Role>
     <UserRow nickname = "MariaBot" isBot avatar = {bot}/>
     <UserRow nickname = "Ana Clara" avatar = {discorduser} />
     <UserRow nickname = "Renato" avatar = {discorduser} />
     <UserRow nickname = "Bruno" avatar = {discorduser}/>
     <UserRow nickname = "Jorge Ferreira" avatar = {discorduser} />
     <UserRow nickname = "Carolina Santos" avatar = {discorduser}/>
     <UserRow nickname = "Elisa" avatar = {discorduser} />
     <UserRow nickname = "Joice Hoffman" avatar = {discorduser} />
     <UserRow nickname = "Felipe Deschamps" avatar = {discorduser} />
     <UserRow nickname = "Dani Leão" avatar = {discorduser}/>
     <UserRow nickname = "Tiago Souza" avatar = {discorduser} />
     <UserRow nickname = "Isadora" avatar = {discorduser}/>
    </Container>
  )
}

export default UserList