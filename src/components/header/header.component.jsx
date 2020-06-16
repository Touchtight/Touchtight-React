import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>

        <div className='options'>
            <Link className='option' to="/engineroom">
                The Engine Room
            </Link>
        
            <Link className='option' to="/dugout">
                My Club
            </Link>

            <Link className='option' to="/animator">
                Create Video
            </Link>


            {currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>
                 Sign Out
                 <Link className='option' to="/account">
                Account
                </Link>
                </div>
            ) : (
            <Link className='option' to='/signin'>
                Sign In
            </Link>
            )}
        </div>
     </div>
);


const mapStateToProps = state => ({
    currentUser: state.user.currentUser
  });
  
  export default connect(mapStateToProps)(Header);



//   import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import { MDBInput, MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBSideNavItem, MDBSideNavCat, MDBSideNavNav, MDBSideNav, MDBContainer } from "mdbreact";

// class DoubleNavigationPage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       toggleStateA: false
//     };
//   }

//   handleToggleClickA = () => {
//     this.setState({
//       toggleStateA: !this.state.toggleStateA
//     });
//   };

//   render() {
//     const mainStyle = {
//       paddingTop: "4rem"
//     };

//     const specialCaseNavbarStyles = {
//       WebkitBoxOrient: "horizontal",
//       flexDirection: "row"
//     };

//     return (
//       <Router>
//         <div className="grey-skin">
//           <MDBSideNav
//             logo="https://mdbootstrap.com/img/logo/mdb-transparent.png"
//             triggerOpening={this.state.toggleStateA}
//             bg="https://mdbootstrap.com/img/Photos/Others/sidenav4.jpg"
//             mask="strong"
//             hidden
//           >
//             <li>
//               <ul className="social">
//                 <li>
//                   <a href="#!">
//                     <MDBIcon fab icon="facebook-f" />
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#!">
//                     <MDBIcon fab icon="pinterest" />
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#!">
//                     <MDBIcon fab icon="google-plus-g" />
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#!">
//                     <MDBIcon fab icon="twitter" />
//                   </a>
//                 </li>
//               </ul>
//             </li>
//             <MDBInput
//               type="text"
//               hint="Search"
//               style={{
//                 color: "#fff",
//                 padding: "0 10px 8px 30px",
//                 boxSizing: "border-box"
//               }}
//             />
//             <MDBSideNavNav>
//               <MDBSideNavCat
//                 name="Submit blog"
//                 id="submit-blog-cat"
//                 icon="chevron-right"
//               >
//                 <MDBSideNavItem>Submit listing</MDBSideNavItem>
//                 <MDBSideNavItem>Registration form</MDBSideNavItem>
//               </MDBSideNavCat>
//               <MDBSideNavCat
//                 iconRegular
//                 name="Instruction"
//                 id="instruction-cat"
//                 icon="hand-pointer"
//               >
//                 <MDBSideNavItem>For bloggers</MDBSideNavItem>
//                 <MDBSideNavItem>For authors</MDBSideNavItem>
//               </MDBSideNavCat>
//               <MDBSideNavCat name="About" id="about-cat" icon="eye">
//                 <MDBSideNavItem>Instruction</MDBSideNavItem>
//                 <MDBSideNavItem>Monthly meetings</MDBSideNavItem>
//               </MDBSideNavCat>
//               <MDBSideNavCat
//                 name="Contact me"
//                 id="contact-me-cat"
//                 icon="envelope"
//               >
//                 <MDBSideNavItem>FAQ</MDBSideNavItem>
//                 <MDBSideNavItem>Write a message</MDBSideNavItem>
//               </MDBSideNavCat>
//             </MDBSideNavNav>
//           </MDBSideNav>
//           <MDBNavbar double expand="md">
//             <MDBNavbarNav left>
//               <MDBNavItem>
//                 <div
//                   onClick={this.handleToggleClickA}
//                   key="sideNavToggleA"
//                   style={{
//                     lineHeight: "32px",
//                     marginRight: "1em",
//                     verticalAlign: "middle"
//                   }}
//                 >
//                   <MDBIcon icon="bars" color="white" size="2x" />
//                 </div>
//               </MDBNavItem>
//               <MDBNavItem className="d-none d-md-inline" style={{ paddingTop: 5 }}>
//                 Material Design for Bootstrap
//               </MDBNavItem>
//             </MDBNavbarNav>
//             <MDBNavbarNav right style={specialCaseNavbarStyles}>
//               <MDBNavItem active>
//                 <MDBNavLink to="#!">
//                   <MDBIcon icon="envelope" className="d-inline-inline" />{" "}
//                   <div className="d-none d-md-inline">Contact</div>
//                 </MDBNavLink>
//               </MDBNavItem>
//               <MDBNavItem>
//                 <MDBNavLink to="#!">
//                   <MDBIcon far icon="comments" className="d-inline-inline" />{" "}
//                   <div className="d-none d-md-inline">Support</div>
//                 </MDBNavLink>
//               </MDBNavItem>
//               <MDBNavItem>
//                 <MDBNavLink to="#!">
//                   <MDBIcon icon="user" className="d-inline-inline" />{" "}
//                   <div className="d-none d-md-inline">Account</div>
//                 </MDBNavLink>
//               </MDBNavItem>
//               <MDBNavItem>
//                 <MDBDropdown>
//                   <MDBDropdownToggle nav caret>
//                     <div className="d-none d-md-inline">Dropdown</div>
//                   </MDBDropdownToggle>
//                   <MDBDropdownMenu right>
//                     <MDBDropdownItem href="#!">Action</MDBDropdownItem>
//                     <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
//                     <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
//                     <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
//                   </MDBDropdownMenu>
//                 </MDBDropdown>
//               </MDBNavItem>
//             </MDBNavbarNav>
//           </MDBNavbar>
//           <main style={mainStyle}>
//             <MDBContainer fluid style={{ height: 2000 }} className="mt-5">
//               <h2>Advanced Double Navigation with hidden SideNav & non-fixed Navbar:</h2>
//               <br />
//               <h5>1. Hidden side menu. Click "hamburger" icon in the top left corner to open it.</h5>
//               <h5>2. Non-fixed navbar. When you scroll down it will disappear.</h5>
//             </MDBContainer>
//           </main>
//         </div>
//       </Router>
//     );
//   }
// }

// export default DoubleNavigationPage;