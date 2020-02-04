import React, { Component } from "react";
import { Panel, Dropdown, Icon } from "rsuite";
import PlaceholderParagraph from "rsuite/lib/Placeholder/PlaceholderParagraph";

export default class RightPanel extends Component {
  render() {
    return (
      <div className="right-panel">
        <Panel header="Your Card">
          <Dropdown
            className="panel-menu h-full"
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
          <div className="">
            <img src="/card.png" alt="your card" className="w-full" />
          </div>
          <div className="text-center">
            <button className="btn-rounded">Open Card</button>
          </div>
          {/* <PlaceholderParagraph />
          <PlaceholderParagraph /> */}
        </Panel>
        <Panel header="Your History">
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
          <div className="detail-list-item pb-4">
            <div className="icon-rounded">
              <Icon
                icon="arrow-down2"
                style={{
                  backgroundColor: "rgba(96, 194, 206, 0.25)",
                  color: "rgb(96, 194, 206)"
                }}
              />
            </div>
            <div className="">
              <h4>$250.00</h4>
              <p>Income</p>
            </div>
            <div className="ml-auto text-gray-200">03/02/2020</div>
          </div>
          <div className="detail-list-item pb-4 pt-4">
            <div className="icon-rounded">
              <Icon
                icon="arrow-up2"
                style={{
                  backgroundColor: "rgba(237, 160, 45, 0.25)",
                  color: "rgb(237, 160, 45)"
                }}
              />
            </div>
            <div className="">
              <h4>$215.65</h4>
              <p>Spending</p>
            </div>
            <div className="ml-auto text-gray-200">02/02/2020</div>
          </div>
          <div className="detail-list-item pb-4 mb-4 pt-4">
            <div className="icon-rounded">
              <Icon
                icon="arrow-down2"
                style={{
                  backgroundColor: "rgba(96, 194, 206, 0.25)",
                  color: "rgb(96, 194, 206)"
                }}
              />
            </div>
            <div className="">
              <h4>$498.26</h4>
              <p>Misc</p>
            </div>
            <div className="ml-auto text-gray-200">01/02/2020</div>
          </div>
          <div className="view-all">View All</div>
        </Panel>
        <Panel header="History Chart">
          <PlaceholderParagraph />
          <PlaceholderParagraph />
        </Panel>
      </div>
    );
  }
}
