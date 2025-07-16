export default function BlueText({ className, children }) {
  return (
    <p
      className={`${className} font-primary-blue font-inter text-sm leading-7 font-bold`}
    >
      {children}
    </p>
  );
}
