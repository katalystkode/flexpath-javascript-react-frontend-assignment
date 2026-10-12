import ResultsTable from "./ResultsTable";

export default function TableView({ filteredData = [], loading, error }) {
  return (
    <div className="container mt-3">
      {error && (
        <div className="mb-3 text-danger" style={{ maxWidth: "70rem" }}>
          Error Loading Records: {error}
        </div>
      )}
      {loading ? (
        <p>Loading Records...</p>
      ) : filteredData.length === 0 ? (
        <p>No Records To Display</p>
      ) : (
        <>
          <p>Displaying {filteredData.length} Records</p>
          <ResultsTable records={filteredData} />
        </>
      )}
    </div>
  );
}
