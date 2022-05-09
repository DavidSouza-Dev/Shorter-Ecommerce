import React, { createContext, useState } from "react"
import { TminiCart } from "types"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Context = createContext<any>({})

const Provider: React.FC<React.ReactNode> = ({ children }) => {
  const [miniCart, setMiniCart] = useState<TminiCart[] | []>([])
  const [total, setTotal] = useState(0)
  const [finalQuantity, setFinalQuantity] = useState(0)
  const [active, setActive] = useState(false)

  return (
    <Context.Provider
      value={{
        miniCart,
        setMiniCart,
        total,
        setTotal,
        finalQuantity,
        setFinalQuantity,
        active,
        setActive,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Provider
