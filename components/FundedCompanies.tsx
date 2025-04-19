"use client";

import React, { useState, useEffect } from "react";
import { Company } from "@/utils/company";
import Season from "./Season";
import yc_companies from "@/utils/yc_companies_combined.json"; 

const FundedCompanies = () => {
  const [companiesByYear, setCompaniesByYear] = useState<Record<string, Company[]>>({});
  const [expandedYears, setExpandedYears] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const grouped: Record<string, Company[]> = {};

    for (const company of yc_companies) {
      if (company.batch && company.batch.length > 1) {
        const year = company.batch.slice(1); 
        if (!isNaN(Number(year))) {
          if (!grouped[year]) grouped[year] = [];
          grouped[year].push(company);
        }
      }
    }

    setCompaniesByYear(grouped);
    setIsLoading(false);
  }, []);

  const toggleYear = (year: string) => {
    setExpandedYears((prev) =>
      prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year]
    );
  };

  const sortedYears = Object.keys(companiesByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="mt-28 max-w-5xl mx-auto px-4" id="companies">
      <h1 className="text-center text-4xl font-extrabold mb-8">
        Funded Companies 2005-2025
      </h1>

      {isLoading && <p className="text-center text-gray-500">Loading companies data...</p>}

      {!isLoading && sortedYears.length === 0 && (
        <p className="text-center text-gray-400 italic">No company data available.</p>
      )}

      <div className="space-y-6">
        {sortedYears.map((year) => (
          <div key={year} className="border rounded-lg shadow-sm overflow-hidden">
            <button
              onClick={() => toggleYear(year)}
              className="w-full text-white font-semibold px-6 py-3 text-left flex justify-between items-center focus:outline-none"
              aria-expanded={expandedYears.includes(year)}
              aria-controls={`season-${year}`}
            >
              <span className="text-xl">Batch: 20{year.padStart(2, "0")}</span>
              <span className="text-2xl select-none">
                {expandedYears.includes(year) ? "−" : "+"}
              </span>
            </button>

            {expandedYears.includes(year) && (
              <div id={`season-${year}`} className="p-6">
                {companiesByYear[year] && companiesByYear[year].length > 0 ? (
                  <Season year={year} companies={companiesByYear[year]} />
                ) : (
                  <p className="text-center text-gray-400 italic">No data available for this batch.</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FundedCompanies;
