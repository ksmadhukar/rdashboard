import React, { Component } from "react";
// import PropTypes from "prop-types";
import {
  Sidenav,
  Toggle,
  Dropdown,
  Nav,
  Icon,
  Navbar,
  Container,
  Sidebar,
  Header,
  Content
} from "rsuite";

const headerStyles = {
  padding: 18,
  fontSize: 16,
  height: 56,
  background: "#34c3ff",
  color: " #fff",
  whiteSpace: "nowrap",
  overflow: "hidden"
};

const iconStyles = {
  width: 56,
  height: 56,
  lineHeight: "56px",
  textAlign: "center"
};

const NavToggle = ({ expand, onChange }) => {
  return (
    <Navbar appearance="subtle" className="nav-toggle">
      <Navbar.Body>
        <Nav>
          <Dropdown
            placement="topStart"
            trigger="click"
            renderTitle={children => {
              return <Icon style={iconStyles} icon="cog" />;
            }}
          >
            <Dropdown.Item>Help</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </Nav>

        <Nav pullRight>
          <Nav.Item
            onClick={onChange}
            style={{ width: 56, textAlign: "center" }}
          >
            <Icon icon={expand ? "angle-left" : "angle-right"} />
          </Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

export default class SideNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: true
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle() {
    this.setState({
      expand: !this.state.expand
    });
  }
  render() {
    const { expand } = this.state;
    return (
      <div className="show-fake-browser sidebar-page">
        <Container>
          <Sidebar
            style={{ display: "flex", flexDirection: "column" }}
            width={expand ? 260 : 56}
            collapsible
          >
            <Sidenav.Header>
              <div style={headerStyles}>
                <Icon
                  icon="logo-analytics"
                  size="lg"
                  style={{ verticalAlign: 0 }}
                />
                <span style={{ marginLeft: 12 }}> BRAND</span>
              </div>
            </Sidenav.Header>
            <Sidenav
              expanded={expand}
              defaultOpenKeys={["3"]}
              appearance="subtle"
            >
              <Sidenav.Body>
                <Nav>
                  <Nav.Item
                    eventKey="1"
                    active
                    icon={<Icon icon="dashboard" />}
                  >
                    Dashboard
                  </Nav.Item>
                  <Nav.Item eventKey="2" icon={<Icon icon="group" />}>
                    User Group
                  </Nav.Item>
                  <Dropdown
                    eventKey="3"
                    trigger="hover"
                    title="Advanced"
                    icon={<Icon icon="magic" />}
                    placement="rightStart"
                  >
                    <Dropdown.Item eventKey="3-1">Geo</Dropdown.Item>
                    <Dropdown.Item eventKey="3-2">Devices</Dropdown.Item>
                    <Dropdown.Item eventKey="3-3">Brand</Dropdown.Item>
                    <Dropdown.Item eventKey="3-4">Loyalty</Dropdown.Item>
                    <Dropdown.Item eventKey="3-5">Visit Depth</Dropdown.Item>
                  </Dropdown>
                  <Dropdown
                    eventKey="4"
                    trigger="hover"
                    title="Settings"
                    icon={<Icon icon="gear-circle" />}
                    placement="rightStart"
                  >
                    <Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>
                    <Dropdown.Item eventKey="4-2">Websites</Dropdown.Item>
                    <Dropdown.Item eventKey="4-3">Channels</Dropdown.Item>
                    <Dropdown.Item eventKey="4-4">Tags</Dropdown.Item>
                    <Dropdown.Item eventKey="4-5">Versions</Dropdown.Item>
                  </Dropdown>
                </Nav>
              </Sidenav.Body>
            </Sidenav>
            <NavToggle expand={expand} onChange={this.handleToggle} />
          </Sidebar>

          <Container>
            <Header>
              <h2>Page Title</h2>
            </Header>
            <Content>Content</Content>
          </Container>
        </Container>
      </div>
    );
  }
}

// ReactDOM.render(<Page />);
// export default class SideNavigation extends Component {
//   constructor() {
//     super();
//     this.state = {
//       expanded: true,
//       activeKey: "1"
//     };
//     this.handleToggle = this.handleToggle.bind(this);
//     this.handleSelect = this.handleSelect.bind(this);
//   }
//   handleToggle() {
//     this.setState({
//       expanded: !this.state.expanded
//     });
//   }
//   handleSelect(eventKey) {
//     this.setState({
//       activeKey: eventKey
//     });
//   }
//   render() {
//     const { expanded } = this.state;

//     return (
//       <div style={{ width: 250 }}>
//         <Icon icon="yelp" size="lg" />

//         {/* <hr /> */}
//         <Sidenav
//           expanded={expanded}
//           defaultOpenKeys={["3", "4"]}
//           activeKey={this.state.activeKey}
//           onSelect={this.handleSelect}
//         >
//           <Sidenav.Body>
//             <Nav>
//               <Nav.Item eventKey="1" icon={<Icon icon="dashboard" />}>
//                 Dashboard
//               </Nav.Item>
//               <Nav.Item eventKey="2" icon={<Icon icon="group" />}>
//                 User Group
//               </Nav.Item>
//               <Dropdown
//                 placement="rightStart"
//                 eventKey="3"
//                 title="Advanced"
//                 icon={<Icon icon="magic" />}
//               >
//                 <Dropdown.Item eventKey="3-1">Geo</Dropdown.Item>
//                 <Dropdown.Item eventKey="3-2">Devices</Dropdown.Item>
//                 <Dropdown.Item eventKey="3-3">Loyalty</Dropdown.Item>
//                 <Dropdown.Item eventKey="3-4">Visit Depth</Dropdown.Item>
//               </Dropdown>
//               <Dropdown
//                 placement="rightStart"
//                 eventKey="4"
//                 title="Settings"
//                 icon={<Icon icon="gear-circle" />}
//               >
//                 <Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>
//                 <Dropdown.Item eventKey="4-2">Channels</Dropdown.Item>
//                 <Dropdown.Item eventKey="4-3">Versions</Dropdown.Item>
//                 <Dropdown.Menu eventKey="4-5" title="Custom Action">
//                   <Dropdown.Item eventKey="4-5-1">Action Name</Dropdown.Item>
//                   <Dropdown.Item eventKey="4-5-2">Action Params</Dropdown.Item>
//                 </Dropdown.Menu>
//               </Dropdown>
//             </Nav>
//           </Sidenav.Body>
//         </Sidenav>
//       </div>
//     );
//   }
// }
