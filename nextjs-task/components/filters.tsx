// type Props = {
//   total: Number;
//   cssClass: string;
// };

// TODO: replace form elements with components
const Filtes = () => (
  <>
    <label>
      Log ID
      <div>
        <input type="text" />
      </div>
    </label>
    <label>
      Action Type
      <div>
        <select>
          <option value="">Action type..</option>
        </select>
      </div>
    </label>
    <label>
      Application Type
      <div>
        <select>
          <option value="">Application type..</option>
        </select>
      </div>
    </label>
    <label>
      From Date
      <div>
        <input type="text" />
      </div>
    </label>
    <label>
      From Date
      <div>
        <input type="text" />
      </div>
    </label>
    <button>Search Logger</button>
  </>
);

export default Filtes;
