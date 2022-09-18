import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Hello, World!</title>
            </Head>

            <h1 className="text-3xl font-bold underline">Hello, World!</h1>
        </>
    );
};

export default Home;
