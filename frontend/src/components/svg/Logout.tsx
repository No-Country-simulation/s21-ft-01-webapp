import * as React from "react"
import { SVGProps } from "react"
const Logout = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="icon icon-tabler icons-tabler-outline icon-tabler-logout-2"
        {...props}
    >
        <path stroke="none" d="M0 0h24v24H0z" />
        <path d="M10 8V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-2" />
        <path d="M15 12H3l3-3M6 15l-3-3" />
    </svg>
)
export default Logout
