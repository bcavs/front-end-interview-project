import Head from "next/head";
import Layout from "../components/Layout"

const Index = () => {
  return (
    <div>
      <Head>
        <title>Foxtrot</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/zdz0zoa.css" />
      </Head>
      <Layout>
        <h1>Welcome to the Foxtrot front-end coding project</h1>
      </Layout>
    </div>
  );
};

export default Index;
