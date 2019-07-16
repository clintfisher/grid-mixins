/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Component } from 'react';
import * as CoreNav from './CoreNav';

class Nav extends Component {
  render() {
    return (
      <CoreNav.NavElement aria-label="main navigation" data-testid="NavElement">
        <CoreNav.Menu>
          <li>
            <a href="/">My Dashboard</a>
          </li>
          <li>
            <CoreNav.SubMenuButton>My Subscription</CoreNav.SubMenuButton>
            <CoreNav.SubMenu>
              <li>
                <a href="/">Manage My Account</a>
              </li>
              <li>
                <a href="/">Account Summary</a>
              </li>
              <li>
                <a href="/">Change My Address</a>
              </li>
              <li>
                <a href="/">Schedule a Vacation</a>
              </li>
              <li>
                <a href="/">Delivery Issue</a>
              </li>
              <li>
                <a href="/">Feedback</a>
              </li>
            </CoreNav.SubMenu>
          </li>
          <li>
            <a href="/">Settings</a>
          </li>
          <li>
            <a href="/">Newsletters</a>
          </li>
          <li>
            <a href="/">
              <span>eNewspaper</span>
            </a>
          </li>
          <li>
            <a href="/">FAQ</a>
          </li>
          <li>
            <a href="/">
              <span>Contact Us</span>
            </a>
          </li>
        </CoreNav.Menu>
      </CoreNav.NavElement>
    );
  }
}
export default Nav;
