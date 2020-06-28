import React, { FunctionComponent, useState } from "react";
import { Window } from "$components/Window";
import { Menu } from "./Menu";
import { TaskDetail } from "./TaskDetail";
import { TaskList } from "./TaskList";
import styles from "./styles.module.scss";
import { IApprovable } from "$interfaces/Approvable";

const Dashboard: FunctionComponent = () => {
  const [selectedTask, setSelectedTask] = useState<IApprovable>();

  return (
    <Window width="fullWidth">
      <div className={styles.mainContent}>
        <Menu/>
        <TaskList onSelectTask={setSelectedTask}/>
        <TaskDetail
          selectedTask={selectedTask}
          onStatusUpdate={() => setSelectedTask(undefined)}
        />
      </div>
    </Window>
  );
};

export { Dashboard };
