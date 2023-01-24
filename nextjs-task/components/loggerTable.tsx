import styles from "@/styles/table.module.scss";

type Props = {
  data: Array<any>;
};

const LoggerTable = ({ data }: Props) => {
  return (
    <>
      <div className={styles.headerRow}>
        <div>Log ID</div>
        <div>Action type</div>
        <div>Application ID</div>
        <div>Action</div>
        <div>Action details</div>
        <div>Log info</div>
        <div>Date</div>
      </div>
      {data.map((item, i) => {
        return (
          <div key={i}>
            <div className={styles.row}>
              <div>{item.logId}</div>
              <div>{item.actionType}</div>
              <div>{item.applicationId}</div>
              <div>{item.actionType}</div>
              <div>{item.actionType}</div>
              <div>{item.logInfo}</div>
              <div>{item.creationTimestamp}</div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default LoggerTable;
