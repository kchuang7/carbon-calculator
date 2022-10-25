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

function Main (props: MainPropTypes): JSX.Element {
  return (
    <Flex h='80vh' p='4' align="center" justify="center">
      <Tabs w='80%' variant='soft-rounded' colorScheme='blue'>
        <TabList>
          <Tab>Housing</Tab>
          <Tab>Travel</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Inputs
              category='housing'
              usageValues={props.usageValues}
              setUsageValues={props.setUsageValues}
            />
          </TabPanel>
          <TabPanel>
            <Inputs
              category='travel'
              usageValues={props.usageValues}
              setUsageValues={props.setUsageValues}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  )
}

export default Main
