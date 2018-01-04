import styled from 'styled-components';
import muiThemeable from 'material-ui/styles/muiThemeable';

const StyledLink = styled.a`
  margin: 0 .5em 0 0;
  line-height: 1.5em;
  color: ${props => props.muiTheme.palette.accent1Color};
`;

const Link = muiThemeable()(StyledLink);

export default Link;
