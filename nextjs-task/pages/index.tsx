import { useState, Component } from "react";
import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Breadcrump from "@/components/breadcrump";
import Pagination from "@/components/pagination";
import Filters from "@/components/filters";
import LoggerTable from "@/components/loggerTable";

const inter = Inter({ subsets: ["latin"] });

class Home extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
      logs: [],
    };
  }

  componentDidMount = () => {
    // to load data from API.
  };

  render = () => {
    return (
      <>
        <Head>
          <title>Next JS, React App -- Logger</title>
          <meta name="description" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div className={styles.container + " " + inter.className}>
            <Breadcrump cssClass={styles.breadcrump} />
            <div className={styles.searchboxes}>
              <Filters />
            </div>
            <div className={styles.table}>
              <LoggerTable data={[{ name: "item" }, { name: "item" }]} />
              <Pagination total={10} cssClass={styles.pagination} />
            </div>
          </div>
        </main>
      </>
    );
  };
}

export default Home;
