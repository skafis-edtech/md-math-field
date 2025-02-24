import React, { useEffect, useRef } from "react";
import { createButton } from "../core/button";

export default function Button({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const button = createButton(text, onClick);
      ref.current.innerHTML = "";
      ref.current.appendChild(button);
    }
  }, []);

  return <div ref={ref}></div>;
}
