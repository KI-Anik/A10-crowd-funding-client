/* eslint-disable react/prop-types */

const Table = ({ SingleCampData, idx }) => {
    const { title, type, amount, date, image } = SingleCampData;
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
                <td><div className="font-bold text-red-500">{date}</div></td>
                <th>
                    <button className="btn btn-accent btn-md">See More</button>
                </th>
            </tr>
        </>
    );
};

export default Table;