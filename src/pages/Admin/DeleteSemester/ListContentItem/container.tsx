import React, { FunctionComponent } from "react";
import { ListContentItem } from "./component";
import { IListContentItemContainer } from "./interfaces";

export const ListContentItemContainer: FunctionComponent<IListContentItemContainer> = ({
  semester
}) => {
  return <ListContentItem semester={semester} />;
};
