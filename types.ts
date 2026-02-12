export enum PropertyType {
    FLAT = 'Flat',
    PLOT = 'Plot',
    COMMERCIAL = 'Commercial',
    VILLA = 'Villa'
}

export enum PropertyStatus {
    READY = 'Ready to Move',
    UNDER_CONSTRUCTION = 'Under Construction'
}

export enum ListingType {
    BUY = 'Buy',
    RENT = 'Rent'
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
    area: number; // sq ft
    images: string[];
    amenities: string[];
    featured?: boolean;
    newLaunch?: boolean;      // New category flag
    primeCommercial?: boolean; // New category flag
    agentContact: string;
    coordinates?: { lat: number, lng: number };
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