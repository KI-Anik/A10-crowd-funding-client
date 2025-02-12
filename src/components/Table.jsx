/* eslint-disable react/prop-types */

// import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Swal from 'sweetalert2'

const Table = ({ SingleCampData, idx, remaining, setRemaining }) => {
    const { _id, title, type, amount, date, image } = SingleCampData;
    const location = useLocation()
    const isMyCampPage = location.pathname === '/auth/myCamp'

    const handleDelete = id => {
        console.log(id)

        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        })
        .then((result) => {
            if (result.isConfirmed){

        fetch(`http://localhost:4000/campaigns/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log('deleted data', data)
                if(data.deletedCount){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your campaign has been deleted.",
                        icon: "success",
                    });
                }
                const updateData = remaining.filter(camp => camp._id != id)
                setRemaining(updateData)
            })
        }
    })

    }
    
    // console.log('after', camState)
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

                {
                    isMyCampPage ? <>
                        <td>{date}</td>
                        <td>
                            <div className="flex justify-evenly">
                                <button className="btn"> Update</button>
                                <button onClick={() => handleDelete(_id)} className="btn"> Delete</button>
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