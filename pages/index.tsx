import React from "react";
import Link from "next/link";
import { GetStaticProps } from "next";
import { Layout } from "@/components/Layout";
import KawaiiHeader from "@/components/KawaiiHeader/KawaiiHeader";
import ProductList from "@/components/ProductList/ProductList";

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://platzi-avo.vercel.app/api/avo");
  const { data: productList }: TAPIAvoResponse = await response.json();

  return {
    props: {
      productList,
    },
  };
};

const HomePage = ({ productList }: { productList: TProduct[] }) => {
  return (
    <Layout>
      <KawaiiHeader />
      <div className="bg-slate-800 grid grid-cols-2">
        <ProductList products={productList} />
      </div>
    </Layout>
  );
};

export default HomePage;
