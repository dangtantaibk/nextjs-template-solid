export type SubMenu = {
  id: number;
  title: string;
  newTab: Boolean;
  path: string;
};

export type Menu = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  submenu?: SubMenu[];
};
