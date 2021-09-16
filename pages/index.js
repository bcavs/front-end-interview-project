import { Hero, Layout, Products } from "../components"

import Head from "next/head";
import axios from 'axios'

const Index = ({ data }) => {
  return (
    <div>
      <Head>
        <title>Foxtrot</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/zdz0zoa.css" />
      </Head>
      <Layout>
        <Hero/>
        <Products products={data.aisle}/>
      </Layout>
    </div>
  );
};

export default Index;

export const getStaticProps = async () => {
  const { data } = await axios.get(`https://api.foxtrotchicago.com/v5/inventory/aisles/224/items?store_id=6`);
  return {
    props: {
      data,
    },
  };
};