import React from 'react'
import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel
} from '@chakra-ui/react'
import Inputs from './Inputs'
import MainPropTypes from '../../types/MainPropTypes'

function Main ({ usageValues, setUsageValues, setEmissions }: MainPropTypes): JSX.Element {
  return (
    <Flex w='40%' h='80vh' p='4' align="center" justify="center">
      <Tabs w='100%' variant='soft-rounded' colorScheme='blue'>
        <TabList>
          <Tab mr='2'>Housing</Tab>
          <Tab>Travel</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Inputs
              category='housing'
              usageValues={usageValues}
              setUsageValues={setUsageValues}
              setEmissions={setEmissions}
            />
          </TabPanel>
          <TabPanel>
            <Inputs
              category='travel'
              usageValues={usageValues}
              setUsageValues={setUsageValues}
              setEmissions={setEmissions}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  )
}

export default Main
