type propsTypes = {
  theme: any;
  colorMode: string;
};
const styles: Object = {
  global: ({ theme }: propsTypes) => ({
    // styles for the `body`
    "*,*::before,*::after": {
      boxSizing: "border-box",
      margin: "0",
      padding: "0",
      transition:
        "background-color 0.5s linear,color 0.5s linear,box-shadow 0.5s linear,fill 0.5s linear,stroke 0.5s linear",
    },
    body: {
      backgroundColor: theme.colors.primary[100],
      fontFamily:
        '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto","Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",sans-serif',
    },
  }),
};

export default styles;
