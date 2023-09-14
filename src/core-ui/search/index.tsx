/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

interface Props {
  label?: any;
  value?: any;
  setValue?: any;
  placeholder?: any;
  colspan?: any;
  required?: any;
  disabled?: any;
}

const Search = ({
  label,
  value,
  setValue,
  placeholder = "Search",
  colspan,
  required,
  disabled,
}: Props) => {
  return (
    <div className={`col-span-${colspan || 1} `}>
      <label
        htmlFor="search"
        className="block text-sm pb-1 font-medium text-gray-700"
      >
        {label}
        {required && <span className={`text-red-700`}>*</span>}
      </label>
      <div className="mt-1 relative  rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
          <svg width={20} height={20} viewBox="0 0 512 512">
            <path
              d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
              fill="none"
              stroke="#b4b4b4"
              strokeMiterlimit={10}
              strokeWidth="32px"
            />
            <path
              fill="none"
              stroke="#b4b4b4"
              strokeLinecap="round"
              strokeMiterlimit={10}
              strokeWidth="32px"
              d="M338.29 338.29L448 448"
            />
          </svg>
        </div>
        <input
          data-testid="table-component-search"
          id="search"
          type={"search"}
          name="search"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          required={required}
          disabled={disabled}
          className="form-input border-gray-300 rounded-lg py-2 pl-10 border font-light block focus:ring-blue-400 focus:border-blue-400 w-full pr-10 sm:text-sm sm:leading-5"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Search;
