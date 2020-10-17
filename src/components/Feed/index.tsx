import React, { FunctionComponent } from "react";
import { List } from "$components/List";
import { Card } from "$components/Card";
import { Offer } from "./Offer";
import { EmptyList } from "./EmptyList";
import { IOffer } from "$interfaces/Offer";
import styles from "./styles.module.scss";
import { Headline } from "$components/Headline";

export const Feed: FunctionComponent<IFeedProps> = ({
  title,
  offers,
  onCardClick,
  fetchMore,
  shouldFetchMore,
  loading,
  className,
  withStatusLabels,
  emptyFeedAction,
  emptyTranslationSource
}) => (
  <div className={className}>
    {title && (
      <Headline color="dark" className={styles.title}>
        {title}
      </Headline>
    )}
    <List
      list={offers}
      fetchMore={fetchMore}
      fetchMoreClassName={styles.fetchMore}
      shouldFetchMore={shouldFetchMore}
      loading={loading}
      {...(title && { withHeading: true })}
      emptyListComponent={
        <EmptyList emptyTranslationSource={emptyTranslationSource} onClick={emptyFeedAction} />
      }
    >
      {offer => (
        <Card
          key={offer.uuid}
          className={styles.cardContainer}
          onClick={() => onCardClick(offer.uuid)}
        >
          <Offer data={offer} withStatusLabels={withStatusLabels} />
        </Card>
      )}
    </List>
  </div>
);

interface IFeedProps {
  withStatusLabels: boolean;
  title?: string;
  offers: IOffer[];
  onCardClick: (uuid: string) => void;
  fetchMore?: () => void;
  shouldFetchMore?: boolean;
  loading: boolean;
  className?: string;
  emptyFeedAction: () => void;
  emptyTranslationSource: string;
}
