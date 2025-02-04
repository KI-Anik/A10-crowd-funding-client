/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Table = ({ SingleCampData, idx }) => {
    const {_id, title, type, amount, date, image } = SingleCampData;
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
                <td>
                <div className="badge badge-secondary">
                                        {
                                            new Date(date) >= new Date() ? 'Ongoing' : 'End'
                                        }
                                    </div>
                </td>
                <th>
                    <Link to={`/auth/details/${_id}`} className="btn btn-accent btn-md">See More</Link>
                </th>
            </tr>
        </>
    );
};

export default Table;