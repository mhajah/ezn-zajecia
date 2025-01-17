import React from "react"

function Header({ counterValue }: { counterValue: number }) {
  return (
    <h2>
      Header... {counterValue}
    </h2>
  )
}

export default React.memo(Header);