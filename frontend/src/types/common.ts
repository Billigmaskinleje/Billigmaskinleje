import { UnknownNodeType } from "@portabletext/react";

export interface IImage {
  alt: string | null;
  asset: {
    url: string;
  };
}

export enum LinkType {
  INTERNAL = "internal",
  EXTERNAL = "external",
}
export enum ButtonType {
  SOLID = "solid",
  OUTLINE = "outline",
}
export interface IButton {
  type: LinkType;
  btnType: ButtonType;
  label: string;
  slug: {
    current: string;
  };
  url: string;
}

export interface IFAQ {
  _key: string;
  question: string;
  answerRaw: UnknownNodeType | UnknownNodeType[];
}
