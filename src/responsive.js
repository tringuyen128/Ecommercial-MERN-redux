import { css } from 'styled-components'

export const mobile = (props) => {
  return css`
    @media screen and (max-width: 600px) {
      ${props}
    }
  `
}

export const tablet = (props) => {
  return css`
    @media screen and (max-width: 1024px) {
      ${props}
    }
  `
}

