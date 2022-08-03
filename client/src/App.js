import { useState, useEffect } from 'react'
import { getCommitHistory } from './services/api'
import Form from './components/templates/Form'
import Commits from './components/templates/Commits'
function App() {
  console.log(process.env.REACT_APP_BACKEND_API)
  const [commitHistory, setCommitHistory] = useState({
    owner: localStorage.getItem('owner') || '',
    repo: localStorage.getItem('repo') || '',
    showCommits: false,
    error: '',
    commits: []
  })
  const { owner, repo, showCommits, commits, error } = commitHistory

  const getCommits = async (repoOwner, repoName) => {
    try {
      const commitsResponse = await getCommitHistory(repoOwner, repoName)
      if (commitsResponse.error) {
        throw new Error(commitsResponse.message)
      }
      console.log("🚀 ~ file: App.js ~ line 16 ~ getCommits ~ commits", commitsResponse)
      localStorage.setItem('owner', repoOwner)
      localStorage.setItem('repo', repoName)
      setCommitHistory({ ...commitHistory, commits: commitsResponse.data, showCommits: true, owner: repoOwner, repo: repoName, error: '' })
    } catch (error) {
      console.log("🚀 ~ file: App.js ~ line 18 ~ getCommits ~ error", error)
      setCommitHistory({ ...commitHistory, commits: [], error: error.message || 'something went wrong', showCommits: false })
    }
  }
  useEffect(() => {
    if (owner && repo) {
      getCommits(owner, repo)
    }
  }, [])
  if (showCommits && owner && repo) {
    return    <Commits commits={commits} repo={repo} owner={owner} backButton={() => setCommitHistory((prevState) => ({...prevState, showCommits: false}))} />
  }
  return <Form getCommits={getCommits} owner={owner} repository={repo} error={error} />
}

export default App;
