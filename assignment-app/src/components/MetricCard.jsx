export default function MetricCard({ title, average, median, unit }) {
  return (
    <div className="card h-100 shadow-sm text-center">
      <div className="card-body">
        <h6 className="card-title text-secondary mb-3">
          <strong>{title}</strong>
        </h6>
        <p className="card-text mb-1">
          Average:{" "}
          {(typeof average === "number" && !isNaN(average)
            ? average
            : 0
          ).toLocaleString("en-US", { maximumFractionDigits: 1 })}{" "}
          {unit}
        </p>
        <p className="card-text mb-1">
          Median:{" "}
          {(typeof median === "number" && !isNaN(median)
            ? median
            : 0
          ).toLocaleString("en-US", { maximumFractionDigits: 1 })}{" "}
          {unit}
        </p>
      </div>
    </div>
  );
}
