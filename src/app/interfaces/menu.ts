export interface SubMenuInterface {
  name: string;
  link: string
}

export interface MenuInterface {
  name: string;
  link: string;
  subMenu?: SubMenuInterface[]
}
