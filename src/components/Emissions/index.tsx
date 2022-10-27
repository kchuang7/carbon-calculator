import React from 'react'
import {
  Flex,
  Stack,
  Text
} from '@chakra-ui/react'
// components
import Chart from './Chart'
// types
import EmissionsPropTypes from '../../types/EmissionsPropTypes'

/**
 * Section containing emissions results.
 *
 * @component
 * @param {object} emissions Emissions per subcategory.
 * @return {React.ReactElement} Total emissions and emissions breakdown bar chart.
 */
function Emissions ({ emissions }: EmissionsPropTypes): JSX.Element {
  const totalEmissions = Object.values(emissions).reduce((a: number, c: number): number => a + c, 0)
  return (
    <Flex w='30%' h='80vh' justify="center">
      <Stack w='100%' spacing='1' textAlign='center'>
        <Text data-cy='total-emissions' fontSize='5xl'>{Math.round(totalEmissions * 10) / 10}</Text>
        <Text data-cy='total-emissions-label'>Total Emissions (kg CO<sub>2</sub>e/year)</Text>
        <Chart emissions={emissions} />
      </Stack>
    </Flex>
  )
}

export default Emissions
