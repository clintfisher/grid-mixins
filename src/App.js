import React from 'react';
import GlobalStyles from './GlobalStyles';
import * as Core from './Core';
import * as CoreNav from './CoreNav';
import * as CoreNewsletters from './CoreNewsletters';
import * as Navs from './Navs';

const App = () => {
  return (
    <Core.Shell>
      <GlobalStyles />
      <Core.Page>
        <Core.PageHeader>
          <CoreNav.QuickNav data-testid="QuickNav">
            <CoreNav.QuickNavMenu>
              <li>
                <CoreNav.HomeLink />
              </li>
            </CoreNav.QuickNavMenu>
          </CoreNav.QuickNav>
          <Core.PageLogo>
            <img src="logo-lat-701x88-333333.svg" alt="Los Angeles Times" />
          </Core.PageLogo>
          <Navs.UserNav />
          <Navs.Nav />
        </Core.PageHeader>
        <Core.PageSubheader>
          <Core.PageSubheading>Newsletters</Core.PageSubheading>
          <Core.PageBlurb>Delivered to your inbox</Core.PageBlurb>
        </Core.PageSubheader>
        <Core.PageBody>
          <Core.HR />
          <CoreNewsletters.Section>
            <CoreNewsletters.SectionHeader>
              <Core.SectionHeading>LA Times Newsletters</Core.SectionHeading>
            </CoreNewsletters.SectionHeader>
            <Core.RowList>
              <li>
                <CoreNewsletters.Newsletter>
                  <CoreNewsletters.Image />
                  <CoreNewsletters.Category>Sports</CoreNewsletters.Category>
                </CoreNewsletters.Newsletter>
              </li>
              <li>
                <CoreNewsletters.Newsletter>
                  <CoreNewsletters.Image />
                  <CoreNewsletters.Category>Sports</CoreNewsletters.Category>
                </CoreNewsletters.Newsletter>
              </li>
              <li>
                <CoreNewsletters.Newsletter>
                  <CoreNewsletters.Image />
                  <CoreNewsletters.Category>Sports</CoreNewsletters.Category>
                </CoreNewsletters.Newsletter>
              </li>
              <li>
                <CoreNewsletters.Newsletter>
                  <CoreNewsletters.Image />
                  <CoreNewsletters.Category>Sports</CoreNewsletters.Category>
                </CoreNewsletters.Newsletter>
              </li>
            </Core.RowList>
          </CoreNewsletters.Section>
        </Core.PageBody>
      </Core.Page>
    </Core.Shell>
  );
};

export default App;
