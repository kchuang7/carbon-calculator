import React from 'react'
import {
  Box,
  useColorModeValue
} from '@chakra-ui/react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
// types
import EmissionsPropTypes from '../../types/EmissionsPropTypes'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const labels: string[] = ['Electricity', 'Natural Gas', 'Fuel Oil', 'Propane', 'Waste', 'Water', 'Vehicle', 'Bus', 'Metro', 'Taxi', 'Rail', 'Flying']

function Emissions ({ emissions }: EmissionsPropTypes): JSX.Element {
  const color: string = useColorModeValue('#333', '#ccc')
  const barColor: string = useColorModeValue('#ff6384', '#ff7171')
  const scaleOptions: { ticks: { color: string }, grid: { display: boolean } } = {
    ticks: { color },
    grid: { display: false }
  }

  return (
    <Box h='100%' pt='8'>
      <Bar
        options={{
          indexAxis: 'y' as const,
          elements: { bar: { borderRadius: 4 } },
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: scaleOptions,
            x: scaleOptions
          },
          plugins: {
            legend: { display: false },
            tooltip: {
              mode: 'y',
              intersect: false
            }
          }
        }}
        data={{
          labels,
          datasets: [
            {
              label: 'Emissions (kg CO2e/year)',
              data: Object.keys(emissions).map((key: string): number => emissions[key]),
              backgroundColor: barColor
            }
          ]
        }}
      />
    </Box>
  )
}

export default Emissions
