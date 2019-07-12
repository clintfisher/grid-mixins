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
          <Core.PageBlurb>
            Welcome to your Los Angeles Times Dashboard. Here you can manage
            your profile and settings, sign up for newsletters, read the
            e-Newspaper and access your subscription account.
          </Core.PageBlurb>
        </Core.PageSubheader>
        <Core.PageBody>
          <Core.HR />
          <Core.Row divided>
            <Core.Section>
              <Core.SectionHeader>
                <Core.SectionHeading>My Account</Core.SectionHeading>
              </Core.SectionHeader>
            </Core.Section>
            <Core.Section>
              <Core.SectionHeader>
                <Core.SectionHeading>My Subscription</Core.SectionHeading>
              </Core.SectionHeader>
            </Core.Section>
          </Core.Row>
          <Core.Row>
            <Core.Section fullWidth>
              <Core.SectionHeader fullWidth>
                <Core.SectionHeading>Customer Service</Core.SectionHeading>
              </Core.SectionHeader>
              <Core.Subcolumn>foo</Core.Subcolumn>
              <Core.Subcolumn>bar</Core.Subcolumn>
            </Core.Section>
          </Core.Row>
        </Core.PageBody>
      </Core.Page>
    </Core.Shell>
  );
};

export default App;
