export enum PropertyType {
    PLOT = 'Plot',
    VILLA = 'Villa',
    FARMHOUSE = 'Farmhouse',
    COMMERCIAL = 'Commercial',
    FLAT = 'Apartment'
}

export enum PropertyStatus {
    READY = 'Ready to Move',
    UNDER_CONSTRUCTION = 'Under Construction'
}

export enum ListingType {
    BUY = 'Buy',
    RENT = 'Rent'
}

export interface Landmark {
    name: string;
    distance: string;
    category: 'Education' | 'Healthcare' | 'Transport' | 'Lifestyle' | 'Religious' | 'Business';
}

export interface Property {
    id: string;
    title: string;
    description: string;
    price: number; // in Lakhs
    location: string;
    type: PropertyType;
    status: PropertyStatus;
    listingType: ListingType;
    bedrooms?: number;
    bathrooms?: number;
    area: number; // sq ft (or sq yards/decimal for plots, but keeping as number for simplicity)
    dimensions?: string; // e.g., 40x50 ft
    facing?: string; // e.g., North, East
    images: string[];
    videos?: string[];
    amenities: string[];
    featured?: boolean;
    newLaunch?: boolean;      // New category flag
    primeCommercial?: boolean; // New category flag
    agentContact: string;
    coordinates?: { lat: number, lng: number };
    landmarks?: Landmark[];
}

export interface Lead {
    id: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    propertyId?: string;
    date: string;
}

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    author: string;
    imageUrl: string;
}