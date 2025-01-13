import { Action } from "redux";

export type State = {
  isLoading: boolean;
  data?: unknown;
};

export interface PayloadAction<TPayload = unknown> extends Action {
  payload?: TPayload;
}
