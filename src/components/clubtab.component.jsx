import React, { Component } from "react";
import { MDBContainer, MDBNav, MDBNavItem, MDBNavLink, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

class ClubTabsDropdown extends Component {
render() {
  return (
    <MDBContainer fluid list className="mb-4" >
        <MDBNav tabs color="primary">
          <MDBNavItem>
            <MDBNavLink link to="/dugout">The Dugout</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/dugout/clubandteams">Club and Teams</MDBNavLink>    
          </MDBNavItem>

          <MDBNavItem>
            <MDBNavLink to="/dugout/players">Players</MDBNavLink>    
          </MDBNavItem>

          <MDBNavItem>
            <MDBNavLink to="/dugout/fixtures">Fixtures</MDBNavLink>    
          </MDBNavItem>

          <MDBNavItem>
            <MDBNavLink to="/dugout/training">Training</MDBNavLink>    
          </MDBNavItem>

          <MDBNavItem>
            <MDBNavLink to="/dugout/calendar">Calendar</MDBNavLink>    
          </MDBNavItem>

          <MDBNavItem>
            <MDBNavLink to="/dugout/playbook">Your Playbook</MDBNavLink>    
          </MDBNavItem>

          <MDBNavItem>
            <MDBNavLink to="/dugout/philosophy">Your Philosophy</MDBNavLink>    
          </MDBNavItem>

          <MDBNavItem>
            <MDBNavLink to="/dugout/seasonplanner">Season Planner</MDBNavLink>    
          </MDBNavItem>

        </MDBNav>
      </MDBContainer>
    );
  }
}
export default ClubTabsDropdown;