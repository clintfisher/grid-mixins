import React, { Component } from 'react';
import * as CoreNav from './CoreNav';

class UserNav extends Component {
  render() {
    return (
      <CoreNav.UserNav>
        <li>Cherry</li>
        <li>
          <CoreNav.LogoutButton type="button">Logout</CoreNav.LogoutButton>
        </li>
      </CoreNav.UserNav>
    );
  }
}

export default UserNav;
