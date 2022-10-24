import React, { ChangeEvent } from 'react'
import {
  Flex,
  Input
} from '@chakra-ui/react'
// types
import UsageValuesType from '../../types/UsageValuesType'
import MainPropTypes from '../../types/MainPropTypes'

interface InputType {
  label: string
  placeholder: string
  valueName: string
}

const HOUSING_INPUTS: InputType[] = [
  {
    label: 'Electricity',
    placeholder: 'Usage in kWh/mo',
    valueName: 'electricity'
  },
  {
    label: 'Natural Gas',
    placeholder: 'Usage in therm/mo',
    valueName: 'naturalGas'
  },
  {
    label: 'Fuel Oil',
    placeholder: 'Usage in US gallon/mo',
    valueName: 'fuelOil'
  },
  {
    label: 'Propane',
    placeholder: 'Usage in US gallon/mo',
    valueName: 'lfg'
  },
  {
    label: 'Waste',
    placeholder: 'Number of residents',
    valueName: 'waste'
  },
  {
    label: 'Water',
    placeholder: 'Usage in US gallon/mo',
    valueName: 'water'
  }
]

function Housing ({ usageValues, setUsageValues }: MainPropTypes): JSX.Element {
  return (
    <Flex w='100%' p='4' align="center" justify="center" direction="column">
      {
        HOUSING_INPUTS.map((subcategory: InputType): JSX.Element => (
          <React.Fragment key={subcategory.label}>
            {subcategory.label}
            <Input
              autoComplete='new-password'
              placeholder={subcategory.placeholder}
              value={usageValues[subcategory.valueName]}
              onChange={({ target }: ChangeEvent<HTMLInputElement>) => setUsageValues((prev: UsageValuesType): UsageValuesType => ({
                ...prev,
                [subcategory.valueName]: target.value
              }))}
            />
          </React.Fragment>
        ))
      }
    </Flex>
  )
}

export default Housing
