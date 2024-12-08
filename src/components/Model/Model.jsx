export default function Modal({ onClose, onSubmit }) {
    const [mobileNumber, setMobileNumber] = useState("");
  
    return (
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
          <h2 className="text-xl font-semibold mb-4 text-black">
            Enter Your Mobile Number
          </h2>
          <input
            type="number"
            placeholder="Enter mobile number"
            className="border p-2 w-full mb-4 rounded text-black"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          <div className="flex justify-end gap-4">
            <button className="bg-gray-300 px-4 py-2 rounded" onClick={onClose}>
              Cancel
            </button>
            <button
              className="bg-blue-700 text-white px-4 py-2 rounded"
              onClick={() => onSubmit(mobileNumber)}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }