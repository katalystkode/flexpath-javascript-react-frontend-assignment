export default function ResultsTable({ records, loading, error }) {
  if (loading) {
    return <p className="mt-3">Loading Records...</p>;
  }

  return (
    <div className="mt-4">
      {error && (
        <p className="text-danger mb-3">
          Error retrieving search results: {error}
        </p>
      )}

      {records && records.length > 0 && (
        <div className="table-responsive">
          <table className="table table-striped table-hover text-start">
            <thead>
              <tr>
                {Object.keys(records[0]).map((key) => (
                  <th key={key} scope="col" className="text-start">
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {records.map((record, index) => (
                <tr key={index}>
                  {Object.keys(record).map((key) => (
                    <td key={key} className="text-start">
                      {record[key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
