import React from "react";

function Header({ counterValue }: { counterValue: number }) {
  return (
    <h1>
      Header... {counterValue}
    </h1>
  )
}

export default React.memo(Header);