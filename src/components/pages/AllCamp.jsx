import { useLoaderData } from "react-router-dom";
import Table from "../table";
import { useState } from "react";

const AllCamp = () => {
    const initialData = useLoaderData()
    const [allCampData, setAllCampData] = useState(initialData)

    const handleSorting = () => {
        const sortedData = [...allCampData].sort((b,a) => b.amount - a.amount)
        setAllCampData(sortedData)
    }
console.log(allCampData)
    return (
        <div className="overflow-x-auto">
            <h1 className="font-bold text-3xl text-cyan-500 text-center">All Campaign</h1>
            <div className="flex justify-end">
                <button onClick={handleSorting} className="btn btn-neutral p-5">Sort by Price - Descending</button>
            </div>
            {
                allCampData == 0 ? <div className="p-5">
                    <p className="text-5xl text-red-500 font-bold text-center">No Data found</p>
                </div>
                    :
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
                                allCampData.map((SingleCampData, idx) => (<Table
                                    key={SingleCampData._id}
                                    idx={idx}
                                    SingleCampData={SingleCampData}
                                ></Table>))
                            }
                        </tbody>
                    </table>
            }
        </div>
    );
};

export default AllCamp;