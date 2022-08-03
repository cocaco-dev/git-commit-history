import { useState } from 'react'
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import ErrorMessage from '../atoms/ErrorMessage';
const Form = ({ getCommits, owner, repository, error }) => {
    const [formData, setFormData] = useState({
        username: owner ||'',
        repo: repository || '',
    })
    const { username, repo } = formData;
    const onSubmit = async (e) => {
        e.preventDefault();
        await getCommits(username, repo);
    }
    return (
        <div className='min-h-screen bg-gray-100 flex items-center justify-center flex-col'>
            <ErrorMessage message={error} />
            <div className="flex items-center justify-center">
                <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
                    <h3 className="text-2xl font-bold text-center">Github Commit History</h3>
                    <form onSubmit={onSubmit}>
                        <div className="mt-4">
                            <Input name='username' value={username} onChange={(e) => setFormData({...formData, username: e.target.value })} labelText="Github Username" placeHolder="Enter Github Username" />
                            <Input customCss='mt-3' name="repository" value={repo} onChange={(e) => setFormData({...formData, repo: e.target.value })} labelText="Github Repository" placeHolder="Enter Github Repository" />
                            <div className="flex items-baseline justify-between">
                                <Button buttonName="Enter" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;
