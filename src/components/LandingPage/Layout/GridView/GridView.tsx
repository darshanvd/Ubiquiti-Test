import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { ProductDetails } from 'src/types/ProductDetailsType';
import { getImageUrl, getImageSrcSet } from '../../../../util/getImageUrl';

interface GridViewProps {
    devices: ProductDetails[];
}

const GridView: React.FC<GridViewProps> = ({ devices }) => {
    const navigate = useNavigate();
    const navigateToDetailPage = (device: ProductDetails) => {
      navigate(`/productDetails/${device.id}`, { state: { productDetails: device } });
    };
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {devices.map((device) => (
                <div
                    key={device.id}
                    className="flex flex-col rounded-xl bg-white border border-grey-border transition min-h-[150px] relative"
                    onClick={() => navigateToDetailPage(device)}
                >
                    <div className="absolute top-1 right-1 bg-white text-primary text-xs px-2 py-0.5 rounded z-10">
                        {device.line.name}
                    </div>
                    <div className="flex items-center justify-center bg-card-bg rounded-t-xl h-30 w-full">
                        {device.icon ? (
                            <img
                                src={getImageUrl(device.images.default, device.id, device.icon.resolutions, 100)}
                                srcSet={getImageSrcSet(device.images.default, device.id, device.icon.resolutions)}
                                sizes="100px"
                                alt={device.product.name}
                                className="w-[100px] h-[100px] object-contain"
                                loading="lazy"
                            />
                        ) : (
                            <div className="w-[100px] h-[100px] bg-card-bg rounded flex items-center justify-center" />
                        )}
                    </div>
                    <div className="flex flex-col items-center justify-center flex-1 px-1 py-2">
                        <div className="text-base text-black-header-text w-full truncate px-1">{device.product.name}</div>
                        <div className="h-4" />
                        <div className="text-xs text-dark-grey-text tracking-widest w-full px-1">{device.sku}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default GridView;
