import React, { Component } from "react";
// import PropTypes from "prop-types";
import { Dropdown, Icon, Panel } from "rsuite";
import PlaceholderParagraph from "rsuite/lib/Placeholder/PlaceholderParagraph";
import ReactEcharts from "echarts-for-react";

export default class TopPanel extends Component {
  render() {
    return (
      <Panel header="" className="top-panel">
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
        <div className="flex">
          {/* <div className="tile-content"> */}
          <div className="w-1/2 flex">
            <div className="w-1/2 border-dash border-r mr-6">
              <div className="text-left">
                <span>
                  <Icon
                    icon="circle-o"
                    // size="sm"
                    className="text-blue-400 mr-2"
                  />
                </span>
                Income
              </div>
              <div className="text-3xl">$2560.20</div>
              <div className="">
                <button className="btn-rounded">
                  <Icon icon="plus" className="mr-2" />
                  Top Up
                </button>
              </div>
            </div>
            <div className="w-1/2">
              <div className="">
                <span>
                  <Icon
                    icon="circle-o"
                    // size="sm"
                    className="text-blue-400 mr-2"
                  />
                </span>
                Spending
              </div>
              <div className="text-3xl">$3240.20</div>
              <div className="">
                <p>Limit this year 5,000</p>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <ReactEcharts
              option={{
                color: ["#50becb", "#293eb2"],
                tooltip: {},
                xAxis: {
                  type: "category",
                  data: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct"
                  ],
                  axisLine: {
                    show: false
                  },
                  axisTick: {
                    show: false
                  }
                },
                yAxis: {
                  inverse: true,
                  splitArea: { show: false },
                  show: false
                },
                grid: {
                  left: "5%",
                  right: "5%",
                  top: "0",
                  bottom: "18%",
                  containLabel: false
                },
                series: [
                  {
                    name: "Income",
                    type: "bar",
                    barWidth: "5",
                    stack: "one",

                    data: ["2", "3", "6", "4", "3", "5", "3", "7", "5", "4"],
                    itemStyle: {
                      normal: {
                        barBorderRadius: [0, 0, 5, 5]
                      }
                    }
                  },
                  {
                    name: "Spending",
                    type: "bar",
                    barWidth: "5",
                    stack: "one",

                    data: [-4, -6, -3, -8, -2, -5, -3, -7, -3, -5],
                    itemStyle: {
                      normal: {
                        barBorderRadius: [5, 5, 0, 0]
                      }
                    }
                  }
                ]
              }}
              style={{ height: 120 }}
              className="react_for_echarts"
            />
          </div>
        </div>
        {/* </div> */}
        {/* <PlaceholderParagraph /> */}
      </Panel>
    );
  }
}
