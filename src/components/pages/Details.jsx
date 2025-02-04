import { useLoaderData } from "react-router-dom";

const Details = () => {
    const data = useLoaderData()
    const { title,description, image } = data

    const handleDonateBtn=()=>{

    }
    return (
        <div className="hero bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={image}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6">
        {description}
      </p>
      <button onClick={handleDonateBtn} className="btn btn-primary">Donate Now</button>
    </div>
  </div>
</div>
    );
};

export default Details;