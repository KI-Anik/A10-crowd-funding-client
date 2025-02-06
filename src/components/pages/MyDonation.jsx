import { useContext, } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const MyDonation = () => {
    const data = useLoaderData()
    console.log(data)
    const { user } = useContext(AuthContext)
    const validation = data.filter(data => data.email == user?.email)
    return (
        <section className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-8 mx-5'>
            {
                validation.donation === 0 ?
                    <div className="p-5">
                        <p className="text-5xl text-red-500 font-bold">No Data found</p>
                    </div>
                    :
                    validation.map(data =>

                        <div key={data._id} className="card bg-base-100 shadow-md ">
                            <figure className="h-48 w-full overflow-hidden flex items-center justify-center ">
                                <img
                                    className='h-full w-auto object-cover'
                                    src={data.image}
                                    alt="image" />
                            </figure>
                            <div className="card-body space-y-4">
                                <h2 className="card-title">
                                    {data.title}
                                </h2>
                                <p>{data.description}</p>
                                <div className="card-actions ">
                                    <div className="badge badge-outline"> Your donation is: ${data.donation}</div>
                                </div>
                            </div>
                        </div>
                    )
            }
        </section>
    );
};

export default MyDonation;
