import React from 'react'
import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel
} from '@chakra-ui/react'
import Housing from './Housing'
import MainPropTypes from '../../types/MainPropTypes'

function Main (props: MainPropTypes): JSX.Element {
  return (
    <Flex h='80vh' p='4' align="center" justify="center">
      <Tabs variant='soft-rounded' colorScheme='blue'>
        <TabList>
          <Tab>Housing</Tab>
          <Tab>Travel</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Housing
              usageValues={props.usageValues}
              setUsageValues={props.setUsageValues}
            />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  )
}

export default Main
