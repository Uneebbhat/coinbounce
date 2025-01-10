"use client";

import axios from "axios";
import { useState, useEffect } from "react";

interface Crypto {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  high_24h: number;
  low_24h: number;
}

const useGetCrypto = () => {
  const [crypto, setCrypto] = useState<Crypto[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get("/api/crypto");
        console.log(response.data);
        setCrypto(response.data);
      } catch (error: any) {
        console.log(error);
      }
    };
    fetchCryptoData();
  }, []);

  return { crypto, loading };
};

export default useGetCrypto;
