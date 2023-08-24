import { Container, Content, Footer, Header } from './styled'

import Chart from 'react-apexcharts'

const options = {
  yaxis: {
    show: false, // Oculta os valores do eixo Y (à esquerda)
  },
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: '#f2f2f2',
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    colors: ['#0BC5EA'],
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
  theme: {
    monochrome: {
      enabled: true,
      color: '#0BC5EA',
      shadeTo: 'light',
      shadeIntensity: 0.65,
    },
  },
}

const series = [
  {
    name: 'series1',
    data: [156, 138, 87, 45, 180, 101, 150],
  },
]

export function CryptoCard() {
  return (
    <Container>
      <Header>
        <img
          src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/512/Ethereum-ETH-icon.png"
          alt=""
        />

        <div className="information">
          <strong>ETH</strong>
          <p>Ethereum</p>
        </div>
      </Header>

      <Content>
        <strong>R$ 8,229,80</strong>
      </Content>
      <Footer>
        <Chart options={options} series={series} type="line" height={150} />
      </Footer>
    </Container>
  )
}
