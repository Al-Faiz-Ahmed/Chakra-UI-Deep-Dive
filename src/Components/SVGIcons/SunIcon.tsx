<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
></svg>;
type propTypes = {
  size?: string;
  color?: string;
};

const SunIcon = ({ size = "24", color = "#5C5C5C" }: propTypes) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9974 16.4967C14.4821 16.4967 16.4963 14.4825 16.4963 11.9978C16.4963 9.51311 14.4821 7.49889 11.9974 7.49889C9.51276 7.49889 7.49854 9.51311 7.49854 11.9978C7.49854 14.4825 9.51276 16.4967 11.9974 16.4967Z"
        stroke={color}
        strokeWidth="2.24945"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 11.9978H3.01125M11.9978 3V3.01125M20.9956 11.9978H21.0068M11.9978 20.9956V21.0068M5.59811 5.59811L5.58686 5.58686M18.42 5.59811L18.4087 5.58686M18.4087 18.4087L18.42 18.42M5.58686 18.4087L5.59811 18.42"
        stroke={color}
        strokeWidth="2.24945"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SunIcon;
