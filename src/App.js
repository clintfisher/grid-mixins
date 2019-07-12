import React from 'react';
import * as Core from './Core';

const App = () => {
  return (
    <Core.Shell>
      <Core.Page>
        <Core.PageHeader>
          <Core.PageLogo>
            <img src="logo-lat-701x88-333333.svg" alt="Los Angeles Times" />
          </Core.PageLogo>
        </Core.PageHeader>
        <Core.PageSubheader>
          <Core.PageSubheading>lat-user-1</Core.PageSubheading>
        </Core.PageSubheader>
      </Core.Page>
    </Core.Shell>
  );
};

export default App;
