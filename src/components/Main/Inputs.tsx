import React, { useState, ChangeEvent } from 'react'
import axios from 'axios'
import {
  Box,
  Flex,
  Stack,
  FormLabel,
  Text,
  Input,
  Checkbox
} from '@chakra-ui/react'
// types
import GetEmissionDataType from '../../types/GetEmissionDataType'
import CheckboxStateTypes from '../../types/CheckboxStatesType'
import UsageValuesType from '../../types/UsageValuesType'
import EmissionsType from '../../types/EmissionsType'
import MainPropTypes from '../../types/MainPropTypes'

interface InputType {
  label: string
  valueName: string
}

interface PropTypes extends MainPropTypes {
  category: string
}

const INPUTS: { [key: string ]: InputType[] } = {
  housing: [
    { label: 'Electricity (kWh/mo)', valueName: 'electricity' },
    { label: 'Natural Gas (therm/mo)', valueName: 'naturalGas' },
    { label: 'Fuel Oil (US gallon/mo)', valueName: 'fuelOil' },
    { label: 'Propane (US gallon/mo)', valueName: 'lfg' },
    { label: 'Waste (number of residents)', valueName: 'waste' },
    { label: 'Water (US gallon/mo)', valueName: 'water' }
  ],
  travel: [
    { label: 'Vehicle (miles/year)', valueName: 'vehicle' },
    { label: 'Bus (miles/year)', valueName: 'bus' },
    { label: 'Metro (miles/year)', valueName: 'metro' },
    { label: 'Taxi (miles/year)', valueName: 'taxi' },
    { label: 'Rail (miles/year)', valueName: 'rail' },
    { label: 'Flying (miles/year)', valueName: 'flying' }
  ]
}

const OFFSET_MAP: { [key: string]: string } = {
  ledLighting: 'electricity',
  compost: 'waste'
}

/**
 * Inputs components letting user input categorical emissions activity and toggle offset behaviors.
 *
 * @component
 * @param {string} category Selected tab corresponding to emissions category.
 * @param {object} usageValues Usage value strings representing input values.
 * @param {Function} setUsageValues Update usage value inputs.
 * @param {object} emissions Emissions per subcategory.
 * @param {Function} setEmissions Update emissions per subcategory.
 * @return {React.ReactElement} Usage inputs and offset checkboxes.
 */
function Inputs ({ category, usageValues, setUsageValues, emissions, setEmissions }: PropTypes): JSX.Element {
  const [checkboxStates, setCheckboxStates] = useState<CheckboxStateTypes>({
    ledLighting: false,
    compost: false
  })

  const handleCheckbox = ({ currentTarget }: ChangeEvent<HTMLInputElement>, offsetName: string): void => {
    const checkedValue = currentTarget.checked
    axios.get(`/offset/${offsetName}?currentEmissions=${emissions[OFFSET_MAP[offsetName]]}&isReverse=${String(!currentTarget.checked)}`)
      .then(({ data }: GetEmissionDataType): void => {
        // update emissions value with offset
        setEmissions((prev: EmissionsType): EmissionsType => ({
          ...prev,
          [OFFSET_MAP[offsetName]]: data.emissionsPerYear
        }))
        // update checked checkbox
        setCheckboxStates((prev: CheckboxStateTypes): CheckboxStateTypes => ({
          ...prev,
          [offsetName]: checkedValue
        }))
      })
      .catch(console.error)
  }

  const handleChange = ({ currentTarget }: ChangeEvent<HTMLInputElement>, valueName: string): void => {
    const value: string = currentTarget.value
    // only make web request if parsed input is number
    if (!isNaN(Number(value))) {
      axios.get(`/emissions/${category}/${valueName}?usage=${value}`)
        .then(({ data }: GetEmissionDataType): void => {
          // update input
          setUsageValues((prev: UsageValuesType): UsageValuesType => ({
            ...prev,
            [valueName]: value
          }))
          // update emissions value
          setEmissions((prev: EmissionsType): EmissionsType => ({
            ...prev,
            [valueName]: data.emissionsPerYear
          }))
          // uncheck relevant checkboxes
          if (data.emissionsPerYear === 0) {
            setCheckboxStates((prev: CheckboxStateTypes): CheckboxStateTypes => ({
              ...prev,
              ledLighting: valueName === 'electricity' ? false : prev.ledLighting,
              compost: valueName === 'waste' ? false : prev.compost
            }))
          }
        })
        .catch(console.error)
    } // end if
  } // end handleChange

  return (
    <Flex h='72vh' px='2' align="left" justify="flex-start" direction="column" overflowY='auto'>
      {
        INPUTS[category].map((subcategory: InputType): JSX.Element => (
          <React.Fragment key={subcategory.label}>
            <Box>
              <FormLabel>
                <Text
                  position='relative'
                  w='fit-content'
                  top='3'
                  left='3'
                  px='1'
                  fontSize='16'
                  bg='var(--chakra-colors-chakra-body-bg)'
                  zIndex='2'
                >
                  {subcategory.label}
                </Text>
                <Input
                  h='54'
                  autoComplete='new-password'
                  value={usageValues[subcategory.valueName]}
                  onChange={(e) => handleChange(e, subcategory.valueName)}
                />
              </FormLabel>
            </Box>
            {
              {
                electricity: (
                  <Stack spacing='2' px='2' mb='2'>
                    <Checkbox
                      size='md'
                      colorScheme='blue'
                      isChecked={checkboxStates.ledLighting}
                      isDisabled={emissions.electricity === 0}
                      onChange={(e) => handleCheckbox(e, 'ledLighting')}
                    >
                      Upgrade to LED lighting
                    </Checkbox>
                  </Stack>
                ),
                waste: (
                  <Stack spacing='2' px='2' mb='2'>
                    <Checkbox
                      size='md'
                      colorScheme='blue'
                      isChecked={checkboxStates.compost}
                      isDisabled={emissions.waste === 0}
                      onChange={(e) => handleCheckbox(e, 'compost')}
                    >
                      Compost all organic waste
                    </Checkbox>
                  </Stack>
                )
              }[subcategory.valueName]
            }
          </React.Fragment>
        ))
      }
    </Flex>
  )
}

export default Inputs
