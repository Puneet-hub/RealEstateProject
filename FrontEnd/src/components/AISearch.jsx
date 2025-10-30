import { useState } from 'react';
import { Search, Sparkles, MapPin, Home, Loader2, ArrowRight, TrendingUp } from 'lucide-react';

const AISearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    
    setLoading(true);
    setSearched(true);
    
    try {
      // Simulating API call - replace with: const res = await API.post('/ai/search', { query });
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Demo data
      const mockResults = [
        {
          _id: '1',
          title: 'Modern 2BHK Apartment',
          location: 'Andheri West, Mumbai',
          price: '45000',
          image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop'
        },
        {
          _id: '2',
          title: 'Spacious 2BHK Flat',
          location: 'Bandra East, Mumbai',
          price: '48000',
          image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop'
        },
        {
          _id: '3',
          title: 'Luxury 2BHK Home',
          location: 'Powai, Mumbai',
          price: '50000',
          image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop'
        }
      ];
      
      setResults(mockResults);
    } catch (err) {
      console.error(err);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const popularSearches = [
    '2BHK in Mumbai under 50k',
    '3BHK luxury apartment',
    'Studio near IT park',
    'Villa with garden'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <div className="relative">
              <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600 animate-pulse" />
              <div className="absolute inset-0 w-8 h-8 sm:w-10 sm:h-10 bg-purple-400 rounded-full blur-xl opacity-50"></div>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            AI Property Search
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Describe your dream property and let AI find the perfect match
          </p>
        </div>

        {/* Search Box */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8 border border-white/20">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="e.g. 2BHK in Mumbai under 50k"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full pl-12 pr-4 py-3 sm:py-4 text-sm sm:text-base border-2 border-gray-200 rounded-xl sm:rounded-2xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-200 bg-white/50 hover:bg-white"
                />
              </div>
              <button
                onClick={handleSearch}
                disabled={loading || !query.trim()}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 group"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span className="hidden sm:inline">Searching...</span>
                  </>
                ) : (
                  <>
                    <span>Search</span>
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>

            {/* Popular Searches */}
            {!searched && (
              <div className="mt-6">
                <p className="text-xs sm:text-sm text-gray-600 mb-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Popular searches:
                </p>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((search, idx) => (
                    <button
                      key={idx}
                      onClick={() => setQuery(search)}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 hover:scale-105 border border-purple-200"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-12 sm:py-20">
            <div className="relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
              <Sparkles className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
            </div>
            <p className="mt-6 text-base sm:text-lg text-gray-600 font-medium">
              AI is searching for your perfect property...
            </p>
          </div>
        )}

        {/* Results */}
        {!loading && searched && (
          <div className="max-w-7xl mx-auto">
            {results.length > 0 ? (
              <>
                <div className="mb-6 flex items-center justify-between px-2">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Found {results.length} {results.length === 1 ? 'property' : 'properties'}
                  </h2>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Sparkles className="w-4 h-4 text-purple-600" />
                    <span className="hidden sm:inline">AI Matched</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {results.map((property, idx) => (
                    <div
                      key={property._id}
                      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:scale-[1.02] cursor-pointer"
                      style={{
                        animation: `slideUp 0.5s ease-out ${idx * 0.1}s both`
                      }}
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={property.image || "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop"}
                          alt={property.title}
                          className="w-full h-48 sm:h-52 object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                          <span className="text-xs sm:text-sm font-bold text-purple-600">New</span>
                        </div>
                      </div>
                      
                      <div className="p-4 sm:p-5">
                        <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2 group-hover:text-purple-600 transition-colors line-clamp-1">
                          {property.title}
                        </h3>
                        
                        <div className="flex items-center gap-2 text-gray-600 mb-3 text-sm">
                          <MapPin className="w-4 h-4 flex-shrink-0 text-purple-500" />
                          <span className="line-clamp-1">{property.location}</span>
                        </div>
                        
                        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                          <div>
                            <p className="text-xs text-gray-500 mb-1">Price</p>
                            <p className="text-lg sm:text-xl font-bold text-purple-600">
                              ₹{parseInt(property.price).toLocaleString('en-IN')}
                            </p>
                          </div>
                          <button className="bg-purple-50 hover:bg-purple-100 text-purple-600 p-2 sm:p-3 rounded-xl transition-all duration-200 transform hover:scale-110">
                            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12 sm:py-20">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-full mb-4 sm:mb-6">
                  <Home className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  No properties found
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-6 px-4">
                  Try adjusting your search criteria or use different keywords
                </p>
                <button
                  onClick={() => {
                    setSearched(false);
                    setQuery('');
                  }}
                  className="px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-medium transition-colors"
                >
                  Try New Search
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default AISearch;