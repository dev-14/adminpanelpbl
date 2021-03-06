import React, { Component } from "react";
import { Nav, NavItem, NavbarBrand, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import "./SidebarComponent.css";
// import history from "../../redux/history";

export class Sidebar extends Component {
  constructor(props) {
    super(props);
    //this.handleLogout = this.handleLogout.bind(this);
  }

  // handleLogout() {
  //   localStorage.removeItem("username");
  //   // localStorage.removeItem('token');
  //   history.push("/login");
  //   window.location.reload(true);
  // }

  render() {
    // var username = localStorage.getItem("username");
    return (
      <div>
        <Nav className="sidebar">
          <NavbarBrand className="sidebar-title">
            <h1>Welcome,</h1>
          </NavbarBrand>
          {/* <h3 className="sidebar-title">{username}</h3> */}
          <NavItem className="sidebar-item">
            <NavLink className="nav-link sidebar-text" to="/">
              Personal Details
            </NavLink>
          </NavItem>
          <NavItem className="sidebar-item">
            <NavLink className="nav-link sidebar-text" to="/">
              Academics
            </NavLink>
          </NavItem>
          <NavItem className="sidebar-item">
            <NavLink className="nav-link sidebar-text" to="/">
              Internships
            </NavLink>
          </NavItem>
          <NavItem className="sidebar-item">
            <NavLink className="nav-link sidebar-text" to="/">
              Project Details
            </NavLink>
          </NavItem>
          <NavItem className="sidebar-item">
            <NavLink
              className="nav-link sidebar-text"
              to="/onlinecertifications"
            >
              Online Certifications
            </NavLink>
          </NavItem>
          <NavItem className="sidebar-item">
            <NavLink className="nav-link sidebar-text" to="/">
              Co-Curriculars
            </NavLink>
          </NavItem>
          <NavItem className="sidebar-item">
            <NavLink className="nav-link sidebar-text" to="/">
              Extra-Curriculars
            </NavLink>
          </NavItem>
          <NavItem className="sidebar-item">
            <NavLink className="nav-link sidebar-text" to="/">
              Attendance
            </NavLink>
          </NavItem>
          <NavItem className="sidebar-item">
            <NavLink className="nav-link sidebar-text" to="/">
              Settings
            </NavLink>
          </NavItem>
          <NavItem className="sidebar-item">
            <Button
              className="nav-link sidebar-text"
              // onClick={this.handleLogout}
            >
              Logout
            </Button>
          </NavItem>
        </Nav>
      </div>
    );
  }
}
