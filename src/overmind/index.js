import * as actions from "./actions";
import * as effects from "./effects";

import { createOvermind } from "overmind";
import { createPlugin } from "overmind-vue";
import state from "./state";

const overmind = createOvermind({
  actions,
  effects,
  state
});

export const OvermindPlugin = createPlugin(overmind);
