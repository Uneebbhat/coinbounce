"use client";

import Container from "@/components/Cointainer";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import useGetCrypto from "@/hooks/useGetCrypto";
import { TrendingUp, TrendingDown } from "lucide-react";

const ITEMS_PER_PAGE = 10;

const page = () => {
  const { crypto, loading } = useGetCrypto();
  const [currentPage, setCurrentPage] = useState(1);

  if (loading) {
    return <div>Loading...</div>;
  }

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentData = crypto.slice(startIndex, endIndex);
  const totalPages = Math.ceil(crypto.length / ITEMS_PER_PAGE);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <>
      <section className="px-6 py-6">
        <Container>
          <div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Coin</TableHead>
                  <TableHead>Symbol</TableHead>
                  <TableHead>Image</TableHead>
                  <TableHead>Current Price</TableHead>
                  <TableHead>Highest</TableHead>
                  <TableHead>Lowest</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentData.map((data) => (
                  <TableRow key={data.id}>
                    <TableCell className="font-medium">{data.name}</TableCell>
                    <TableCell>{data.symbol}</TableCell>
                    <TableCell>
                      <Image
                        src={data.image}
                        alt={data.name}
                        width={30}
                        height={30}
                      />
                    </TableCell>
                    <TableCell>{data.current_price}</TableCell>
                    <div className="flex justify-between">
                      <TableCell className="text-green-500 flex items-center gap-2">
                        <TrendingUp />
                        {data.high_24h}
                      </TableCell>
                      <TableCell className="text-red-500 flex items-center gap-2">
                        <TrendingDown />
                        {data.low_24h}
                      </TableCell>
                    </div>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="flex justify-between items-center mt-4">
            <button
              className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
              onClick={handlePrevious}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
              onClick={handleNext}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default page;
