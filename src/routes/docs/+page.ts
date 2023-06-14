import type { DocumentationCommit, DocUpdate } from '../../lib/types';
import type { PageLoad } from './$types';

const GITHUB_URL = "https://api.github.com/repos/wharfkit/docs/commits"

export const load = (async () => {
    // Get list of commits from GitHub API
    const res = await fetch(GITHUB_URL);
    const data = await res.json();
    
    const allUpdates: DocumentationCommit[] = data.map((commit: any) => {
        const date = commit.commit.committer.date.split('T')[0];
        const author = commit.commit.author.name;
        const message = commit.commit.message;
        return { date, author, message};
    });

    // Group commits by date
    const grouped: DocUpdate[] = allUpdates.reduce((acc: DocUpdate[], commit: DocumentationCommit) => {
        const last = acc[acc.length - 1];
        if (last && last.date === commit.date) {
            last.commits.push(commit);
        } else {
            acc.push({ date: commit.date, commits: [commit] });
        }
        return acc;
    }, []);
           
    // Set page metadata
    const meta = {
        title: 'Docs',
    };

    return {
        meta,
        updates: grouped,
    };
}) satisfies PageLoad;