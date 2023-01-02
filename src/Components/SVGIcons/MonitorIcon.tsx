type propTypes = {
  size?: string;
  color?: string;
};

const MonitorIcon = ({ size = "24", color = "#5C5C5C" }: propTypes) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.1818 15.7273H3.81818V4.81818H20.1818M20.1818 3H3.81818C2.80909 3 2 3.80909 2 4.81818V15.7273C2 16.2095 2.19156 16.6719 2.53253 17.0129C2.87351 17.3539 3.33597 17.5455 3.81818 17.5455H10.1818V19.3636H8.36364V21.1818H15.6364V19.3636H13.8182V17.5455H20.1818C20.664 17.5455 21.1265 17.3539 21.4675 17.0129C21.8084 16.6719 22 16.2095 22 15.7273V4.81818C22 4.33597 21.8084 3.87351 21.4675 3.53253C21.1265 3.19156 20.664 3 20.1818 3Z"
        fill={color}
      />
    </svg>
  );
};

export default MonitorIcon;
