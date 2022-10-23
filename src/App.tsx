import * as React from 'react'
import {
  ChakraProvider,
  Box,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  theme
} from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'

function App (): JSX.Element {
  return (
    <ChakraProvider theme={theme}>
      <Box p='4' textAlign='right' fontSize='xl'>
        <ColorModeSwitcher justifySelf='flex-end' />
      </Box>
      <Flex h='80vh' p='4' align="center" justify="center">
        <Tabs variant='soft-rounded' colorScheme='blue'>
          <TabList>
            <Tab>Tab 1</Tab>
            <Tab>Tab 2</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </ChakraProvider>
  )
}

export default App
