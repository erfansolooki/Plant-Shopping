import Select from "react-select";
import "./Select.css";

const SelectComponent = ({ defaultValue, onchange, options }) => {
  return (
    <div dir="rtl">
      <div className="selectComponent pt-3" dir="rtl">
        <Select
          placeholder={<p className="mb-0">مرتب سازی بر اساس ...</p>}
          defaultValue={defaultValue}
          onChange={onchange}
          options={options}
        />
      </div>
    </div>
  );
};

export default SelectComponent;
