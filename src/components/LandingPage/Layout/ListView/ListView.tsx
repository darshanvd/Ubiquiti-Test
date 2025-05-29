import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { ProductDetails } from 'src/types/ProductDetailsType';
import { getImageUrl, getImageSrcSet } from './../../../../util/getImageUrl';

interface ListViewProps {
  devices: ProductDetails[];
}

const ListView: React.FC<ListViewProps> = ({ devices }) => {
  const navigate = useNavigate();
    const navigateToDetailPage = (device: ProductDetails) => {
      navigate(`/productDetails/${device.id}`, { state: { productDetails: device } });
    };
  return (
    <div className="overflow-x-auto h-[calc(100vh-120px)]">
      <div className="h-full overflow-y-auto">
        <table className="min-w-full">
          <thead className="sticky top-0 bg-white z-10 border-b-[2px] border-grey-border">
            <tr className="p-2">
              <th className="w-[20px] font-semibold text-grayText bg-white border-b-[1.5px] border-grey-border"></th>
              <th className="py-2 min-w-[120px] sm:w-[48%] text-left font-semibold text-black-header-text bg-white border-b-[1.5px] border-grey-border">
                Product line
              </th>
              <th className="py-2 min-w-[120px] sm:w-[50%] text-left font-semibold text-black-header-text bg-white border-b-[1.5px] border-grey-border">
                Name
              </th>
            </tr>
          </thead>
          <tbody>
            {devices.map((device) => (
              <tr key={device.id} className="border-b-2 border-grey-border hover:bg-grey-light-hover" onClick={() => navigateToDetailPage(device)}>
                <td className="w-[20px] text-center ">
                  {device.icon ? (
                    <img
                      src={getImageUrl(device.images.default, device.id, device.icon.resolutions, 25)}
                      srcSet={getImageSrcSet(device.images.default, device.id, device.icon.resolutions)}
                      sizes="20px"
                      alt={device.product.name}
                      className="w-5 h-5 object-contain rounded"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-5 h-5 bg-gray-200 rounded" />
                  )}
                </td>
                <td className="py-2 min-w-[120px] sm:w-[48%] text-black-option-text">{device.line.name}</td>
                <td className="py-2 min-w-[120px] sm:w-[50%] text-dark-grey-text">{device.product.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListView;
