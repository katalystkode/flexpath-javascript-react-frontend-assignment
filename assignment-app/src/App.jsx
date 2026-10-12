import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import useLocalStorage from "./hooks/useLocalStorage";
import useFilteredData from "./hooks/useFilteredData";
import Home from "./components/Home";
import Search from "./components/Search";
import TableView from "./components/TableView";
import NotFound from "./components/NotFound";

function App() {
  const [data, loading, error] = useFetch("/api/data/search");

  const [filterType, setFilterType] = useLocalStorage(
    "preferredFilterType",
    "Device Model",
  );
  const [keyword, setKeyword] = useState("");
  const [submittedKeyword, setSubmittedKeyword] = useLocalStorage(
    "searchKeyword",
    "",
  );

  const filteredData = useFilteredData(data, submittedKeyword, filterType);

  const handleSearch = (e) => {
    e.preventDefault();
    setSubmittedKeyword(keyword);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <Link className="navbar-brand ms-4 mb-0 h1" to="/">
          User Behavior Data
        </Link>

        <div className="navbar-nav">
          <Link className="nav-link" to="/search">
            Search Through Dataset
          </Link>
        </div>
      </nav>
      <div
        className="container mt-5 px-4 mx-auto"
        style={{ maxWidth: "70rem" }}
      >
        <Routes>
          <Route path="/" element={<Home data={data} loading={loading} />} />
          <Route
            path="/search/*"
            element={
              <Search
                loading={loading}
                error={error}
                filteredData={filteredData}
                filterType={filterType}
                setFilterType={setFilterType}
                keyword={keyword}
                setKeyword={setKeyword}
                onSearch={handleSearch}
              />
            }
          >
            <Route
              path="table"
              element={
                <TableView
                  filteredData={filteredData}
                  loading={loading}
                  error={error}
                />
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
