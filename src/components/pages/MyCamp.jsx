import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Table from "../table";

const MyCamp = () => {
    const allCampData = useLoaderData()
    const { user } = useContext(AuthContext)
    const filter = allCampData.filter(camp => camp.email == user?.email)
    const [remaining,setRemaining] = useState(filter)
    return (
        <div className="overflow-x-auto">
            <h1 className="font-bold text-3xl text-cyan-500 text-center">My Campaign</h1>
            {
                filter != 0 ? <>
                    <table className="table text-center mt-5">
                        {/* head */}
                        <thead>
                            <tr className="text-lg">
                                <th> No </th>
                                <th> image </th>
                                <th>Title</th>
                                <th>Type</th>
                                <th>Min Donation</th>
                                <th>Deadline</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {/* row */}
                        <tbody >
                            {
                                remaining.map((SingleCampData, idx) => <Table
                                    key={SingleCampData._id}
                                    idx={idx}
                                    SingleCampData={SingleCampData}
                                    remaining={remaining}
                                    setRemaining={setRemaining}
                                ></Table>)
                            }
                        </tbody>
                    </table>
                </>
                    :
                    <div className="p-5">
                        <p className="text-5xl text-red-500 font-bold text-center">No Data found</p>
                    </div>

            }
        </div>
    );
};

export default MyCamp;