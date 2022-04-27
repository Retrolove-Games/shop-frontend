export type ComponentProps = {
  toggleSidebar: () => void;
  isSidebarOpened: boolean;
  basketCount: number;
};

export type ComponentType = React.VFC<ComponentProps>;
