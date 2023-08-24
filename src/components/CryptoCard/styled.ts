import { styled } from 'styled-components'

export const Container = styled.div`
  width: 250px;
  height: 285px;

  background-color: ${({ theme }) => theme.colors.gray_600};
  border-radius: 12px;

  margin-top: 70px;
`

export const Content = styled.div`
  padding: 6px 16px 0 16px;
  font-size: 1.5rem;

  u {
    font-size: 1.25rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.alert};
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;

  padding: 16px;

  .information {
    margin-left: 8px;
    padding: 12px 0;

    p {
      line-height: 100%;
    }
  }

  img {
    width: 40px;
    height: 40px;
  }
`

export const Footer = styled.div`
  justify-content: flex-end;
  margin-top: -1.5rem;
`
