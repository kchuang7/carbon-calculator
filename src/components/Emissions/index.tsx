import React from 'react'
import {
  Flex,
  Stack,
  Text
} from '@chakra-ui/react'
import EmissionsType from '../../types/EmissionsType'

interface PropTypes {
  emissions: EmissionsType
}

function Emissions ({ emissions }: PropTypes): JSX.Element {
  const totalEmissions = Object.values(emissions).reduce((a: number, c: number): number => a + c, 0)
  return (
    <Flex w='30%' h='80vh' p='4' pt='12' justify="center">
      <Stack spacing='1' textAlign='center'>
        <Text fontSize='5xl'>{Math.round(totalEmissions * 10) / 10}</Text>
        <Text>Estimated Emissions (kg CO<sub>2</sub>e/year)</Text>
      </Stack>
    </Flex>
  )
}

export default Emissions
