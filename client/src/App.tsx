import React from 'react';

import ApolloProvider from './utils/apollo';
import Main from './components';

const App: React.FC = () => {
  return (
    <ApolloProvider>
      <Main />
    </ApolloProvider>
  );
};

export default App;
