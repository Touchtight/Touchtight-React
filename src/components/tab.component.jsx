import React, { Component } from "react";
import { MDBContainer, MDBNav, MDBNavItem, MDBNavLink, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

class TabsDropdown extends Component {
render() {
  return (
    <MDBContainer fluid list className="mb-4 px-md-0" >
        <MDBNav tabs color="primary">
          <MDBNavItem>
            <MDBNavLink link active to="/engineroom">The Engine Room</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret color="primary" href="/engineroom/coachingthemes">Coaching Themes</MDBDropdownToggle>
              <MDBDropdownMenu color="primary">
                <MDBDropdownItem href="/engineroom/coachingthemes">All Coaching Themes</MDBDropdownItem>
                <MDBDropdownItem divider />
                <MDBDropdownItem href="/engineroom/coachingthemes/phase1begintheattack">Phase 1 Begin the Attack</MDBDropdownItem>
                <MDBDropdownItem href="/engineroom/coachingthemes/phase2">Phase 2: Possession Questions</MDBDropdownItem>
                <MDBDropdownItem href="/engineroom/coachingthemes/phase3">Phase 3: Finishing the Attack </MDBDropdownItem>
                <MDBDropdownItem href="/engineroom/coachingthemes/phase4">Phase 4: Begin the Press </MDBDropdownItem>
                <MDBDropdownItem href="/engineroom/coachingthemes/phase5">Phase 5: Balanced Defending </MDBDropdownItem>
                <MDBDropdownItem href="/engineroom/coachingthemes/phase6">Phase 6: Defend the Goal </MDBDropdownItem>
                <MDBDropdownItem divider />
                <MDBDropdownItem href="/engineroom/coachingthemes/theme1">Theme 1 Attacking Centrally</MDBDropdownItem>
                <MDBDropdownItem href="/engineroom/coachingthemes/theme2">Theme 2 Counter Attacking</MDBDropdownItem>
                <MDBDropdownItem href="/engineroom/coachingthemes/theme3">Theme 3 Defend in the Defending Third</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>

          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret color="primary" href="/engineroom/practices">Practices</MDBDropdownToggle>
              <MDBDropdownMenu color="primary">
                <MDBDropdownItem href="/engineroom/practices">All Practices</MDBDropdownItem>
                <MDBDropdownItem divider />
                <MDBDropdownItem href="/engineroom/practices/defending">Defending</MDBDropdownItem>
                <MDBDropdownItem href="/engineroom/practices/attacking">Attacking Transition</MDBDropdownItem>
                <MDBDropdownItem href="/engineroom/practices/defensivetransition">Defensive Transition</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>


          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret color="primary" href="/engineroom/sessions">Sessions</MDBDropdownToggle>
              <MDBDropdownMenu color="primary">
                <MDBDropdownItem href="/engineroom/sessions">All Sessions</MDBDropdownItem>
                <MDBDropdownItem divider />
                <MDBDropdownItem href="/engineroom/sessions/60minutes">60 Minutes</MDBDropdownItem>
                <MDBDropdownItem href="/engineroom/sessions/90minutes">90 Minutes</MDBDropdownItem>
                <MDBDropdownItem href="/engineroom/sessions/120minutes">120 Minutes</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>


          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret color="primary" href="/engineroom/tacticalsolutions">Tactical Solutions</MDBDropdownToggle>
              <MDBDropdownMenu color="primary">
                <MDBDropdownItem href="/engineroom/tacticalsolutions">The Tactical Library</MDBDropdownItem>
                <MDBDropdownItem divider />
                <MDBDropdownItem href="/engineroom/tacticalsolutions/defending">Phase 1 Begin the Attack</MDBDropdownItem>
                <MDBDropdownItem href="/engineroom/tacticalsolutions/attacking">Phase 2: Possession Questions</MDBDropdownItem>
                <MDBDropdownItem href="/engineroom/tacticalsolutions/defensivetransition">Phase 3: Finishing the Attack </MDBDropdownItem>
                <MDBDropdownItem href="/engineroom/tacticalsolutions/defensivetransition">Phase 4: Begin the Press </MDBDropdownItem>
                <MDBDropdownItem href="/engineroom/tacticalsolutions/defensivetransition">Phase 5: Balanced Defending </MDBDropdownItem>
                <MDBDropdownItem href="/engineroom/tacticalsolutions/defensivetransition">Phase 6: Defend the Goal </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>


          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret color="primary" href="/engineroom/formationstudy">Formation Study</MDBDropdownToggle>
              <MDBDropdownMenu color="primary">
              <MDBDropdownItem href="/engineroom/formationstudy">All Formations</MDBDropdownItem>
                <MDBDropdownItem divider />
                <MDBDropdownItem href="/engineroom/formationstudy/11v11">11 v 11</MDBDropdownItem>
                <MDBDropdownItem href="/engineroom/formationstudy/9v9">9 v 9</MDBDropdownItem>
                <MDBDropdownItem href="/engineroom/formationstudy/8v8">8 v 8</MDBDropdownItem>
                <MDBDropdownItem href="/engineroom/formationstudy/7v7">7 v 7</MDBDropdownItem>
                <MDBDropdownItem href="/engineroom/formationstudy/6v6">6 v 6</MDBDropdownItem>
                <MDBDropdownItem href="/engineroom/formationstudy/5v5">5 v 5</MDBDropdownItem>
                <MDBDropdownItem href="/engineroom/formationstudy/4v4">4 v 4</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>

          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret color="primary">The Elite 5</MDBDropdownToggle>
              <MDBDropdownMenu color="primary">
              <MDBDropdownItem href="/engineroom/theelite5">Elite Club Analysis</MDBDropdownItem>
                <MDBDropdownItem divider />   
                <MDBDropdownItem href="/engineroom/theelite5/liverpool">The Liverpool Way</MDBDropdownItem>
                <MDBDropdownItem href="/engineroom/theelite5/barcelona">The Barcelona Way</MDBDropdownItem>
                <MDBDropdownItem href="/engineroom/theelite5/realmadrid">The Real Madrid Way</MDBDropdownItem>
                <MDBDropdownItem href="/engineroom/theelite5/mancity">The Man City Way</MDBDropdownItem>
                <MDBDropdownItem href="/engineroom/theelite5/psg">The PSG Way</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>

        </MDBNav>
      </MDBContainer>
    );
  }
}
export default TabsDropdown;