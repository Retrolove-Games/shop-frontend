export type ComponentProps = {
  toggleSidebar: () => void;
  isSidebarOpened: boolean;
};

export type ComponentType = React.VFC<ComponentProps>;
