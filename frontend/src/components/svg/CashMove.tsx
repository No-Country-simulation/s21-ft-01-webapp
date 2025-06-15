import * as React from "react"
import { SVGProps } from "react"
const CashMove = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="icon icon-tabler icons-tabler-outline icon-tabler-cash-move"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 15H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
    <path d="M12 19H8a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2.5" />
    <path d="M15.92 13.437a2 2 0 1 0-2.472 2.486M16 19h6M19 16l3 3-3 3" />
  </svg>
)
export default CashMove
