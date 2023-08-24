import { useEffect } from 'react'
import { io } from 'socket.io-client'
import { Container, Content, Footer, Header } from './styled'

import Chart from 'react-apexcharts'

const options = {
  yaxis: {
    show: false,
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
    colors: ['#E25858'],
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
  theme: {
    monochrome: {
      enabled: true,
      color: '#E25858',
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
const socket = io('http://18.217.111.0:3000')

export function CryptoCard() {
  useEffect(() => {
    socket.on('charts', (message) => {
      console.log(message)
    })
  }, [])

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

        <u> -2.87%</u>
      </Content>
      <Footer>
        <Chart options={options} series={series} type="area" height={140} />
      </Footer>
    </Container>
  )
}
