import { useLocation, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import MainLayout from '../../components/common/MainLayout';
import Modal from '../../components/common/Modal';
import { getImageUrl, getImageSrcSet } from '../../util/getImageUrl';

const ProductDetailsView: React.FC = () => {
    const location = useLocation();
    const { productDetails } = location.state;
    const navigate = useNavigate();
    const [showJson, setShowJson] = useState(false);
    const toolbar = (
        <button
            className="bg-white text-grey-icon rounded flex items-center gap-2"
            onClick={() => navigate(-1)}
        >
            <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.50002 12C5.36702 12 5.23501 11.947 5.13601 11.843L0.287001 6.70099C0.102 6.51298 0 6.26398 0 5.99998C0 5.73598 0.102 5.48698 0.287001 5.29898L5.13601 0.156967C5.32502 -0.0440338 5.64202 -0.0530338 5.84302 0.135967C6.04402 0.325967 6.05302 0.641968 5.86402 0.842969L1 5.99998L1.01 6.00998L5.86402 11.156C6.05302 11.357 6.04402 11.673 5.84302 11.863C5.74602 11.955 5.62302 12 5.50002 12Z" fill="#838691" />
            </svg>
            Back
        </button>
    );

    if (!productDetails) {
        return (
            <MainLayout toolbar={toolbar}>
                <div className="text-center text-grey-icon py-8">No product details available.</div>
            </MainLayout>
        );
    }

    const productInfo = (label: string, value: string | number) => <div className="flex justify-between items-center w-full">
        <span className="text-black-header-text">{label}</span>
        <span className="text-dark-grey-text">{value}</span>
    </div>

    return (
        <MainLayout toolbar={toolbar}>
            <div className="flex flex-col md:flex-row items-start justify-center w-full gap-16">
                {/* Image on the left */}
                <div className="flex flex-col items-right">
                    <div className="w-[300px] h-[300px] bg-card-bg flex items-center justify-center rounded-lg overflow-hidden mb-4">
                        {productDetails.icon ? (
                            <img
                                src={getImageUrl(productDetails.images.default, productDetails.id, productDetails.icon.resolutions, 300)}
                                srcSet={getImageSrcSet(productDetails.images.default, productDetails.id, productDetails.icon.resolutions)}
                                sizes="300px"
                                alt={productDetails.product.name}
                                className="object-contain w-full h-full"
                                loading="lazy"
                            />
                        ) : (
                            <span className="text-gray-400 text-6xl">No Image</span>
                        )}
                    </div>
                    <div className="text-xs text-grayIcon">{productDetails.product.abbreviation}</div>
                </div>
                {/* Details on the right */}
                <div className="flex flex-col w-full max-w-lg justify-start items-start">
                    <h3 className="text-2xl mb-1 text-black-header-text">{productDetails.product.name}</h3>
                    <div className="flex justify-between items-center w-full mb-4">
                        <span className="text-sm text-dark-grey-text">{productDetails.line.name}</span>
                    </div>
                    <div className="space-y-3 text-sm w-full">
                        {productInfo('Product Line', productDetails.line.name)}
                        {productInfo('ID', productDetails.id)}
                        {productInfo('Name', productDetails.product.name)}
                        {productInfo('Short Name', productDetails.sku)}
                        {productDetails?.unifi?.network.model && productInfo('Model', productDetails?.unifi?.network.model)}
                        {productDetails?.unifi?.network.ethernetMaxSpeedMegabitsPerSecond && productInfo('Speed', `${productDetails?.unifi?.network.ethernetMaxSpeedMegabitsPerSecond} Mbps`)}
                        {productDetails?.unifi?.network.numberOfPorts && productInfo('Number of Ports', productDetails?.unifi?.network.numberOfPorts)}
                    </div>
                </div>
            </div>
            {/* Centered See All Details Json button below image+details */}
            <div className="flex justify-center">
                <button
                    className="text-[#2D6FFF] hover:underline bg-transparent border-none p-0 cursor-pointer"
                    onClick={() => setShowJson(true)}
                >
                    See All Details as Json
                </button>
            </div>
            <Modal
                open={showJson}
                onClose={() => setShowJson(false)}
                title="Product Details JSON"
            >
                {JSON.stringify(productDetails, null, 2)}
            </Modal>
        </MainLayout>
    );
};

export default ProductDetailsView;