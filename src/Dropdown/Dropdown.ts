import { ReactNode } from "react"
import { color } from "../types/Generics"

export interface RuiDropdownProps {
    children: ReactNode
    navToDrop?: string
    leftIcon?: ReactNode
    rightIcon?: ReactNode
    color: color
    disabled?: boolean
}

export type position = "left" | "top" | "right" | "bottom"


type dropdownColor = Extract<color, 'amber' | 'amethyst' | 'aqua' | 'azure' | 'bayoux' | 'blue' | 'cyan' | 'emerald' | 'fuchsia' | 'green' | 'indigo' | 'jade' | 'jasper' | 'kunzite' | 'labrodite' | 'lime' | 'orange' | 'peridot' | 'pink' | 'purple' | 'red' | 'rose' | 'ruby' | 'russian' | 'scarlet' | 'stratos' | 'sunstone' | 'teal' | 'violet' | 'yellow'>

export const positioning: { [key in position]: string } = {
    left: "-top-1.5 -translate-x-full -left-3",
    top: "-translate-y-full",
    right: "-top-1.5 translate-x-1/2",
    bottom: "mt-6"
}

export const hoverColor: { [key in dropdownColor]: string } = {
    amber: "hover:bg-amber-400 dark:hover:bg-amber-400/20 dark:hover:text-amber-400",
    amethyst: "hover:bg-amethyst-400 dark:hover:bg-amethyst-400/20 dark:hover:text-amethyst-400",
    aqua: "hover:bg-aqua-400 dark:hover:bg-aqua-400/20 dark:hover:text-aqua-400",
    azure: "hover:bg-azure-400 dark:hover:bg-azure-400/20 dark:hover:text-azure-400",
    bayoux: "hover:bg-bayoux-400 dark:hover:bg-bayoux-400/20 dark:hover:text-bayoux-400",
    blue: "hover:bg-blue-400 dark:hover:bg-blue-400/20 dark:hover:text-blue-400",
    cyan: "hover:bg-cyan-400 dark:hover:bg-cyan-400/20 dark:hover:text-cyan-400",
    emerald: "hover:bg-emerald-400 dark:hover:bg-emerald-400/20 dark:hover:text-emerald-400",
    fuchsia: "hover:bg-fuchsia-400 dark:hover:bg-fuchsia-400/20 dark:hover:text-fuchsia-400",
    green: "hover:bg-green-400 dark:hover:bg-green-400/20 dark:hover:text-green-400",
    indigo: "hover:bg-indigo-400 dark:hover:bg-indigo-400/20 dark:hover:text-indigo-400",
    jade: "hover:bg-jade-400 dark:hover:bg-jade-400/20 dark:hover:text-jade-400",
    jasper: "hover:bg-jasper-400 dark:hover:bg-jasper-400/20 dark:hover:text-jasper-400",
    kunzite: "hover:bg-kunzite-400 dark:hover:bg-kunzite-400/20 dark:hover:text-kunzite-400",
    labrodite: "hover:bg-labrodite-400 dark:hover:bg-labrodite-400/20 dark:hover:text-labrodite-400",
    lime: "hover:bg-lime-400 dark:hover:bg-lime-400/20 dark:hover:text-lime-400",
    orange: "hover:bg-orange-400 dark:hover:bg-orange-400/20 dark:hover:text-orange-400",
    peridot: "hover:bg-peridot-400 dark:hover:bg-peridot-400/20 dark:hover:text-peridot-400",
    pink: "hover:bg-pink-400 dark:hover:bg-pink-400/20 dark:hover:text-pink-400",
    purple: "hover:bg-purple-400 dark:hover:bg-purple-400/20 dark:hover:text-purple-400",
    red: "hover:bg-red-400 dark:hover:bg-red-400/20 dark:hover:text-red-400",
    rose: "hover:bg-rose-400 dark:hover:bg-rose-400/20 dark:hover:text-rose-400",
    ruby: "hover:bg-ruby-400 dark:hover:bg-ruby-400/20 dark:hover:text-ruby-400",
    russian: "hover:bg-russian-400 dark:hover:bg-russian-400/20 dark:hover:text-russian-400",
    scarlet: "hover:bg-scarlet-400 dark:hover:bg-scarlet-400/20 dark:hover:text-scarlet-400",
    stratos: "hover:bg-stratos-400 dark:hover:bg-stratos-400/20 dark:hover:text-stratos-400",
    sunstone: "hover:bg-sunstone-400 dark:hover:bg-sunstone-400/20 dark:hover:text-sunstone-400",
    teal: "hover:bg-teal-400 dark:hover:bg-teal-400/20 dark:hover:text-teal-400",
    violet: "hover:bg-violet-400 dark:hover:bg-violet-400/20 dark:hover:text-violet-400",
    yellow: "hover:bg-yellow-400 dark:hover:bg-yellow-400/20 dark:hover:text-yellow-400",
}