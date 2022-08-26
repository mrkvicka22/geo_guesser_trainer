import WelcomePage from './routes/WelcomePage';
import { Tabs, TabList, TabPanels, TabPanel, Tab } from '@chakra-ui/react'
import Guesser from './routes/Guesser'
import React from 'react'

function App() {

  return (
    <Tabs align="end" variant="soft-rounded">
      <TabList>
        <Tab>Home</Tab>
        <Tab>Poles</Tab>
        <Tab>Bollards</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <WelcomePage/>
        </TabPanel>
        <TabPanel>
          <Guesser type={"poles"} />
        </TabPanel>
        <TabPanel>
          <Guesser type={"bollards"} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default App
