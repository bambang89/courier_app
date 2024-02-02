import { keys } from 'lodash';
import { Col, Row, Grid } from 'react-native-easy-grid';

import Body from './Body';
import Container from './Container';
import Content from './Content';
import Header from './Header';
import Label from './Label';
import Left from './Left';
import Right from './Right';
import Title from './Title';

// Theme
export {
    Col, 
    Row, 
    Grid,
    Body,
    Container,
    Content,
    Header,
    Label,
    Left,
    Right,
    Title
};

const mapPropsToStyleNames = (styleNames, props) => keys(props);

export { mapPropsToStyleNames };