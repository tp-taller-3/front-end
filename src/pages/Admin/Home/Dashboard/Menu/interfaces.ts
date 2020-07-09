import { AdminTaskType, IAdminTasksFilter } from "$interfaces/AdminTask";
import { TRefetchGetAdminTasks } from "$hooks/queries";

export interface IMenuContainerProps {
  filter: IAdminTasksFilter;
  onSelectFilter: (filter: IAdminTasksFilter) => void;
  refetchGetAdminTasks?: TRefetchGetAdminTasks;
}

export interface IMenuProps {
  onFilterByType: (types: AdminTaskType[]) => void;
  filter: IAdminTasksFilter;
}
