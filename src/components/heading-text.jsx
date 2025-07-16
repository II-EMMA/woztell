export default function HeadingText({ className, children }) {
  return (
    <h2
      className={`font-primary-gray font-bold font-mont text-3xl ${className}`}
    >
      {children}
    </h2>
  );
}
