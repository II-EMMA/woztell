export default function SubHeadingText({ className, textArray }) {
  return textArray.map((text, index) => (
    <p
      key={index}
      className={`font-secondary-gray font-inter leading-7 text-sm ${className}`}
    >
      {text}
    </p>
  ));
}
