import React, { FunctionComponent, useState } from "react";
import { Dashboard } from "./component";
import { IAdminTasksFilter, TAdminTask } from "$interfaces/AdminTask";
import { useAdminTasks } from "$hooks/queries";
import { Redirect } from "$components/Redirect";
import { RoutesBuilder } from "$models/RoutesBuilder";
import { APPLICANT, COMPANY } from "$typenames";
import { find } from "lodash";
import { ApprovalStatus } from "$interfaces/ApprovalStatus";

export const DashboardContainer: FunctionComponent = () => {
  const [selectedTask, setSelectedTask] = useState<TAdminTask>();
  const [filter, setFilter] = useState<IAdminTasksFilter>({
    adminTaskTypes: [APPLICANT, COMPANY],
    statuses: [ApprovalStatus.pending]
  });
  const response = useAdminTasks(filter);
  if (response.error) return <Redirect to={RoutesBuilder.public.internalServerError()}/>;
  const result = response.data?.getAdminTasks;
  const adminTasks = result?.tasks;

  return (
    <Dashboard
      refetchGetAdminTasks={response.refetch}
      adminTasks={adminTasks}
      selectedTask={find(adminTasks, ["uuid", selectedTask?.uuid])}
      setSelectedTask={setSelectedTask}
      filter={filter}
      setFilter={setFilter}
      fetchMore={response.fetchMore}
      shouldFetchMore={result?.shouldFetchMore || false}
    />
  );
};
