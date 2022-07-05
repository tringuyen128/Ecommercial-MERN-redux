import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Annoucement from '../components/Annoucement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { mobile } from '../responsive'

const Container = styled.div``
const Wrapper = styled.div`
  padding: 20px;
`
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  ${mobile({ flexDirection: 'column', padding: '10px 0px' })}
`
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === 'filled' && 'none'};
  background-color: ${(props) =>
    props.type === 'filled' ? 'black' : 'transparent'};
  color: ${(props) => props.type === 'filled' && 'white'};
  ${mobile({ padding: '20px' })}
`

const TopTexts = styled.div`
  ${mobile({ flexDirection: 'column', padding: '10px 0px' })}
`
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column', padding: '10px 0px' })}
`
const Info = styled.div`
  flex: 3;
`
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`
const ProductDetail = styled.div`
  display: flex;
  flex: 2;
`
const Image = styled.img`
  width: 200px;
`
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`
const ProductSize = styled.span``
const PriceDetail = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({ flexDirection: 'column', padding: '10px 0px' })}
`

const Hr = styled.hr`
  background: #eee;
  border: none;
  height: 1px;
`

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`

const SummaryTitle = styled.h1`
  font-weight: 200;
`

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === 'total' && '500'};
  font-size: ${(props) => props.type === 'total' && '20px'};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Annoucement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Wishlit (0)</TopText>
          </TopTexts>
          <TopButton type="filled"> CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://i.pinimg.com/564x/18/ea/e7/18eae7365a942e44513ef4042543f1b9--cute-summer-outfits-for-tweens-girls-summer-outfits-for-kids-girls-justice.jpg" />
                <Details>
                  <ProductName>
                    <b>Product: </b> Sport Outfit
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>123377664920
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductColor color="red" />

                  <ProductSize>
                    <b>Size: </b>5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_PR2UKEwLpwjXUHV57anu8r2qr0d2GNm9gf3ShrlrO7nQV2WFCyFic41lNB81u4qy-8A&usqp=CAU" />
                <Details>
                  <ProductName>
                    <b>Product: </b> Sport Outfit
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>33928546010430
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductColor color="red" />

                  <ProductSize>
                    <b>Size: </b>5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 25</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 55</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 55 </SummaryItemPrice>
            </SummaryItem>
            <SummaryButton>CHECK OUT NOW</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default Cart
