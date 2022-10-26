import React from 'react'
import {
  Flex,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel
} from '@chakra-ui/react'
import { FaHouseDamage, FaPlaneDeparture } from 'react-icons/fa'
// components
import Inputs from './Inputs'
// types
import MainPropTypes from '../../types/MainPropTypes'

/**
 * Section containing emissions categories and usage inputs.
 *
 * @component
 * @param {object} usageValues Usage value strings representing input values.
 * @param {Function} setUsageValues Update usage value inputs.
 * @param {object} emissions Emissions per subcategory.
 * @param {Function} setEmissions Update emissions per subcategory.
 * @return {React.ReactElement} Tabs and panels containing usage inputs.
 */
function Main ({ usageValues, setUsageValues, emissions, setEmissions }: MainPropTypes): JSX.Element {
  return (
    <Flex w='35%' h='80vh' p='4' pb='0' align="center" justify="center">
      <Tabs w='100%' variant='soft-rounded' colorScheme='blue'>
        <TabList>
          <Tab mr='2'>
            <FaHouseDamage />
            <Text pl='2'>Housing</Text>
          </Tab>
          <Tab mr='2'>
            <FaPlaneDeparture />
            <Text pl='2'>Travel</Text>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel px='2'>
            <Inputs
              category='housing'
              usageValues={usageValues}
              setUsageValues={setUsageValues}
              emissions={emissions}
              setEmissions={setEmissions}
            />
          </TabPanel>
          <TabPanel px='2'>
            <Inputs
              category='travel'
              usageValues={usageValues}
              setUsageValues={setUsageValues}
              emissions={emissions}
              setEmissions={setEmissions}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  )
}

export default Main
