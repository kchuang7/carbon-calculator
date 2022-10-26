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
