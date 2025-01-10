"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useGetNews from "@/hooks/useGetNews";
import Image from "next/image";
import Link from "next/link";

const NewsCards = () => {
  const { news, loading } = useGetNews();
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!news) {
    return <div>No news found</div>;
  }

  return (
    <>
      {news.map((data) => (
        <Card key={data.id}>
          <CardHeader>
            <Image
              src={data.urlToImage}
              alt={data.title}
              width={800}
              height={200}
              style={{ objectFit: "cover", overflow: "hidden" }}
            />
            <CardTitle className="font-light overflow-hidden text-ellipsis line-clamp-3 mt-2">
              {data.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Link href={data.url}>
              <Button className="w-full">Learn more</Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default NewsCards;
