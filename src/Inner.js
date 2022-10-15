import { useTheme } from 'styled-components';

export default function Inner(props) {
  //this is not a styled component
  console.log({ props });
  const theme = useTheme();

  return (
    <div
      style={{
        color: theme.colors.dullTxt,
        backgroundColor: `${theme.colors.lighterBg}`,
        fontSize: `${theme.fontSizes.xlarge}rem`,
      }}
    >
      <p>This is the Inner component.</p>
    </div>
  );
}
