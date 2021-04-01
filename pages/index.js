import Head from "next/head";
import { Background } from "@components/background";
import styles from "../styles/Home.module.css";

export default function Home() {
   return (
      <div className={styles.container}>
         <Head>
            <title>Chrissymaeh</title>
            {/* <link rel="icon" href="/favicon.ico" /> */}
         </Head>
       <Background />
      </div>
   );
}
