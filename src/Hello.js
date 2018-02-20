import React from "react";
import {Card, CardHeader, CardText} from "material-ui";
import {Circle} from "rc-progress";
import styled from "styled-components";

const Box = styled(Card)`
  width: 23%;
  min-width: 240px;
  margin-bottom: 20px;
  height: fit-content;
`;

const Hello = ({name, onClick}) => (
  <Box
    containerStyle={{
      width: "100%",
      cursor: "pointer",
      paddingBottom: 0
    }}
    onClick={onClick}
  >
    <CardHeader title={name}/>
    <CardText>
      <Circle percent={100} strokeWidth="10" strokeColor="#0000ff"/>
    </CardText>
  </Box>
);

export default Hello;