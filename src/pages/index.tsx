import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { prisma } from "../db/client";

const Home: NextPage = (props: any) => {
    return (
        <>
            <Head>
                <title>EZPoll</title>
                <meta name="description" content="A simple polling app" />
            </Head>

            <main>
                <h1 className="text-3xl font-bold underline">Hello, World!</h1>
                <code>{props.questions}</code>
            </main>
        </>
    );
};

export const getServerSideProps = async () => {
    const questions = await prisma.pollQuestion.findMany();

    return {
        props: {
            questions: JSON.stringify(questions),
        },
    };
};

export default Home;
