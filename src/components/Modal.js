import React, { useState } from "react";
import Dropdown from "./Dropdown";
import closeIcon from "../assets/icons/close.svg";
import { useAppContext } from "../context/appContext";
import { hoursList24, typeDropdownItems } from "../data/dropdown";

function Modal() {
  const { setModalOpen } = useAppContext();

  const formControlClass = "w-full flex flex-col gap-1.5";
  const labelClass = "text-sm font-semibold";
  const inputClass =
    "w-full px-3.5 py-2.5 text-base font-medium placeholder:text-placeholder rounded-lg border-0 outline outline-1 outline-[#dbdbdb] focus:outline-2 focus:outline-[#2f991e]";
  const weekDays = ["M", "T", "W", "T", "F"];
  const primaryBtnClass =
    "py-3 px-4 text-sm font-semibold text-green-light-2 bg-green rounded-lg";
  const secondaryBtnClass =
    "py-3 px-4 text-sm font-semibold text-green border border-gray-300 rounded-lg";

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalOpen(false);
  };

  return (
    <div className="w-full h-full fixed inset-0 flex items-center justify-center p-5 bg-gray-300 overflow-y-auto">
      <div className="w-full max-w-[620px] bg-white rounded-xl">
        {/* body */}
        <form className="">
          <div className="flex flex-col gap-6 p-6">
            {/* form title */}
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold"> New recurring activity </h2>
              <button className="p-1" onClick={() => setModalOpen(false)}>
                <img src={closeIcon} />
              </button>
            </div>

            {/* Title and type */}
            <div className="flex gap-5">
              <div className={formControlClass}>
                <label className={labelClass}> Title </label>
                <input
                  className={inputClass}
                  type="text"
                  placeholder="E.g. Breakfast, Playtime"
                />
              </div>

              <div className={formControlClass}>
                <label className={labelClass}> Type </label>
                <Dropdown items={typeDropdownItems} />
              </div>
            </div>
            {/* Description */}
            <div className={formControlClass}>
              <label className={labelClass}> Description </label>
              <input
                className={inputClass}
                type="text"
                placeholder="Optional description"
              />
            </div>
            {/* Time */}
            <div className={formControlClass}>
              <label className={labelClass}> Time </label>
              <div className="w-[328px] flex items-center gap-3 mb-3">
                <Dropdown items={hoursList24} />
                <span className={labelClass}> to </span>
                <Dropdown items={hoursList24} />
              </div>
              <div class="flex gap-2">
                <input type="checkbox" id="id_cb1" />
                <label htmlFor="id_cb1" className={labelClass}>
                  All day
                </label>
              </div>
            </div>

            {/* Reapeat every */}
            <div className={formControlClass}>
              <label htmlFor="" className={labelClass}>
                Repeat every
              </label>
              <div class="flex gap-1">
                {weekDays.map((day) => (
                  <WeekDay key={day} day={day} />
                ))}
              </div>
            </div>
          </div>

          {/* footer */}
          <div className="flex justify-end gap-5 px-6 py-4 border-t">
            <button
              type="button"
              className={secondaryBtnClass}
              onClick={() => setModalOpen(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={primaryBtnClass}
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function WeekDay({ day }) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <button
      type="button"
      className={`w-8 h-8 font-medium text-green bg-green-light rounded-full ${isClicked ? "outline outline-1 outline-green" : ""}`}
      onClick={() => setIsClicked(!isClicked)}
    >
      {day}
    </button>
  );
}

export default Modal;
