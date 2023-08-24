import { CryptoCard } from '../../components/CryptoCard'
import { Container, Content } from './styles'

export function Home() {
  return (
    <Container>
      <header>
        <h1>
          Cripto<strong>.</strong>io
        </h1>
      </header>

      <Content>
        <div>
          <h2>Minhas Criptos</h2>
        </div>

        <CryptoCard />
      </Content>
    </Container>
  )
}
