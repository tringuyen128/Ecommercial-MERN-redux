import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Annoucement from '../components/Annoucement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

const Container = styled.div``
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`
const ImgContainer = styled.div`
  flex: 1;
`

const Image = styled.img`
  width: 100%;
  height: 60vh;
  object-fit: cover;
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`

const Title = styled.h1`
  font-weight: 200;
`

const Desc = styled.p`
  margin: 20px 0px;
`

const Price = styled.span`
  font-weight: 100;
  font-size: 30px;
`

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`
const Filter = styled.div`
  display: flex;
  align-item: center;
`
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`
const FilterSizeOption = styled.option``
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid blue;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`
const Button = styled.button`
  margin-left: 50px;
  padding: 10px;
  border: 2px solid blue;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: lightgray;
  }
`

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Annoucement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://media.istockphoto.com/photos/beautiful-little-girl-model-wearing-a-leopard-dress-and-sunglass-picture-id506317910?b=1&k=20&m=506317910&s=170667a&w=0&h=w3JkCXALVo8rSM0KKz_gObxfiTbTMwNr3xXVDlbj5sY=" />
        </ImgContainer>
        <InfoContainer>
          <Title>Solid Dress</Title>
          <Desc>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, ad
            illum a expedita nihil vero. Mollitia perferendis, soluta aut
            ratione velit ullam commodi veritatis placeat delectus. Iusto
            recusandae temporibus culpa!
          </Desc>
          <Price>$25</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>2</FilterSizeOption>
                <FilterSizeOption>3</FilterSizeOption>
                <FilterSizeOption>4</FilterSizeOption>
                <FilterSizeOption>5</FilterSizeOption>
                <FilterSizeOption>6</FilterSizeOption>
                <FilterSizeOption>7</FilterSizeOption>3
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Product
