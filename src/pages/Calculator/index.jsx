import React from "react";

import TeamA from "../../components/TeamA/index.jsx";
import TeamB from "../../components/TeamB/index.jsx";
import { Container } from "./style";

const Calculator = () => {
  return (
    <Container>
      <div>
        <TeamA />
      </div>
      <div>
        <TeamB />
      </div>
    </Container>
  );
};

export default Calculator;
