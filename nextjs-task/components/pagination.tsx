type Props = {
  total: Number;
  cssClass: string;
};

const Pagination = ({ total, cssClass }: Props) => (
  <div className={cssClass}>
    {[...Array(total)].map((_, i) => (
      <a key={i} href={"/" + (i + 1)}>
        {i + 1}
      </a>
    ))}
  </div>
);

export default Pagination;
