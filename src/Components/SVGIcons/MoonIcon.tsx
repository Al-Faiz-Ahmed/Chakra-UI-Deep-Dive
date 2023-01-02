type propTypes = {
    size?: string;
    color?: string;
  };
  
  const MoonIcon = ({ size = "24", color = "#5C5C5C" }: propTypes) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.28709 2C7.17282 3.64945 6.57826 5.59489 6.58006 7.58543C6.58006 13.1525 11.1421 17.6656 16.7702 17.6656C18.6103 17.669 20.4171 17.1755 22 16.2373C20.264 19.6546 16.6902 22.0004 12.5608 22.0004C6.72806 22.0004 1.99997 17.3233 1.99997 11.5535C1.99997 7.28909 4.58469 3.6237 8.28709 2Z"
          fill={color}
        />
      </svg>
    );
  };
  
  export default MoonIcon;
  