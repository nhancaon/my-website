import { useReveal } from "../hooks/useReveal";

export default function Reveal({ as: Tag = "div", className = "", children }) {
  const ref = useReveal();
  return (
    <Tag ref={ref} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}
