import React from 'react'
import styled from 'styled-components'
import { mobile, tablet } from '../responsive'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://images.unsplash.com/photo-1590480598135-3be152c87913?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2lkcyUyMGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60')
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: '75%' })}
  ${tablet({ width: '75%', height: '30%' })}
`
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  display: flex;
  justify-content: center;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`
const Input = styled.input`
  flex: 1;
  min-width: 30%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`

const Button = styled.button`
  width: 30%;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  padding: 10px;
  font-weight: 600;
  background-color: lightblue;
  cursor: pointer;

  &:hover {
    background-color: blue;
  }
`

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="User Name" />
          <Input placeholder="Password" />
          <Button>LOGIN</Button>
          <Link>FORGOT YOUR PASSWORD ?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
