import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://images.unsplash.com/photo-1611428813653-aa606c998586?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2lkcyUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60')
      center;

  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: '85%', height: '75%' })}
`
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  display: flex;
  justify-content: center;
  ${mobile({ fontSize: '20px' })}
`
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`
const Agreement = styled.span`
  margin: 20px 0px;
  font-size: 12px;
`
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 10px;
  font-weight: 600;
  background-color: lightblue;
  cursor: pointer;

  &:hover {
    background-color: blue;
  }
`

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="email" />
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
