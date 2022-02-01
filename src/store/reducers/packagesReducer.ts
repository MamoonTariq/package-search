import { ActionType } from "../action-types";
import { Action } from "../actionTypes";

interface PackagesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = { loading: false, error: null, data: [] };
const reducer = (
  state: PackagesState = initialState,
  action: Action
): PackagesState => {
  switch (action.type) {
    case ActionType.SEARCH_PACKAGES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_PACKAGES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_PACKAGES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
