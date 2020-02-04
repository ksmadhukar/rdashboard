import React, { Component } from "react";
import {
  Sidenav,
  Dropdown,
  Nav,
  Icon,
  Navbar,
  Container,
  Sidebar,
  Header,
  Content,
  Panel
} from "rsuite";
// import PlaceholderParagraph from "rsuite/lib/Placeholder/PlaceholderParagraph";
import ReactEcharts from "echarts-for-react";
import TopPanel from "./TopPanel";
import RightPanel from "./RightPanel";

const headerStyles = {
  padding: 18,
  fontSize: 16,
  height: 56,
  background: "#50becb",
  color: " #fff",
  whiteSpace: "nowrap",
  overflow: "hidden",
  fontWeight: "bold"
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

export default class HomePage extends Component {
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
      <Container className="wrapper">
        <Sidebar
          className="left-panel"
          style={{ display: "flex", flexDirection: "column" }}
          width={expand ? 260 : 56}
          collapsible
        >
          <Sidenav.Header>
            <div style={headerStyles}>
              <Icon icon="target" size="lg" style={{ verticalAlign: 0 }} />
              <span style={{ marginLeft: 14 }}> React Dashboard</span>
            </div>
          </Sidenav.Header>
          <Sidenav
            expanded={expand}
            defaultOpenKeys={["3"]}
            appearance="subtle"
          >
            <Sidenav.Body>
              <Nav>
                <Nav.Item eventKey="1" active icon={<Icon icon="dashboard" />}>
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

        <Container className="center-panel">
          <Header className="head">
            <div className="head-title">React Dashboard</div>
            <div className="head-nav">
              <div className="head-nav-item">
                <Icon
                  icon="bell-o"
                  size="lg"
                  style={{ verticalAlign: 0, padding: "0 1rem" }}
                />
              </div>
              <div className="head-nav-item">
                <div className="icon-wrap">
                  <Icon
                    icon="user"
                    size="lg"
                    className="text-white"
                    style={{ verticalAlign: 0 }}
                  />
                </div>

                <span style={{ marginLeft: 5 }}> Riko Sapto D</span>
              </div>
            </div>
          </Header>
          <Content className="dashboard-content">
            <TopPanel />

            <div className="flex">
              <Panel header="Your Income" className="income-panel w-1/2">
                <Dropdown
                  className="panel-menu"
                  title=""
                  noCaret
                  icon={<Icon icon="more" size="2x" />}
                >
                  <Dropdown.Item>Edit</Dropdown.Item>
                  <Dropdown.Item>Refresh</Dropdown.Item>
                  <Dropdown.Item>Delete</Dropdown.Item>
                  <Dropdown.Item>Export PDF</Dropdown.Item>
                  <Dropdown.Item>Export HTML</Dropdown.Item>
                  <Dropdown.Item>Settings</Dropdown.Item>
                </Dropdown>
                <ReactEcharts
                  option={{
                    backgroundColor: "#ffffff",
                    title: {
                      left: "center",
                      top: 20,
                      textStyle: {
                        color: "#ccc"
                      }
                    },
                    tooltip: {
                      trigger: "item",
                      formatter: "{a} <br/>{b} : {c}"
                    },
                    color: ["#3398DB", "#6d5a9d", "#0baaa8", "#f56565"],
                    legend: {
                      data: [
                        "EC2 Compute",
                        "S3 Storage",
                        "RDS Compute",
                        "EBS Storage"
                      ],
                      icon: "circle"
                    },
                    xAxis: {
                      type: "category",
                      data: [
                        "Oct-18",
                        "Nov-18",
                        "Dec-18",
                        "Jan-19",
                        "Feb-19",
                        "Mar-19",
                        "Apr-19",
                        "May-19",
                        "Jun-19",
                        "Jul-19",
                        "Aug-19",
                        "Sep-19"
                      ],
                      axisLine: {
                        lineStyle: {
                          color: "#bbbbbb"
                        }
                      }
                    },
                    yAxis: {
                      type: "value",
                      axisLabel: {
                        formatter: "{value}K"
                      },
                      name: "Cost ($)",
                      nameTextStyle: {
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#555555"
                      },
                      nameRotate: 90,
                      nameLocation: "middle",
                      nameGap: "60",
                      axisLine: {
                        lineStyle: {
                          color: "#bbbbbb"
                        }
                      }
                    },
                    series: [
                      {
                        name: "EC2 Compute",
                        type: "bar",
                        stack: "add",
                        barWidth: "10",
                        data: [
                          120,
                          132,
                          101,
                          134,
                          90,
                          230,
                          120,
                          132,
                          101,
                          134,
                          90,
                          230
                        ],
                        itemStyle: {
                          normal: {
                            barBorderRadius: [0, 0, 5, 5]
                          }
                        }
                      },
                      {
                        name: "S3 Storage",
                        type: "bar",
                        stack: "add",
                        barWidth: "10",
                        data: [
                          120,
                          132,
                          101,
                          134,
                          90,
                          230,
                          120,
                          132,
                          101,
                          134,
                          90,
                          230
                        ]
                      },
                      {
                        name: "RDS Compute",
                        type: "bar",
                        stack: "add",
                        barWidth: "10",
                        data: [
                          120,
                          132,
                          101,
                          134,
                          90,
                          230,
                          120,
                          132,
                          101,
                          134,
                          90,
                          230
                        ]
                      },
                      {
                        name: "EBS Storage",
                        type: "bar",
                        stack: "add",
                        barWidth: "10",
                        data: [
                          150,
                          232,
                          201,
                          154,
                          190,
                          230,
                          150,
                          232,
                          201,
                          154,
                          190,
                          230
                        ],
                        itemStyle: {
                          normal: {
                            barBorderRadius: [5, 5, 0, 0]
                          }
                        }
                      }
                    ]
                  }}
                  style={{ height: 300 }}
                  className="react_for_echarts"
                />
                {/* <PlaceholderParagraph /> */}
              </Panel>
              <Panel
                header="Income Target Details"
                className="income-details-panel w-1/2"
              >
                <Dropdown
                  className="panel-menu"
                  title=""
                  noCaret
                  icon={<Icon icon="more" size="2x" />}
                >
                  <Dropdown.Item>Edit</Dropdown.Item>
                  <Dropdown.Item>Refresh</Dropdown.Item>
                  <Dropdown.Item>Delete</Dropdown.Item>
                  <Dropdown.Item>Export PDF</Dropdown.Item>
                  <Dropdown.Item>Export HTML</Dropdown.Item>
                  <Dropdown.Item>Settings</Dropdown.Item>
                </Dropdown>
                <div className="detail-list-item">
                  <div className="">
                    <div className="progress-circle">
                      <span>33%</span>
                      <div className="left-half-clipper">
                        <div className="first50-bar"></div>
                        <div
                          className="value-bar"
                          style={{
                            borderColor: "#EDA02E",
                            transform: "rotate(119deg)"
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <h4 className="text-xl">Target bulan ini</h4>
                    <p>Target untuk keungan bulan ini yaa lorem ipsum</p>
                  </div>
                </div>
                <div className="detail-list-item">
                  <div>
                    <div className="progress-circle over50 p66">
                      <span>66%</span>
                      <div className="left-half-clipper">
                        <div
                          className="first50-bar"
                          style={{
                            backgroundColor: "#435AC6"
                          }}
                        ></div>
                        <div
                          className="value-bar"
                          style={{
                            borderColor: "#435AC6",
                            transform: "rotate(238deg)"
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <h4 className="text-xl">Target bulan ini</h4>
                    <p>Target untuk keungan bulan ini yaa lorem ipsum</p>
                  </div>
                </div>
                <div className="detail-list-item mb-4">
                  <div>
                    <div className="progress-circle over50">
                      <span>77%</span>
                      <div className="left-half-clipper">
                        <div
                          className="first50-bar"
                          style={{
                            backgroundColor: "#52C2CE"
                          }}
                        ></div>
                        <div
                          className="value-bar"
                          style={{
                            borderColor: "#52C2CE",
                            transform: "rotate(277deg)"
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <h4 className="text-xl">Target bulan ini</h4>
                    <p>Target untuk keungan bulan ini yaa lorem ipsum</p>
                  </div>
                </div>
                <div className="view-all">View All</div>
              </Panel>
            </div>
            <h4 className="head-title mb-3">Your Savings</h4>
            <div className="flex">
              <Panel header="" className="tile bg-ltblue mr-4">
                <div className="flex items-center">
                  <Icon icon="trend" size="3x" />
                  <div className="tile-content">
                    <div className="tile-title">$2560.20</div>
                    <div className="tile-desc">Saving for income</div>
                  </div>
                </div>
              </Panel>
              <Panel header="" className="tile bg-green mr-4">
                <div className="flex items-center">
                  <Icon icon="import" size="3x" />
                  <div className="tile-content">
                    <div className="tile-title">$4251.49</div>
                    <div className="tile-desc">Saving for car</div>
                  </div>
                </div>
              </Panel>
              <Panel header="" className="tile bg-blue">
                <div className="flex items-center">
                  <Icon icon="creative" size="3x" />
                  <div className="tile-content">
                    <div className="tile-title">$5230.12</div>
                    <div className="tile-desc">Saving for health</div>
                  </div>
                </div>
              </Panel>
            </div>
          </Content>
        </Container>

        <RightPanel />
      </Container>
    );
  }
}
