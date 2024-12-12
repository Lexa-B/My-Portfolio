import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Coming Soon</title>
        <meta name="description" content="My personal portfolio is coming soon!" />
      </Head>
      <div className="flex flex-col justify-center items-center h-screen text-center font-sans">
        <h1 className="text-4xl mb-4">🚀 Coming Soon!</h1>
        <p className="text-xl text-gray-600">
          My programming portfolio is under construction. Stay tuned for updates!
        </p>
      </div>
    </>
  );
};

export default Home;
