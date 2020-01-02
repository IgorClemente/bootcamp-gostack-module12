import reducer, {
  INITIAL_STATE
} from "../../../../src/store/modules/techs/reducer";

import * as Techs from "../../../../src/store/modules/techs/actions";

describe("Techs reducer", () => {
  it("ADD_TECH", () => {
    const state = reducer(INITIAL_STATE, Techs.addTech("Node.js"));

    expect(state).toStrictEqual(["Node.js"]);
  });
});
