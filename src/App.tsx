import React from 'react';
import GlobalStyle from './styles/global'
import SignIn from './Pages/Signin'
import Signup from './Pages/Signup'

import {AuthProvider} from './context/AuthContext'

const App: React.FC = () => {
  return (
  <>
    <GlobalStyle />
      <AuthProvider>
        <SignIn />
      </AuthProvider>
  </>)
}

export default App;
