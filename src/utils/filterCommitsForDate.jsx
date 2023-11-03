import { DateTime } from 'luxon';

export const filterCommitsForDate = (commitData, selectedDate) => {
  if (!selectedDate) {
    return [];
  }

  return commitData.filter((commit) => {
    const commitDate = DateTime.fromISO(commit.commit.author.date);
    return commitDate.hasSame(selectedDate, 'day');
  });
};
