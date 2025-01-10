import Container from "@/components/Cointainer";
import NewsCards from "@/components/home/NewsCards";
import React from "react";

const page = () => {
  return (
    <>
      <section>
        <Container>
          <div className="grid place-content-center grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 px-4 py-4">
            <NewsCards />
          </div>
        </Container>
      </section>
    </>
  );
};

export default page;
