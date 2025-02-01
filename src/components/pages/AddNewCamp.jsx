
const AddCampaign = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const type = form.type.value;
        const amount = form.amount.value;
        const date = form.date.value;
        const image = form.image.value;
        console.log(title, description, type, amount, image, date)
    }
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md ">
            <h2 className="text-2xl font-bold mb-6 text-cyan-500 ">Create a New Campaign</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="title">
                        Campaign Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        required
                        placeholder="Enter Campaign title"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        rows="3"
                        required
                        placeholder="describe the purpose and goal..."
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="type">
                        Campaign Type
                    </label>
                    <select name="type" id="type"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    >
                        <optgroup label="Select a type">
                            <option value="personal issue">personal issue</option>
                            <option value="business">business</option>
                            <option value="startup">startup</option>
                            <option value="creative ideas">creative ideas</option>
                        </optgroup>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="amount">
                        Minimum Donaton Amount
                    </label>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        required
                        placeholder="set an amount of number"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="date">
                        End Date
                    </label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        required
                        placeholder=""
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="image">
                        Campaign Image
                    </label>
                    <input
                        type="url"
                        id="image"
                        name="image"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        placeholder="use image URL"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="title">
                        User Name
                    </label>
                    <input
                        // defaultValue={user?.email}

                        type="text"
                        id="name"
                        name="name"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        required
                        placeholder="Enter Campaign title"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="title">
                        User Email
                    </label>
                    <input
                        // defaultValue={user?.displayName}
                        type="email"
                        id="email"
                        name="email"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        required
                        placeholder="Enter Campaign title"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                >
                    Create Campaign
                </button>
            </form>
        </div>
    );
};

export default AddCampaign;
