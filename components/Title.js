import { useLayoutEffect, useState } from "react"

export default function Title({ children, version }) {
  return (
    <>
      {version === "v1" && (
        <h3 className="text-5xl text-center leading-[4rem] tracking-wider text-grey-400">{children}</h3>
      )}

      {/* Default */}
      {(!version || version === "") && (
        <div className="flex justify-center items-center">
          <h3
            className={`w-[90vw] text-5xl md:text-8xl font-sketch uppercase font-bold tracking-wider text-center break-words drop-shadow-lg`}
          >
            {children}
          </h3>
        </div>
      )}
    </>
  )
}
