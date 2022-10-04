import React, { useContext, useState } from 'react'
import { SelectContext } from './SelectContext'
import { RuiSelectChildProps, RuiSelectProps } from './Select'
import { selectColor } from './utils/Select'

export const SelectItem = ({ value, color = "amethyst" }: RuiSelectChildProps) => {
    const { handleChange, selectedIcon, currentValue } = useContext(SelectContext)

    return (
        // <>
        //     <li className="flex justify-between w-full px-3 py-2 duration-75 cursor-pointer hover:bg-indigo-200 dark:hover:bg-indigo-400 hover:text-white" tabIndex={0}>
        //             <span>Polygon</span>
        //             <span>🔥</span>
        //         </li>
        //         <li className="w-full px-3 py-2 duration-75 cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-400 hover:text-white" tabIndex={0}>Ethereum</li>
        //         <li className="w-full px-3 py-2 duration-75 cursor-pointer hover:bg-amber-200 dark:hover:bg-amber-400 hover:text-white" tabIndex={0}>Bitcoin</li>
        //         <li className="w-full px-3 py-2 duration-75 cursor-pointer hover:bg-red-200 dark:hover:bg-red-400 hover:text-white" tabIndex={0}>Tron</li>
        //         <li className="w-full px-3 py-2 duration-75 cursor-pointer hover:bg-green-200 dark:hover:bg-green-400 hover:text-white" tabIndex={0}>Celo</li>
        //         <li className="w-full px-3 py-2 duration-75 cursor-pointer hover:bg-pink-200 dark:hover:bg-pink-400 hover:text-white" tabIndex={0}>Kadena</li>
        // </>
        <li tabIndex={0} className={`flex justify-between text-d-base duration-150 hover:text-sylver-100 hover:cursor-pointer py-2 px-4 ${selectColor[color]}`} onClick={() => handleChange?.(value)}>
            <span>{value}</span>
            <span>{currentValue === value ? selectedIcon : ""}</span>
        </li>
    )
}

export const RuiSelect = ({ label, children, selectedIcon = "🔥" }: RuiSelectProps) => {
    const [currentValue, setCurrentValue] = useState('');
    const [open, setOpen] = useState(false);

    const onChange = () => {
        if (open === true) {
            setOpen(false)
            return;
        };
        setOpen(true)
    }

    const handleChange = (value: string) => {
        setCurrentValue(value)
        setOpen(false)
    };

    return (
        <SelectContext.Provider value={{ label, currentValue, handleChange, selectedIcon }}>
            <div className="relative w-72 group">
                <span className='sr-only'>Select Dropdown</span>
                <button className={`peer flex w-full items-center justify-between border border-gray-300 dark:border-gray-800 rounded-lg bg-gray-200 dark:bg-russian-400/40 py-1 px-3`} onClick={() => onChange()}>
                    <span className="whitespace-nowrap text-russian-600 dark:text-sylver-100">{currentValue !== "" ? currentValue : label}</span>
                    <div className="pl-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className={`${open === true ? "group-focus-within:rotate-180" : "rotate-0"} duration-300 text-red-400`} width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </div>
                </button>
                <ul role="list" className={`appearance-none absolute z-10 mt-1.5 transform transition-all duration-300 text-russian-600 dark:text-sylver-100 ${open === true ? 'group-focus-within:translate-y-0 opacity-100 flex flex-col' : '-translate-y-2 opacity-0 hidden'} overflow-hidden duration-300 h-fit w-full rounded-xl bg-gray-200/80 dark:bg-russian-400/40 backdrop-blur-sm`} tabIndex={0} >
                    <span className='sr-only'>Select Dropdown Items</span>
                    {children}
                </ul>
            </div>
        </SelectContext.Provider>
    )
}

RuiSelect.Item = SelectItem

export default RuiSelect.Item