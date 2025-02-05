import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Table from "../table";

const MyCamp = () => {
    const allCampData = useLoaderData()
    const { user } = useContext(AuthContext)
    const filter = allCampData.filter(camp => camp.email == user?.email)
    console.log(filter)
    if (!filter) {
        return <p>No data</p>
    }
    return (
        <div className="overflow-x-auto">
            <h1 className="font-bold text-3xl text-cyan-500 text-center">All Campaign</h1>
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
                        filter.length === 0 ? <p className="text-4xl text-red-500 font-semibold">No Data Found</p>
                            :
                            filter.map((SingleCampData, idx) => <Table
                                key={SingleCampData._id}
                                idx={idx}
                                SingleCampData={SingleCampData}
                            ></Table>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyCamp;