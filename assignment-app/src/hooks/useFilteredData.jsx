import { useState, useEffect } from "react";
import isMatchWithTypos from "../utils/fuzzySearch";

export default function useFilteredData(data, submittedKeyword, filterType) {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (Array.isArray(data)) {
      const trimmedKeyword = (submittedKeyword || "").trim().toLowerCase();
      if (trimmedKeyword) {
        const results = data.filter((record) => {
          const targetValue = record[filterType];
          if (targetValue === undefined || targetValue === null) return false;

          return isMatchWithTypos(String(targetValue).toLowerCase(), trimmedKeyword);
        });
        setFilteredData(results);
      } else {
        setFilteredData(data);
      }
    }
  }, [data, submittedKeyword, filterType]);

  return filteredData;
}
