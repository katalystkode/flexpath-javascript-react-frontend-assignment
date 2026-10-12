export default function SearchForm({
  filterType,
  setFilterType,
  keyword,
  setKeyword,
  onSearch,
}) {
  return (
    <form className="mb-3" onSubmit={onSearch}>
      <div className="mb-4" style={{ maxWidth: "15.6rem" }}>
        <label htmlFor="filterType" className="form-label">
          Select data point to filter search by
        </label>
        <select
          id="filterType"
          className="form-select"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="Device Model">model</option>
          <option value="Gender">gender</option>
          <option value="Operating System">operatingSystem</option>
          <option value="User Behavior Class">behaviorclass</option>
        </select>
      </div>

      <div style={{ maxWidth: "25rem" }}>
        <input
          type="text"
          className="form-control vw-50"
          value={keyword || ""}
          placeholder="Search by Keyword"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="submit" className="btn btn-secondary mt-3 w-100">
          Search
        </button>
      </div>
    </form>
  );
}
