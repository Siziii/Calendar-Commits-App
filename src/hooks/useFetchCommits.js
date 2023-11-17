import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchCommits = (owner, repo, currentMonth) => {
    const [commitData, setCommitData] = useState([]);
    const [isRepoValid, setIsRepoValid] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const sinceDate = currentMonth.startOf('month').toISODate();
            const untilDate = currentMonth.endOf('month').toISODate();

            const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/commits`, {
                params: {
                    since: sinceDate,
                    until: untilDate,
                },
            });
            setCommitData(response.data);
            setIsRepoValid(true);
        }catch (error) {
            setCommitData([]);
            setIsRepoValid(false);
            console.error('Error fetching commits:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [owner, repo, currentMonth]);

    return { commitData, isRepoValid, isLoading };
};

export default useFetchCommits;
