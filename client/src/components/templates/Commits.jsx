import Button from '../atoms/Button';
import Card from '../molecules/Card';
import ErrorMessage from '../atoms/ErrorMessage';
const Commits = ({  error, commits, repo, owner, backButton }) => {

    return (
        <div className='min-h-screen bg-gray-100 flex items-center justify-center flex-col'>
            <ErrorMessage message={error} />
            <img className="w-24 h-24 rounded-full" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="github logo"/>
            <h1 className='text-xl font-bold'>Repo: {repo} / {owner}</h1>
            <div>
                <Button buttonName='Back' onClick={backButton} />
            </div>
            <div className='w-full'>
                {
                    commits.map((commit, i) => (
                        <Card key={i} commitInfo={commit} />
                    ))
                }
            </div>
        </div>
    );
}

export default Commits;
