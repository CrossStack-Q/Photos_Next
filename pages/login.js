import React from "react";
import Head from "next/head";
import { getProviders, signIn, signOut } from "next-auth/react";
import { Button, Text } from "@nextui-org/react";
import Image from "next/image";
import logow from "../public/logow.png";
import styles from "../styles/Login.module.css";
import Header_Login from "../components/Header_Main/Header_Login";

function Login({ providers }) {
  return (
    <main>
      <Head>
        <title>Google Photos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header_Login />
      <div className={styles.logink}>
        <div className="flex justify-center items-center h-[90vh]">
          <div>
            <div className="flex justify-center items-center flex-grow -mt-16">
              <div className="relative w-[5rem] h-[5rem] ">
                <Image src={logow} layout="fill" objectFit="contain" />
              </div>
            </div>
            <div className="font-semibold text-4xl text-gray-700 flex-col flex justify-center items-center flex-grow mt-4">
              <p>Make the most of your memories</p>
              <p>with Google Photos</p>
            </div>
            <div className="flex justify-center items-center flex-grow">
              <Button onClick={signIn} css={{ marginTop: "$10" }} size="lg">
                <Text
                  css={{
                    color: "#ffffff",
                  }}
                  weight="bold"
                  h2
                >
                  Go to Google Photos Now
                </Text>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
