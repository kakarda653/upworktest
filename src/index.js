import React, {Component} from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {render} from "react-dom";
import styled from "styled-components";

import Hello from "./Hello";
import {chunk, range} from "lodash";

const BoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const BoxDes = styled.div`
  height: 100px;
  background: yellow;
  width: 100%;
  margin-bottom: 15px
`;

const LINE_POSITION = {
  UNDER_FIRST_LINE: 0,
  UNDER_SECOND_LINE: 1,
  HIDDEN: 2,
};

class App extends Component {
  state = {lineDisplayed: LINE_POSITION.HIDDEN};

  handleBoxClick = (i) => {
    return () => this.setState({lineDisplayed: i < 4 ? LINE_POSITION.UNDER_FIRST_LINE : LINE_POSITION.UNDER_SECOND_LINE});
  };

  renderBoxes = () => {
    return chunk(range(0, 7), 4).map((l, il) => {
      return (
        <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap:'wrap'
        }} key={il}>
          {l.map(i => <Hello name={i + 1} key={i} onClick={this.handleBoxClick(i)}/>)}
          {il === this.state.lineDisplayed && <BoxDes>This is Box description</BoxDes>}
        </div>
      );
    });
  };

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <BoxContainer>{this.renderBoxes()}</BoxContainer>
        </div>
      </MuiThemeProvider>
    );
  }
}

render(<App/>, document.getElementById("root"));
