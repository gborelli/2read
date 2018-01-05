import styled from 'styled-components';
import { withTheme } from 'material-ui/styles';

const StyledLink = styled.a`
  margin: 0 .5em 0 0;
  line-height: 1.5em;
  color: ${props => props.theme.palette.accent1Color};
`;

const Link = withTheme()(StyledLink);
export default Link; // Let's get the theme as a property
