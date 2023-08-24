import { styled } from 'styled-components'

export const Container = styled.main`
  margin: 32px 148px 159px 148px;

  header {
    display: flex;
    justify-content: flex-end;

    h1 {
      font-size: 1.625rem;

      margin-bottom: 82px;

      strong {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`

export const Content = styled.div`
  div {
    width: 205px;
    position: relative;

    h2 {
      font-size: 1.625rem;

      &:after {
        content: '';
        height: 3px;
        border-radius: 3px 3px 0 0;
        width: 100%;
        position: absolute;
        bottom: -1px;
        left: 0;
        background-color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`
