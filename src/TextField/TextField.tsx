import "./style.css";

const TextField = ({ title, onChange }: any) => {
  return (
    <div className="container">
      <label className="title" data-testid="label" htmlFor={title}>
        {title}
      </label>
      <input
        className="field"
        data-testid="input"
        id={title}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default TextField;
