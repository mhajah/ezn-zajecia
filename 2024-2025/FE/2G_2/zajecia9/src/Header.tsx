import React, { useMemo } from "react";

function Header({ setState }: { setState: (value: number) => void }) {
  return <button onClick={() => setState(5)}>+1</button>;
}

export default Header;
