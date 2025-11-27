import React from 'react';
import { useNavigate } from 'react-router-dom';
import FundCardModern from './FundCardModern';
import { Loader } from './';

const DisplayCampaignsModern = ({ title, isLoading, campaigns }) => {
  const navigate = useNavigate();

  const handleNavigate = (campaign) => {
    navigate(`/campaign-details/${campaign.pId}`, { state: campaign });
  };

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-bg-base">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {title && (
          <div className="mb-8 sm:mb-12">
            <h2 className="text-heading font-bold mb-3 text-white">{title}</h2>
            <div className="w-24 h-1 bg-gradient-accent rounded-full shadow-neon-pink" />
          </div>
        )}

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <Loader />
          </div>
        )}

        {/* Empty State */}
        {!isLoading && campaigns.length === 0 && (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-bg-card border border-gray-800 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">No campaigns found</h3>
              <p className="text-gray-400 mb-6">
                Be the first to create a campaign and start raising funds!
              </p>
              <button
                onClick={() => navigate('/create-campaign')}
                className="btn-fashion-accent"
              >
                Create Campaign
              </button>
            </div>
          </div>
        )}

        {/* Campaigns Grid */}
        {!isLoading && campaigns.length > 0 && (
          <div className="masonry-grid">
            {campaigns.map((campaign, index) => (
              <div
                key={`${campaign.pId}-${index}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <FundCardModern
                  {...campaign}
                  handleClick={() => handleNavigate(campaign)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default DisplayCampaignsModern;
