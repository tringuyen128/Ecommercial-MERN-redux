import styled from 'styled-components'

const Container = styled.div`
  height: 30px;
  background-color: blue;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
`

const Annoucement = () => {
  return <Container>Super Sales! Free Shipping On Orders Over $50</Container>
}

export default Annoucement
