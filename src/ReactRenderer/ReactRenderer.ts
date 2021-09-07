import Reconciler, { HostConfig } from "react-reconciler";

type OpaqueHandle = any;

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

  appendInitialChild(
    parentInstance: Instance,
    child: Instance | TextInstance
  ): void {
    // eslint-disable-next-line no-console
    console.log("in appendInitialChild");
    // eslint-disable-next-line no-console
    console.log({ parentInstance, child });
  },

  finalizeInitialChildren(
    instance: Instance,
    type: Type,
    props: Props,
    rootContainer: Container,
    hostContext: HostContext
  ): boolean {
    // eslint-disable-next-line no-console
    console.log("in finalizeInitialChildren");
    // eslint-disable-next-line no-console
    console.log({ instance, type, props, rootContainer, hostContext });
    return false;
  },

  prepareUpdate(
    instance: Instance,
    type: Type,
    oldProps: Props,
    newProps: Props,
    rootContainer: Container,
    hostContext: HostContext
  ): UpdatePayload | null {
    // eslint-disable-next-line no-console
    console.log("in prepareUpdate");
    // eslint-disable-next-line no-console
    console.log({
      instance,
      type,
      oldProps,
      newProps,
      rootContainer,
      hostContext,
    });
  },

  shouldSetTextContent(type: Type, props: Props): boolean {
    // eslint-disable-next-line no-console
    console.log("in shouldSetTextContent");
    // eslint-disable-next-line no-console
    console.log({ type, props });
    return false;
  },

  getRootHostContext(rootContainer: Container): HostContext | null {
    // eslint-disable-next-line no-console
    console.log("in getRootHostContext");
    // eslint-disable-next-line no-console
    console.log({ rootContainer });
    return null;
  },

  getChildHostContext(
    parentHostContext: HostContext,
    type: Type,
    rootContainer: Container
  ): HostContext {
    // eslint-disable-next-line no-console
    console.log("in getChildHostContext");
    // eslint-disable-next-line no-console
    console.log({ parentHostContext, type, rootContainer });
    return null;
  },

  getPublicInstance(instance: Instance | TextInstance): PublicInstance {
    // eslint-disable-next-line no-console
    console.log("in getPublicInstance");
    // eslint-disable-next-line no-console
    console.log({ instance });
    return null;
  },

  prepareForCommit(containerInfo: Container): Record<string, any> | null {
    // eslint-disable-next-line no-console
    console.log("in prepareForCommit");
    // eslint-disable-next-line no-console
    console.log({ containerInfo });
    return null;
  },

  resetAfterCommit(containerInfo: Container): void {
    // eslint-disable-next-line no-console
    console.log("in resetAfterCommit");
    // eslint-disable-next-line no-console
    console.log({ containerInfo });
  },

  preparePortalMount(containerInfo: Container): void {
    // eslint-disable-next-line no-console
    console.log("in preparePortalMount");
    // eslint-disable-next-line no-console
    console.log({ containerInfo });
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
