import React, { useMemo } from "react";

function slowFunction() {
  console.log("slow function");
  for (let i = 0; i < 1000000000; i++) {
    // do nothing
  }
}

function Header({ count }: { count: number }) {
  useMemo(() => slowFunction(), []);
  return <h1>Header... {count} </h1>;
}

export default React.memo(Header);
