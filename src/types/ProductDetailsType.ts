
export interface DeviceIcon {
  id: string;
  resolutions: [number, number][];
}

export interface DeviceImages {
  default: string;
  nopadding: string;
  topology: string;
}

export interface DeviceLine {
  id: string;
  name: string;
}

export interface DeviceProduct {
  abbrev: string;
  name: string;
}

export interface DeviceTriplet {
  k1: string;
  k2?: string;
}

export interface DeviceUisp {
  bleServices: Record<string, unknown>;
  firmware: {
    board: string[];
    platform: string;
  };
  line: string;
  nameLegacy: string[];
}

export interface ProductDetails {
  guids: string[];
  icon: DeviceIcon;
  id: string;
  images: DeviceImages;
  line: DeviceLine;
  product: DeviceProduct;
  shortnames: string[];
  sku: string;
  sysid: string;
  sysids: string[];
  triplets: DeviceTriplet[];
  uisp: DeviceUisp;
  videos: Record<string, unknown>;
}