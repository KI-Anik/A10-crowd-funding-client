/* eslint-disable react/prop-types */

import { Link, useLocation } from "react-router-dom";

const Table = ({ SingleCampData, idx }) => {
    const { _id, title, type, amount, date, image } = SingleCampData;
    const location = useLocation()
    const isMyCampPage = location.pathname === '/auth/myCamp'
    return (
        <>
            <tr >
                <td className="font-semibold"> {idx + 1}</td>
                <td className="h-16 overflow-hidden flex items-center justify-center">
                    <img
                        className="h-full  rounded-b-field mx-auto "
                        src={image}
                        alt="photo" />
                </td>
                <td><div className="font-bold">{title}</div></td>
                <td><div className="font-bold">{type}</div></td>
                <td><div className="font-bold"> ${amount}</div></td>
                {/* <td>
                    <div className="badge badge-secondary">
                        {
                            new Date(date) >= new Date() ? 'Ongoing' : 'End'
                        }
                    </div>
                </td>
                <td>
                    {
                        isMyCampPage ? <div className="flex justify-evenly">
                            <button className="btn"> Update</button>
                            <button className="btn"> Delete</button>
                        </div>
                            :
                            <Link to={`/auth/details/${_id}`} className="btn btn-accent btn-md">See More</Link>
                    }
                </td> */}

                {
                    isMyCampPage ? <>
                        <td>{date}</td>
                        <td>
                            <div className="flex justify-evenly">
                                <button className="btn"> Update</button>
                                <button className="btn"> Delete</button>
                            </div>
                        </td>
                    </>
                        :
                        <>
                            <td>
                                <div className="badge badge-secondary">
                                    {
                                        new Date(date) >= new Date() ? 'Ongoing' : 'End'
                                    }
                                </div>
                            </td>
                            <td>
                            <Link to={`/auth/details/${_id}`} className="btn btn-accent btn-md">See More</Link>
                            </td>
                        </>
                }
            </tr>
        </>
    );
};

export default Table;