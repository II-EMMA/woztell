export default function Text({ textArray }) {
  return textArray.map((text, index) => (
    <ul className="flex flex-col gap-y-5 font-primary-white" key={index}>
      <li className="mb-3 font-medium font-mont leading-4 lg:mt-0 mt-12">
        {text.title}
      </li>
      {text.subText.map((subText, index) => (
        <li key={index} className="font-inter font-light leading-6">
          {subText}
        </li>
      ))}
    </ul>
  ));
}
