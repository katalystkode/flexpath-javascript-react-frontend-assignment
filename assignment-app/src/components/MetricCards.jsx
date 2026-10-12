import MetricCard from "./MetricCard";
import { calculateAverage, calculateMedian } from "../utils/mathUtils";

export default function MetricCards({ filteredData }) {
  return (
    <div className="row g-3 mb-4">
      <div className="col-md-3">
        <MetricCard
          title="App Usage Time (min/day)"
          average={calculateAverage(filteredData, "App Usage Time (min/day)")}
          median={calculateMedian(filteredData, "App Usage Time (min/day)")}
          unit="Minutes"
        />
      </div>
      <div className="col-md-3">
        <MetricCard
          title="Screen On Time (hours/day)"
          average={calculateAverage(filteredData, "Screen On Time (hours/day)")}
          median={calculateMedian(filteredData, "Screen On Time (hours/day)")}
          unit="Hours"
        />
      </div>
      <div className="col-md-3">
        <MetricCard
          title="Number of Apps Installed"
          average={calculateAverage(filteredData, "Number of Apps Installed")}
          median={calculateMedian(filteredData, "Number of Apps Installed")}
          unit="Apps"
        />
      </div>
      <div className="col-md-3">
        <MetricCard
          title="Age"
          average={calculateAverage(filteredData, "Age")}
          median={calculateMedian(filteredData, "Age")}
          unit="Years Old"
        />
      </div>
    </div>
  );
}
