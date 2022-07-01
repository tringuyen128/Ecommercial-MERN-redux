import {
  Facebook,
  Instagram,
  MailOutlined,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
const Logo = styled.h1``
const Desc = styled.p`
  margin: 20px 0px;
`
const SocialContainer = styled.div`
  display: flex;
`
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
`

const Title = styled.h3`
  margin-bottom: 30px;
`

const List = styled.ul`
  amargin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`

const Right = styled.div`
  flex: 1;
  padding: 20px;
`

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`

const Payment = styled.img`
  width: 50%;
  margin-left: -10px;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>MAMAZON</Logo>
        <Desc>
          Looking for cool and comfy styles for your kiddos? MAMAZON has fresh
          and fun kids’ clothing that your littles will love, from jeans and
          pull-on shorts to graphic t-shirts and dresses to swimsuits and
          sandals. We’ve got all their favorites, and all the fun, in one place.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E50010">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Boys Fashion</ListItem>
          <ListItem>Girls Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: '10px' }} />
          999 Silicon Valley, San Jose CA 95127
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: '10px' }} />1 (800) 999-9999
        </ContactItem>
        <ContactItem>
          <MailOutlined style={{ marginRight: '10px' }} />
          MAMAZON.contact@Gmail.com
        </ContactItem>
        <Payment src="https://faq-au.uniqlo.com/servlet/rtaImage?eid=ka37F0000000lJ5&feoid=00N7F00000Ev9pK&refid=0EM7F0000009Tky" />
      </Right>
    </Container>
  )
}

export default Footer
