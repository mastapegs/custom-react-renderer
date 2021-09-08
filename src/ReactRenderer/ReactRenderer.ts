import Reconciler, { HostConfig } from "react-reconciler";

type OpaqueHandle = any;

type Type = string;
type Props = { [key: string]: any };
type Container = Document | Element;
type Instance = Element;
type TextInstance = Text;

type SuspenseInstance = any;
type HydratableInstance = any;
type PublicInstance = any;
type HostContext = any;
type UpdatePayload = any;
type _ChildSet = any;
type TimeoutHandle = any;
type NoTimeout = number;

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
  supportsPersistence: false,
  noTimeout: -1,
  isPrimaryRenderer: true,
  supportsHydration: false,

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

    const element = document.createElement(type) as Element;
    element.className = props.className;

    return element;
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

    const textElement = document.createTextNode(text);

    return textElement;
  },

  appendInitialChild(
    parentInstance: Instance,
    child: Instance | TextInstance
  ): void {
    // eslint-disable-next-line no-console
    console.log("in appendInitialChild");
    // eslint-disable-next-line no-console
    console.log({ parentInstance, child });

    parentInstance.appendChild(child);
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

  now(): number {
    // eslint-disable-next-line no-console
    console.log("in now");
    return 0;
  },

  scheduleTimeout(
    // eslint-disable-next-line no-unused-vars
    fn: (...args: unknown[]) => unknown,
    delay?: number
  ): TimeoutHandle {
    // eslint-disable-next-line no-console
    console.log("in scheduleTimeout");
    // eslint-disable-next-line no-console
    console.log({ fn, delay });
  },

  cancelTimeout(id: TimeoutHandle): void {
    // eslint-disable-next-line no-console
    console.log("in cancelTimeout");
    // eslint-disable-next-line no-console
    console.log({ id });
  },

  appendChild(parentInstance: Instance, child: Instance | TextInstance): void {
    // eslint-disable-next-line no-console
    console.log("in appendChild");
    // eslint-disable-next-line no-console
    console.log({ parentInstance, child });

    parentInstance.appendChild(child);
  },

  appendChildToContainer(
    container: Container,
    child: Instance | TextInstance
  ): void {
    // eslint-disable-next-line no-console
    console.log("in appendChildToContainer");
    // eslint-disable-next-line no-console
    console.log({ container, child });

    container.appendChild(child);
  },

  insertBefore(
    parentInstance: Instance,
    child: Instance | TextInstance,
    beforeChild: Instance | TextInstance | SuspenseInstance
  ): void {
    // eslint-disable-next-line no-console
    console.log("in insertBefore");
    // eslint-disable-next-line no-console
    console.log({ parentInstance, child, beforeChild });
  },

  insertInContainerBefore(
    container: Container,
    child: Instance | TextInstance,
    beforeChild: Instance | TextInstance | SuspenseInstance
  ): void {
    // eslint-disable-next-line no-console
    console.log("in insertInContainerBefore");
    // eslint-disable-next-line no-console
    console.log({ container, child, beforeChild });
  },

  removeChild(
    parentInstance: Instance,
    child: Instance | TextInstance | SuspenseInstance
  ): void {
    // eslint-disable-next-line no-console
    console.log("in removeChild");
    // eslint-disable-next-line no-console
    console.log({ parentInstance, child });
  },

  removeChildFromContainer(
    container: Container,
    child: Instance | TextInstance | SuspenseInstance
  ): void {
    // eslint-disable-next-line no-console
    console.log("in removeChildFromContainer");
    // eslint-disable-next-line no-console
    console.log({ container, child });
  },

  resetTextContent(instance: Instance): void {
    // eslint-disable-next-line no-console
    console.log("in resetTextContent");
    // eslint-disable-next-line no-console
    console.log({ instance });
  },

  commitTextUpdate(
    textInstance: TextInstance,
    oldText: string,
    newText: string
  ): void {
    // eslint-disable-next-line no-console
    console.log("in commitTextUpdate");
    // eslint-disable-next-line no-console
    console.log({ textInstance, oldText, newText });
  },

  commitMount(
    instance: Instance,
    type: Type,
    props: Props,
    internalInstanceHandle: OpaqueHandle
  ): void {
    // eslint-disable-next-line no-console
    console.log("in commitMount");
    // eslint-disable-next-line no-console
    console.log({ instance, type, props, internalInstanceHandle });
  },

  commitUpdate(
    instance: Instance,
    updatePayload: UpdatePayload,
    type: Type,
    prevProps: Props,
    nextProps: Props,
    internalHandle: OpaqueHandle
  ): void {
    // eslint-disable-next-line no-console
    console.log("in commitUpdate");
    // eslint-disable-next-line no-console
    console.log({
      instance,
      updatePayload,
      type,
      prevProps,
      nextProps,
      internalHandle,
    });
  },

  hideInstance(instance: Instance): void {
    // eslint-disable-next-line no-console
    console.log("in hideInstance");
    // eslint-disable-next-line no-console
    console.log({ instance });
  },

  hideTextInstance(textInstance: TextInstance): void {
    // eslint-disable-next-line no-console
    console.log("in hideTextInstance");
    // eslint-disable-next-line no-console
    console.log({ textInstance });
  },

  unhideInstance(instance: Instance, props: Props): void {
    // eslint-disable-next-line no-console
    console.log("in unhideInstance");
    // eslint-disable-next-line no-console
    console.log({ instance, props });
  },

  unhideTextInstance(textInstance: TextInstance, text: string): void {
    // eslint-disable-next-line no-console
    console.log("in unhideTextInstance");
    // eslint-disable-next-line no-console
    console.log({ textInstance, text });
  },

  clearContainer(container: Container): void {
    // eslint-disable-next-line no-console
    console.log("in clearContainer");
    // eslint-disable-next-line no-console
    console.log({ container });
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
