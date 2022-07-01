import { useLayoutEffect, useState } from "react"

export default function Title({ children }) {
  return (
    <div className="flex justify-center items-center">
      <h3
        className={`w-[90vw] text-5xl md:text-8xl font-sketch uppercase font-bold tracking-wider text-center break-words drop-shadow-lg`}
      >
        {children}
      </h3>
    </div>
  )
}
