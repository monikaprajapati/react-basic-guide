import React from "react";
import './ChartBar.css';

type ChartBarProps = {
  label: any;
  value: any;
  maxValue: any;
};

const ChartBar: React.FC<ChartBarProps> = (props: ChartBarProps) => {
  let barFillHeight = "0%";
  if (parseInt(props.maxValue) > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <>
      <div className="chart-bar">
        <div className="chart-bar__inner">
          <div
            className="chart-bar__fill"
            style={{ height: barFillHeight }}
          ></div>
        </div>
        <div className="chart-bar__label">{props.label}</div>
      </div>
    </>
  );
};

export default ChartBar;
