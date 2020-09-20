import React from 'react';
import GlobalStyle from './styles/global'
import AppProvider from './hooks/index'

import Routes from './Routes'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <AppProvider>
          <Routes />
      </AppProvider>
    
    </>
    )
}

export default App;
