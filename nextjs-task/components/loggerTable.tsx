import styles from "@/styles/table.module.scss";

type Props = {
  data: Array<any>;
};

const LoggerTable = ({ data }: Props) => {
  return (
    <>
      <div>
        <div>Log ID</div>
        <div>Action type</div>
        <div>Application ID</div>
        <div>Action</div>
        <div>Action details</div>
        <div>Log ID</div>
        <div>Date</div>
      </div>
      {data.map((x, i) => {
        return (
          <>
            <div>
              <div>some</div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default LoggerTable;