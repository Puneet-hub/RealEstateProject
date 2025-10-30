import { useState } from "react";
import { Home, DollarSign, Loader2, CheckCircle2, XCircle } from "lucide-react";

export default function AddProperty() {
  const [formData, setFormData] = useState({ title: "", price: "" });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");

    try {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSuccessMsg("success");
      setFormData({ title: "", price: "" });
      
      // Auto-hide success message after 3 seconds
      setTimeout(() => setSuccessMsg(""), 3000);
    } catch (err) {
      setSuccessMsg("error");
      setTimeout(() => setSuccessMsg(""), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        {/* Header with animation */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-lg mb-4 transform hover:scale-110 transition-transform duration-300">
            <Home className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Add New Property
          </h2>
          <p className="text-gray-600">
            Fill in the details to list your property
          </p>
        </div>

        {/* Success/Error Message with animation */}
        {successMsg && (
          <div
            className={`mb-6 p-4 rounded-xl shadow-lg transform transition-all duration-500 ${
              successMsg === "success"
                ? "bg-green-50 border border-green-200 animate-slide-down"
                : "bg-red-50 border border-red-200 animate-slide-down"
            }`}
          >
            <div className="flex items-center gap-3">
              {successMsg === "success" ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-green-600 animate-scale-in" />
                  <p className="text-green-800 font-medium">
                    Property added successfully!
                  </p>
                </>
              ) : (
                <>
                  <XCircle className="w-5 h-5 text-red-600 animate-scale-in" />
                  <p className="text-red-800 font-medium">
                    Failed to add property. Please try again.
                  </p>
                </>
              )}
            </div>
          </div>
        )}

        {/* Form Card */}
        <div className="bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl p-8 border border-white/20 transform transition-all duration-300 hover:shadow-3xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Title Input */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Property Title
              </label>
              <div className="relative group">
                <div
                  className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors duration-200 ${
                    focusedField === "title" ? "text-blue-600" : "text-gray-400"
                  }`}
                >
                  <Home className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  placeholder="e.g. Luxury Villa in Jaipur"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  onFocus={() => setFocusedField("title")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-white/50 hover:bg-white"
                  required
                />
              </div>
            </div>

            {/* Price Input */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Price
              </label>
              <div className="relative group">
                <div
                  className={`absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors duration-200 ${
                    focusedField === "price" ? "text-blue-600" : "text-gray-400"
                  }`}
                >
                  <DollarSign className="w-5 h-5" />
                </div>
                <input
                  type="number"
                  placeholder="e.g. 15000000"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                  onFocus={() => setFocusedField("price")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-white/50 hover:bg-white"
                  required
                />
              </div>
              {formData.price && (
                <p className="mt-2 text-sm text-gray-600 animate-fade-in">
                  ₹ {parseInt(formData.price).toLocaleString('en-IN')}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 group"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Adding Property...</span>
                </>
              ) : (
                <>
                  <span>Add Property</span>
                  <div className="transform group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </div>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Need help? <a href="#" className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition-colors">Contact support</a>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-slide-down {
          animation: slide-down 0.4s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }

        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </div>
  );
}