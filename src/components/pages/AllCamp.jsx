import { useLoaderData } from "react-router-dom";
import Table from "../table";

const AllCamp = () => {
    const allCampData = useLoaderData()

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
                        <th>Status</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        allCampData.length === 0 ? <p className="text-4xl text-red-500 font-semibold">No Data Found</p>
                            :
                            allCampData.map((SingleCampData, idx) => <Table
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

export default AllCamp;