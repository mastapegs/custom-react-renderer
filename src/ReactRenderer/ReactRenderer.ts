import Reconciler, { HostConfig } from "react-reconciler";

type Type = any;
type Props = any;
type Container = any;
type Instance = any;
type TextInstance = any;
type SuspenseInstance = any;
type HydratableInstance = any;
type PublicInstance = any;
type HostContext = any;
type UpdatePayload = any;
type _ChildSet = any;
type TimeoutHandle = any;
type NoTimeout = any;

type OpaqueHandle = any;

const hostConfig: HostConfig<
  Type,
  Props,
  Container,
  Instance,
  TextInstance,
  SuspenseInstance,
  HydratableInstance,
  PublicInstance,
  HostContext,
  UpdatePayload,
  _ChildSet, // TODO Placeholder for undocumented API
  TimeoutHandle,
  NoTimeout
> = {
  supportsMutation: true,

  createInstance(
    type: Type,
    props: Props,
    rootContainer: Container,
    hostContext: HostContext,
    internalHandle: OpaqueHandle
  ): Instance {
    // eslint-disable-next-line no-console
    console.log("in createInstance");
    // eslint-disable-next-line no-console
    console.log({ type, props, rootContainer, hostContext, internalHandle });
  },

  createTextInstance(
    text: string,
    rootContainer: Container,
    hostContext: HostContext,
    internalHandle: OpaqueHandle
  ): TextInstance {
    // eslint-disable-next-line no-console
    console.log("in createTextInstance");
    // eslint-disable-next-line no-console
    console.log({ text, rootContainer, hostContext, internalHandle });
  },
};

const reconciler = Reconciler(hostConfig);

const ReactRenderer = {
  render(component: any, container: any) {
    const root = reconciler.createContainer(container, 0, false, null);
    reconciler.updateContainer(component, root, null);
  },
};

export default ReactRenderer;
