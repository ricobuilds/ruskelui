import clsx from 'clsx';
import React, { HTMLAttributes, useState } from 'react'

export interface Props extends HTMLAttributes<HTMLElement> {
    label: string
}

export const RuiSelect = ({label = "Choose an ISO20022 coin"}: Props) => {
    const [hidden, setHidden] = useState(true)

    return (
        <div className="relative w-fit text-sylver-100">
            <button className="flex items-center justify-between h-8 px-3 space-x-3 duration-500 rounded-lg bg-russian-500" onClick={() => setHidden(!hidden)}>
                <span>{label}</span>
                <svg className={clsx(`w-4 h-4`, `${hidden ? 'rotate-0 duration-300' : 'rotate-180 duration-300'}`)} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <ul className={clsx(`absolute text-[1rem] w-full z-10 mt-1.5 p-3 h-40 rounded-2xl overflow-scroll bg-russian-500`, `${hidden ? 'transform transition-all -scale-0 opacity-0 duration-300' : 'transform transition-all opacity-100 scale-100 duration-300'}`)} role="listbox">
                <li className="py-2 pl-4 rounded-lg hover:bg-russian-300/10">XRP</li>
                <li className="py-2 pl-4 rounded-lg hover:bg-russian-300/10">ALGO</li>
                <li className="py-2 pl-4 rounded-lg hover:bg-russian-300/10">XLM</li>
                <li className="py-2 pl-4 rounded-lg hover:bg-russian-300/10">IOTA</li>
                <li className="py-2 pl-4 rounded-lg hover:bg-russian-300/10">XDC</li>
            </ul>
        </div >
        // <select name="" id="">
        //     <option value="">XRP</option>
        //     <option value="">ALGO</option>
        //     <option value="">XML</option>
        //     <option value="">IOTA</option>
        //     <option value="">XDC</option>
        // </select>
    )
}