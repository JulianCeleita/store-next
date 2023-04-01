import { Navbar } from "@/components";
import { useEffect, useState } from "react";

const Home = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    window
      .fetch('/api/piece')
      .then((response) => response.json())
      .then(console.log);
  }, []);

  return (
    <div>
      <Navbar/>
      <div>THIS IS THE NEW HOME</div>
      {/* {productList.map((product)=> (
        <div>{product.name}</div>
      ))} */}
    </div>
  );
};
export default Home;

/* import React from 'react'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import fetch from 'isomorphic-unfetch'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://platzi-avo.vercel.app/api/avo')
  const { data: productList }: TAPIAvoResponse = await response.json()

  return {
    props: {
      productList,
    },
  }
}

const HomePage = ({ productList }: { productList: TProduct[] }) => {
  return (
    <Layout>
      <KawaiiHeader />
      <section>
        <Link href="/yes-or-no">
          <a>¿Deberia comer un avo hoy?</a>
        </Link>
      </section>
      <ProductList products={productList} />
      <style jsx>{`
        section {
          text-align: center;
          margin-bottom: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default HomePage */
