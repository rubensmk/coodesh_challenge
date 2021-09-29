import React from 'react';
import Header from '../../components/Header';
import { RiUserSearchFill } from 'react-icons/ri';


const Dashboard = () => {
    return (
        <div>
            <Header />
            <main className="flex justify-center items-center w-full">
                <section className="flex-column mt-20 w-9/12">
                    <p className=" flex justify-center  text-lg font-medium text-left">
                        Opus igitur est dicere possit dura omni specie, "Tu  autem in specie, non videntur, nec<br />omnino res est." Et examine ab eis praecepta eius quae habes, et primo et principaliter."
                    </p>
                    <div className="flex justify-center items-center mt-6">
                        <input type="text" className="border-2 border-gray-300 w-3/6 h-10 p-4" placeholder="Searching" />
                        <RiUserSearchFill size={30} onClick={() => console.log('Searching')} />
                    </div>
                    <table className="table-fixed mt-8 border-2 border-gray-400 w-3/4 mx-auto">
                        <thead className="border-2 border-gray-400 bg-tableBackgroundColor">
                            <tr >
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Birth</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="border-2 border-gray-400">
                            <tr>
                                <td>Adam</td>
                                <td>Male</td>
                                <td>08/12/1994</td>
                                <td>Action?</td>
                            </tr>
                            <tr>
                                <td>Alan</td>
                                <td>Male</td>
                                <td>08/12/1994</td>
                                <td>Action?</td>
                            </tr>
                            <tr>
                                <td>Otis</td>
                                <td>Male</td>
                                <td>08/12/1994</td>
                                <td>Action?</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
        </div>

    )
}

export default Dashboard;