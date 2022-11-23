import React, { FunctionComponent } from "react";
import { TableActions } from "$components/TableActions";
import { IComponentProps } from "./interfaces";
import { DeleteSemester } from "../../../../../components/DeleteSemester";

export const Actions: FunctionComponent<IComponentProps> = ({
  className,
  deleteSemesterLink,
  translations
}) => (
  <TableActions className={className}>
    <DeleteSemester
      link={deleteSemesterLink}
      tooltipMessage={translations.deleteSemesterLinkTooltipMessage}
    />
  </TableActions>
);
