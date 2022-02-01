import { ActionType } from "../action-types";

interface SearchPackagesAction {
  type: ActionType.SEARCH_PACKAGES;
}

interface SearchPackagesSuccessAction {
  type: ActionType.SEARCH_PACKAGES_SUCCESS;
  payload: string[];
}

interface SearchPackagesErrorAction {
  type: ActionType.SEARCH_PACKAGES_ERROR;
  payload: string;
}

export type Action =
  | SearchPackagesAction
  | SearchPackagesSuccessAction
  | SearchPackagesErrorAction;
