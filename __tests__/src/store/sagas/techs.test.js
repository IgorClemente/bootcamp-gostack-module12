import { runSaga } from "redux-saga";

import api from "../../../../src/services/api";
import MockAdapter from "axios-mock-adapter";

import {
  getTechsSuccess,
  getTechsFailure
} from "../../../../src/store/modules/techs/actions";

import { getTechs } from "../../../../src/store/modules/techs/sagas";

const apiMock = new MockAdapter(api);

describe("Techs sagas", () => {
  it("should be able to fetch techs", async () => {
    const dispatch = jest.fn();

    apiMock.onGet("techs").reply(200, ["Node.js"]);

    await runSaga({ dispatch }, getTechs).toPromise();

    expect(dispatch).toHaveBeenCalledWith(getTechsSuccess(["Node.js"]));
  });

  it("should fail when api return error", async () => {
    const dispatch = jest.fn();

    apiMock.onGet("techs").reply(500);

    await runSaga({ dispatch }, getTechs).toPromise();

    expect(dispatch).toHaveBeenCalledWith(getTechsFailure());
  });
});
