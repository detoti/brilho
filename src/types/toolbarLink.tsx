export type ToolbarLink = {
  id: string;
  text: string;
  routerTo: string;
  img: string;
  selected: boolean;
  selectedImg: string;
  nonSelectedImg?: string;
};
