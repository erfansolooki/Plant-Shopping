import Select from "react-select";

const SelectComponent = ({ defaultValue, onchange, options }) => {
  return (
    <div className="selectComponent">
      <span>
        <p>مرتب سازی یر اساس</p>
      </span>
      <Select
        defaultValue={defaultValue}
        onChange={onchange}
        options={options}
      />
    </div>
  );
};

export default SelectComponent;
