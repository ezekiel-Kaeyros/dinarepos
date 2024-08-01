import React, { useState } from 'react';
import dropDownIcon from '../../../../../public/icons/dropdown-svgrepo-com.svg';
import dropUpIcon from '../../../../../public/icons/drop-up-svgrepo-com.svg';
import Image from 'next/image';
import { useFormContext } from '@/app/hooks/useFormContext';

type SelectFieldProps = {
  title?: string;
  value: string;
  options: Array<{
    id: number;
    label: string;
  }>;
  props?: any;
  handleSelect: (label: string) => void;
  setCurrentInputValue?: any;
  selectedOption?: string;
  placeholder: string;
  optionId: (id: string) => void;
  name?: string;
  // value: string;
};

const SelectField: React.FC<SelectFieldProps> = ({
  title,
  options,
  value,
  props,
  handleSelect,
  setCurrentInputValue,
  selectedOption,
  placeholder,
  optionId,
  name,
}) => {
  const [dropdown, setDropdown] = useState(false);

  const { onBehalfModal, dispatch } = useFormContext();

  const toggleOnBehalfModal = () => {
    dispatch({ type: 'ONBEHALF_MODAL' });
  };

  return (
    <>
      <label
        htmlFor={name}
        className="font-bold block mb-3 text-black break-words"
      >
        {title}
      </label>
      <div className="select-container min-w-[100%]">
        <div
          className="relative"
          onClick={() => {
            setDropdown(!dropdown);
          }}
        >
          <input
            {...props}
            name={name}
            type="text"
            readOnly
            // value={name}
            value={value}
            placeholder={placeholder}
            // defaultValue={inputValue}
            // setCurrentInputValue={setInputValue}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-3  dark:border-gray-400 dark:placeholder-neutral-gray  dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer"
          />
          <div className="icon-container absolute flex items-center justify-center h-full top-0 right-0 p-3">
            {dropdown ? (
              <Image src={dropUpIcon} alt="dropdown" className="w-6" />
            ) : (
              <Image src={dropDownIcon} alt="dropdown" className="w-8" />
            )}
          </div>
        </div>

        {dropdown && (
          <div className="text-black bg-white z-[2]">
            <ul className="border border-[#F4C43B] rounded-tl-md rounded-tr-md rounded-bl-lg rounded-br-lg">
              {options
                ?.filter((item) => item.label !== value)
                .map((option: { label: string; id: number | any }) => {
                  return (
                    <li
                      key={option.id}
                      className="p-5 cursor-pointer border border-y-[#F4C43B] hover:bg-gray-50"
                      onClick={(e: any) => {
                        handleSelect(option?.label),
                          setDropdown(false),
                          optionId(option.id),
                          selectedOption === option.label &&
                            toggleOnBehalfModal();
                      }}
                    >
                      {option.label}
                    </li>
                  );
                })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default SelectField;
