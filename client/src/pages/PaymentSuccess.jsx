import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FFFBE6] flex flex-col justify-center items-center text-[#2f5723] pt-24">
      <h1 className="text-4xl font-bold mb-4">✅ Payment Successful</h1>
      <p className="text-lg mb-6">Your bank transfer has been received.</p>
      <button
        onClick={() => navigate("/my-orders")}
        className="bg-[#347928] text-white px-6 py-2 rounded-lg hover:bg-[#2e6823]"
      >
        Go to My Orders
      </button>
    </div>
  );
};

export default PaymentSuccess;
