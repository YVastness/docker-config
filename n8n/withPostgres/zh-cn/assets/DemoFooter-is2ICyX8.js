import LogsPanel from "./LogsPanel-Brrgxl9Z.js";
import { d as defineComponent, a4 as useWorkflowsStore, x as computed, e as createBlock, f as createCommentVNode, g as openBlock } from "./index-DUUd9-Sl.js";
import "./RunData-BX2p5pRr.js";
import "./FileSaver.min-4okOAm4L.js";
import "./useKeybindings-keX0_gQ8.js";
import "./useExecutionHelpers-DuyQFVy7.js";
import "./AnimatedSpinner-DUe9ERrc.js";
import "./ActionDropdown-9rPLnDyU.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DemoFooter",
  setup(__props) {
    const workflowsStore = useWorkflowsStore();
    const hasExecutionData = computed(() => workflowsStore.workflowExecutionData);
    return (_ctx, _cache) => {
      return hasExecutionData.value ? (openBlock(), createBlock(LogsPanel, {
        key: 0,
        "is-read-only": true
      })) : createCommentVNode("", true);
    };
  }
});
export {
  _sfc_main as default
};
