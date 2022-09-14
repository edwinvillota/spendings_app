import { PickEnum } from "@/common/types/pick-enum";

export enum BasicTemplateAlignEnum {
  Top = "TOP",
  Bottom = "BOTTOM",
  Left = "LEFT",
  Right = "RIGHT",
  Center = "CENTER",
}

export interface BasicTemplateProps {
  alignVertical?: PickEnum<
    BasicTemplateAlignEnum,
    | BasicTemplateAlignEnum.Top
    | BasicTemplateAlignEnum.Bottom
    | BasicTemplateAlignEnum.Center
  >;
  alignHorizontal?: PickEnum<
    BasicTemplateAlignEnum,
    | BasicTemplateAlignEnum.Left
    | BasicTemplateAlignEnum.Right
    | BasicTemplateAlignEnum.Center
  >;
}
