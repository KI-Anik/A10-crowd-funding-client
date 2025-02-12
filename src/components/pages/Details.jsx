import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'
import { AuthContext } from "../provider/AuthProvider";

const Details = () => {
  const data = useLoaderData()
  const { title, description, amount, image, date } = data
  const { user } = useContext(AuthContext)
  const [isDisabled, setIsDisabled] = useState(false)

  useEffect(() => {
    if (new Date(date) <= new Date()) {
      setIsDisabled(true)
       Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You missed the deadline",
      });
    }
  }, [date])

  const handleDonateBtn = () => {

    Swal.fire({
      title: 'Enter Your Amount',
      html: `
      <input type= "number" id="donation" class="swal2-input" placeholder= 'Enter your amount'>
    `,
      showCancelButton: true,
      confirmButtonColor: '#DD6B55',
      confirmButtonText: 'Donate',
      preConfirm: () => {
        const donation = Swal.getPopup().querySelector('#donation').value;
        const donationInt = parseInt(donation)
        if (donationInt < amount) {
          Swal.showValidationMessage(`min amount is $${amount}`);
        }
        const obj = { title: title, description: description, image: image, donation: donationInt, email: user?.email };
        return obj
      }
    }).then((result) => {
      if (result.value.donation > amount) {
        const obj = (result.value)
        fetch('https://a10-crowd-funding.vercel.app/donars', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(obj)
        })
          .then(res => res.json())
          .then(data => {
            if (data.acknowledged) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "taken",
                showConfirmButton: false,
                timer: 1500
              });
            }
          })
      }
    });

  }

  return (
    <div className="hero bg-base-200 ">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={image}
          className="max-w-sm rounded-lg shadow-2xl" />
        <div className="space-y-4">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-4">
            {description}
          </p>
          <div className="flex justify-evenly">
            <p className="text-xl font-semibold">Min Donation amount is: ${amount}</p>
            <p className="text-xl font-semibold">Deadline : {date}</p>
          </div>
          {

          }
          <button onClick={handleDonateBtn}
            disabled={isDisabled}
            className="btn btn-primary">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;