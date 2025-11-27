
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FundCard from './FundCard';
import { loader } from '../assets';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';


const DisplayCampaigns = ({ title, isLoading, campaigns }) => {
  const navigate = useNavigate();
  const [startIndex, setStartIndex] = useState(0);

  const extralargeScreenSize = 8; // For extra large screens - 8 campaigns
  const largeScreenSize = 8; // For large screens - 8 campaigns
  const mediumScreenSize = 6; // For medium screens - 6 campaigns
  const smallScreenSize = 4; // For small screens - 4 campaigns
  const extrasmallScreenSize = 2; // For mobile - 2 campaigns

  const getPageSize = () => {
    const width = window.innerWidth;
    if (width >= 1400) {
      return extralargeScreenSize;
    } else if (width >= 1200) {
      return largeScreenSize;
    } else if (width >= 1010) {
      return mediumScreenSize;
    } else if (width >= 750) {
      return smallScreenSize;
    } else {
      return extrasmallScreenSize;
    }
  };

  const [pageSize, setPageSize] = useState(getPageSize());

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNext = () => {
    if (startIndex + pageSize < campaigns.length) {
      setStartIndex(startIndex + pageSize);
    }
  };

  const handlePrevious = () => {
    if (startIndex - pageSize >= 0) {
      setStartIndex(startIndex - pageSize);
    }
  };

  const displayedCampaigns = campaigns.slice(startIndex, startIndex + pageSize);
  const totalPages = Math.ceil(campaigns.length / pageSize);
  const currentPage = startIndex / pageSize;

  const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.title}`, { state: campaign });
  };

  return (
    <div className="mb-12">
      {/* Header */}
      <div className='flex justify-between items-center mb-8'>
        <h2 className="font-manrope font-bold text-2xl text-gray-900 dark:text-white">{title}</h2>
        <button 
          className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-inter font-semibold text-sm transition-colors group" 
          onClick={() => navigate("/ExploreProjects")}
        >
          View All
          <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Campaign Grid */}
      <div className="flex flex-wrap justify-center gap-6 w-full">
        {isLoading ? (
          <div className="flex items-center justify-center w-full py-20">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin"></div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center font-inter">Loading campaigns...</p>
            </div>
          </div>
        ) : campaigns.length === 0 ? (
          <div className="flex flex-col items-center justify-center w-full py-20">
            <div className="w-20 h-20 bg-gray-100 dark:bg-dark-800 rounded-full flex items-center justify-center mb-4">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <p className="font-inter font-semibold text-lg text-gray-700 dark:text-gray-300 mb-2">
              No campaigns yet
            </p>
            <p className="font-inter text-sm text-gray-500 dark:text-gray-400">
              Be the first to create a campaign!
            </p>
          </div>
        ) : (
          displayedCampaigns.map((campaign) => (
            <FundCard
              key={campaign.id}
              {...campaign}
              handleClick={() => handleNavigate(campaign)}
            />
          ))
        )}
      </div>

      {/* Modern Pagination */}
      {campaigns.length > 0 && totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-12">
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            disabled={startIndex === 0}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-inter font-medium text-sm transition-all ${
              startIndex === 0
                ? 'bg-gray-100 dark:bg-dark-800 text-gray-400 dark:text-gray-600 cursor-not-allowed'
                : 'bg-white dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 shadow-sm hover:shadow-md'
            }`}
          >
            <FaChevronLeft className="w-3 h-3" />
            <span className="hidden sm:inline">Previous</span>
          </button>

          {/* Page Numbers */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, index) => {
              // Show first page, last page, current page, and pages around current
              const showPage = 
                index === 0 || 
                index === totalPages - 1 || 
                Math.abs(index - currentPage) <= 1;
              
              const showEllipsis = 
                (index === 1 && currentPage > 2) || 
                (index === totalPages - 2 && currentPage < totalPages - 3);

              if (showEllipsis) {
                return (
                  <span key={index} className="px-2 text-gray-400 dark:text-gray-600">
                    ...
                  </span>
                );
              }

              if (!showPage) return null;

              return (
                <button
                  key={index}
                  onClick={() => setStartIndex(index * pageSize)}
                  className={`w-10 h-10 rounded-full font-inter font-medium text-sm transition-all ${
                    index === currentPage
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-primary'
                      : 'bg-white dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 shadow-sm hover:shadow-md'
                  }`}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={startIndex + pageSize >= campaigns.length}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-inter font-medium text-sm transition-all ${
              startIndex + pageSize >= campaigns.length
                ? 'bg-gray-100 dark:bg-dark-800 text-gray-400 dark:text-gray-600 cursor-not-allowed'
                : 'bg-white dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 shadow-sm hover:shadow-md'
            }`}
          >
            <span className="hidden sm:inline">Next</span>
            <FaChevronRight className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Page Info */}
      {campaigns.length > 0 && (
        <div className="flex justify-center mt-4">
          <p className="text-sm text-gray-500 dark:text-gray-400 font-inter">
            Showing <span className="font-semibold text-gray-700 dark:text-gray-300">{startIndex + 1}</span> to{' '}
            <span className="font-semibold text-gray-700 dark:text-gray-300">
              {Math.min(startIndex + pageSize, campaigns.length)}
            </span>{' '}
            of <span className="font-semibold text-gray-700 dark:text-gray-300">{campaigns.length}</span> campaigns
          </p>
        </div>
      )}
    </div>
  );
};

export default DisplayCampaigns;
