import { Company } from "@/utils/company";
import Image from "next/image";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Season = ({
  year,
  companies,
}: {
  year: string;
  companies: Company[];
}) => {
  const formattedYear = Number(year) >= 10 ? `20${year}` : `200${year}`;

  return (
    <div className="my-10 max-w-full overflow-x-auto">
      <p
        className="text-3xl font-extrabold mb-6"
        style={{ color: "#FF5D17" }}
      >
        Batch: {formattedYear}
      </p>
      <div className="rounded-xl border border-gray-300 dark:border-gray-700 shadow-lg overflow-hidden">
        <Table className="min-w-[900px]">
          {/* Header with orange gradient */}
          <TableHeader
            className="text-white"
            style={{
              background:
                "linear-gradient(90deg, #FF5D17 0%, #FF8138 50%, #FF5D17 100%)",
            }}
          >
            <TableRow>
              <TableHead className="w-[60px] text-center">Logo</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Industry</TableHead>
              <TableHead>Location</TableHead>
              <TableHead className="text-center">Team Size</TableHead>
              <TableHead className="text-center">Hiring</TableHead>
              <TableHead>Website</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {companies.map((company) => (
              <TableRow
                key={company.id}
                className="hover:bg-[#FFEFE8] dark:hover:bg-[#4B2E1E] transition-colors duration-200 cursor-pointer"
                title={company.long_description || company.one_liner || ""}
              >
                <TableCell className="text-center py-3">
                  {company.small_logo_thumb_url ? (
                    <Image
                      src={company.small_logo_thumb_url}
                      alt={company.name}
                      width={48}
                      height={48}
                      className="rounded-full object-contain border border-[#FF5D17]"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-[#FF5D17] flex items-center justify-center text-white font-semibold">
                      {company.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()
                        .slice(0, 2)}
                    </div>
                  )}
                </TableCell>
                <TableCell
                  className="font-semibold text-lg"
                  style={{ color: "#FF5D17" }}
                >
                  {company.name}
                  {company.top_company && (
                    <span className="ml-2 inline-block bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-0.5 rounded-full align-middle">
                      Top
                    </span>
                  )}
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                      company.status === "active"
                        ? "bg-[#FFBFA6] text-[#8B2E00]"
                        : company.status === "inactive"
                        ? "bg-[#FFD6CC] text-[#B33A00]"
                        : "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {company.status
                      ? company.status.charAt(0).toUpperCase() +
                        company.status.slice(1)
                      : "Unknown"}
                  </span>
                </TableCell>
                <TableCell className="capitalize">{company.industry || "—"}</TableCell>
                <TableCell>{company.all_locations || "—"}</TableCell>
                <TableCell className="text-center">{company.team_size ?? "—"}</TableCell>
                <TableCell className="text-center">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                      company.isHiring
                        ? "bg-[#FFBFA6] text-[#8B2E00]"
                        : "bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {company.isHiring ? "Hiring" : "Not Hiring"}
                  </span>
                </TableCell>
                <TableCell>
                  {company.website ? (
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium transition-colors"
                      style={{ color: "#FF5D17" }}
                      title={`Visit ${company.name} website`}
                    >
                      Visit
                    </a>
                  ) : (
                    <span className="text-gray-400 italic">—</span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Season;
