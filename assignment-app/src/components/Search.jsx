import { Link, Outlet, useLocation } from "react-router-dom";
import SearchForm from "./SearchForm";
import MetricCards from "./MetricCards";
import ResultsTable from "./ResultsTable";

export default function Search({
  loading,
  error,
  filteredData = [],
  filterType,
  setFilterType,
  keyword,
  setKeyword,
  onSearch,
}) {
  const location = useLocation();
  const isTableView = location.pathname.includes("/table");

  return (
    <div>
      <h1 className="mb-4">Dataset Search & Analysis</h1>
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <Link
            className={`nav-link ${!isTableView ? "active" : ""}`}
            to="/search"
          >
            Full Search View
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${isTableView ? "active" : ""}`}
            to="table"
          >
            Table View
          </Link>
        </li>
      </ul>

      <Outlet />

      {!isTableView && (
        <>
          <SearchForm
            filterType={filterType}
            setFilterType={setFilterType}
            keyword={keyword}
            setKeyword={setKeyword}
            onSearch={onSearch}
          />
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
              <MetricCards filteredData={filteredData} />
              <ResultsTable records={filteredData} />
            </>
          )}
        </>
      )}
    </div>
  );
}
