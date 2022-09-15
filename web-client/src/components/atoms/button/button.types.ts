import { ButtonHTMLAttributes } from "react";

export enum ButtonTypeEnum {
  Primary = "PRIMARY",
  Secondary = "SECONDARY",
  Link = "LINK",
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  preset?: ButtonTypeEnum;
  loading?: boolean;
};
