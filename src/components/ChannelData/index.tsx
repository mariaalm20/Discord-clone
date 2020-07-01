import React, {useRef, useEffect} from 'react'

import {Container, Messages, InputWrapper, Input, InputIcon} from './styles'
import ChannelMessage, {Mention} from '../ChannelMessage'
import image from '../../assets/foto.jpg'
import bot from '../../assets/botright.png'

const ChannelData: React.FC = () => {
  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const div = messageRef.current

    if(div) {
       div.scrollTop = div.scrollHeight
    }
  }, [messageRef])

  return (
    <Container>
      <Messages ref = {messageRef}>
        {Array.from(Array(20).keys()).map((id) => (
            <ChannelMessage 
            avatar = {image}
            key = {id}
            author= "Maria Fernanda"
            date="20/02/2002"
            content = "Seja bem-vindo(a) ao meu layout do discord"
           />
        ))}
        

       {<ChannelMessage 
         avatar = {bot}
         author= "MariaBot"
         date="20/02/2002"
         content = {
           <>
           <Mention>@Maria Fernanda</Mention>, me carrega no LOL e CS de novo, por favor ?
           </>}
           hasMention
           isBot
         />}
      </Messages>

      <InputWrapper>
        <Input type = "text" placeholder="Conversar em chat-livre ">
        </Input>
        <InputIcon />
      </InputWrapper>
    </Container>
  )
}

export default ChannelData