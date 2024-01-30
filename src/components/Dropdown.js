import { useState, useRef } from "react";
import useClickOutside from "../hooks/useClickOutside";
import arrowUpIcon from "../assets/icons/arrow-up.svg";
import checkIcon from "../assets/icons/check.svg";

function Dropdown({ items = [] }) {
  const [isOpen, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const dropdownRef = useRef();
  items = [{ id: 0, name: "Select", icon: "" }, ...items];

  const dropdownBtnClass =
    "w-full flex items-center gap-2 px-3 py-2.5 text-base font-medium rounded-lg border-0 outline outline-1 outline-[#dbdbdb] focus:outline-2 focus:outline-[#2f991e]";

  const handleItemSelection = (item) => {
    setSelectedIndex(item);
    setOpen(false);
  };

  const handleOutsideClick = () => {
    setOpen(false);
  };

  useClickOutside(dropdownRef, handleOutsideClick);

  return (
    <div className="group flex flex-col" ref={dropdownRef}>
      {/* dropdown button */}
      <button
        type="button"
        class={dropdownBtnClass}
        onClick={() => setOpen(!isOpen)}
      >
        {items.length > 0 && items[1].icon && items[selectedIndex - 1].icon && (
          <img src={items[selectedIndex - 1].icon} alt="icon" />
        )}
        <span className="flex w-full"> {items[selectedIndex - 1]?.name} </span>
        <img
          src={arrowUpIcon}
          alt="arrowUp_icon"
          class={`ml-4 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* dropdown menu */}
      <div className={`relative ${isOpen ? "block" : "hidden"}`}>
        <div className="absolute top-1.5 left-0 right-0 max-h-[220px] overflow-auto p-2 bg-white rounded-lg shadow-[0_2px_20px_0_#19191b1a]">
          <ul className="flex flex-col gap-1">
            {items &&
              items.map(({ id, name, icon }, index) => (
                <li
                  key={id}
                  className={`h-[40px] flex items-center gap-2 p-2 text-sm font-semibold rounded-lg hover:bg-[#094f0c0f] cursor-pointer ${selectedIndex - 1 === index ? "bg-[#094f0c0f]" : ""}`}
                  onClick={() => handleItemSelection(index + 1)}
                >
                  {icon && <img src={icon} alt="icon" />}
                  <span> {name} </span>
                  {console.log(name, selectedIndex, index)}
                  {selectedIndex - 1 === index && (
                    <img src={checkIcon} alt="check_icon" className="ml-auto" />
                  )}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
