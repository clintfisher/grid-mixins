import React from 'react';
import GlobalStyles from './GlobalStyles';
import * as Core from './Core';

const App = () => {
  return (
    <Core.Shell>
      <GlobalStyles />
      <Core.Page>
        <Core.PageHeader>
          <Core.PageLogo>
            <img src="logo-lat-701x88-333333.svg" alt="Los Angeles Times" />
          </Core.PageLogo>
        </Core.PageHeader>
        <Core.PageSubheader>
          <Core.PageSubheading>Cherry Valance</Core.PageSubheading>
        </Core.PageSubheader>
      </Core.Page>
    </Core.Shell>
  );
};

export default App;
