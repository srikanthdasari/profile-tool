import { useEffect, useState } from 'react';
import { useStore } from './../store/store';
import { GenericGetAction } from './../actions/GenericAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { REPO_FETCH_ERROR, REPO_FETCH_INPROGRESS, REPO_FETCH_SUCCESS } from '../constants/ActionTypes';
import ItemRow from './ItemRow';

const Dashboard = () => {
    const { state, dispatch } = useStore();
    const [userProfile, setUserProfile] = useState({});
    const [repos, setRepos] = useState([]);
    useEffect(() => {
        if (state.userProfile) {
            setUserProfile(state.userProfile);
            if (state.userProfile.repos_url) {
                const actionType = {
                    InProgress: REPO_FETCH_INPROGRESS,
                    Success: REPO_FETCH_SUCCESS,
                    Error: REPO_FETCH_ERROR
                };
                GenericGetAction(state.userProfile.repos_url, actionType, dispatch);
            }
        }
    }, [state.userProfile]);

    useEffect(() => {
        if (state.repos) {
            setRepos(state.repos);
        }
    }, [state.repos]);
    return (<main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* <!-- Replace with your content --> */}
            <div className="px-4 py-6 sm:px-0">
                {/* <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div> */}
                <div class="container mt-5">
                    <div class="md:flex">
                        <div class="flex-1 text-gray-700 text-center bg-gray-200 px-5 py-5 m-2 rounded-lg shadow-xl">
                            <div class="lg:flex lg:items-container">
                                <div class="lg:flex-shrink-0">
                                    <img src={userProfile.avatar_url} alt={userProfile.login} class="rounded-lg lg:w-64 border-gray-300" />
                                    <div class="uppercase tracking-wide text-sm text-indigo-600 font-bold">
                                        {userProfile.login}
                                    </div>
                                </div>
                                <div class="mt-4 lg:mt-0 lg:ml-6">
                                    {
                                        repos.map(x => <ItemRow key={x.id} icon={['fab', 'git-alt']} title={x.full_name} link={x.html_url} description={x.description} />)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- /End replace --> */}
        </div>
    </main>)
}

export default Dashboard;