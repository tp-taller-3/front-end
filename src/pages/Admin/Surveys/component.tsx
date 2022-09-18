import React, { FunctionComponent, useState } from "react";
import { Window } from "$components/Window";
import { SurveyDetail } from "./SurveyDetail";
import { SurveyList } from "./SurveyList";
import styles from "./styles.module.scss";
import { ISurvey } from "$interfaces/Survey";

export const Dashboard: FunctionComponent<IDashboardProps> = ({
  loading,
  selectedSurvey,
  setSelectedSurvey,
  surveys,
  fetchMore,
  shouldFetchMore,
  refetchSurveys
}) => {
  const [loadingStatusUpdate, setLoadingStatusUpdate] = useState(false);

  return (
    <Window width="fullWidth" desktopOnly>
      <div className={styles.mainContent}>
        <SurveyList
          loading={loadingStatusUpdate || loading}
          surveys={loadingStatusUpdate ? [] : surveys}
          selectedSurvey={selectedSurvey}
          onSelectSurvey={setSelectedSurvey}
          fetchMore={fetchMore}
          shouldFetchMore={shouldFetchMore}
          refetchSurveys={refetchSurveys}
        />
        <SurveyDetail
          setLoadingStatusUpdate={setLoadingStatusUpdate}
          selectedSurvey={loadingStatusUpdate ? undefined : selectedSurvey}
          onStatusUpdate={() => setSelectedSurvey(undefined)}
        />
      </div>
    </Window>
  );
};

interface IDashboardProps {
  loading: boolean;
  selectedSurvey?: ISurvey;
  setSelectedSurvey: (survey?: ISurvey) => void;
  surveys?: ISurvey[];
  fetchMore?: () => void;
  shouldFetchMore?: boolean;
  refetchSurveys: () => Promise<void>;
}
