import * as React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

type ChartProps = {
  dataPoints: any;
};

const Chart: React.FC<ChartProps> = (props: ChartProps) => {
  const dataPointValues = props.dataPoints.map((point: any) => point.value);
  const totalMaximum = Math.max(...dataPointValues);
  
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint: any) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
