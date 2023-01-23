import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Breadcrump from "@/components/breadcrump";
import Pagination from "@/components/pagination";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Next JS, React App</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main + " " + inter.className}>
        <Breadcrump cssClass={styles.breadcrump} />
        <div className={styles.searchboxes}>
          <div>Search boxes</div>
        </div>
        <div className={styles.table}>
          <div>Table content</div>
          <Pagination total={10} cssClass={styles.pagination} />
        </div>
      </main>
    </>
  );
}
