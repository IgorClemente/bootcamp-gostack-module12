import { put, call } from "redux-saga/effects";

import api from "../../../services/api";

import {
  getTechsSuccess,
  getTechsFailure
} from "../../../store/modules/techs/actions";

export function* getTechs() {
  try {
    const response = yield call(api.get, "/techs");

    yield put(getTechsSuccess(response.data));
  } catch {
    yield put(getTechsFailure());
  }
}
