import { Property, PropertyType, PropertyStatus, ListingType, BlogPost } from './types';
const allProperties = Object.values(
    import.meta.glob("./src/assets/img/property-*.png", {
      eager: true,
      import: "default",
    })
  ) as string[];

export const LOCATIONS = ['Hirapur', 'Saraidhela', 'Bank More', 'Dhansar', 'Bartand', 'Steel Gate', 'Kusum Vihar', 'Govindpur', 'Wasseypur', 'Jharia', 'Tundi Road', 'Koyla Nagar'];

export const SUGGESTED_AMENITIES = [
    'Boundary Wall', 'Gated Community', 'East Facing', 'Corner Plot', 'Water Connection', 
    'Electricity', 'Black Top Road', 'Drainage System', 'Park/Garden', '24/7 Security', 
    'Vastu Compliant', 'Club House', 'Swimming Pool', 'Street Lights', 'Tree Plantation',
    'Private Parking', 'Terrace Garden', 'Servant Quarter', 'Gymnasium', 'Temple'
];

export const MOCK_PROPERTIES: Property[] = [
    {
        id: '1',
        title: 'Premium Residential Plot in Hirapur',
        description: 'East facing residential plot in a prime locality of Hirapur. Perfect for building your dream home. Walking distance from Park Market.',
        price: 35,
        location: 'Hirapur',
        type: PropertyType.PLOT,
        status: PropertyStatus.READY,
        listingType: ListingType.BUY,
        area: 2178, // approx 3 katha
        dimensions: '33 x 66 ft',
        facing: 'East',
        images: [
            allProperties[0], allProperties[3], allProperties[5], allProperties[6], allProperties[10], allProperties[5], allProperties[17], allProperties[29],
        ],
        amenities: ['East Facing', 'Boundary Wall', 'Water Connection', 'Electricity'],
        featured: true,
        newLaunch: false,
        primeCommercial: false,
        agentContact: '+91 9876543210',
        landmarks: [
            { name: 'Park Market', distance: '0.5 km', category: 'Lifestyle' },
            { name: 'Carmel School', distance: '1.2 km', category: 'Education' },
            { name: 'Dhanbad Railway Station', distance: '3.5 km', category: 'Transport' },
            { name: 'Hirapur Durga Mandir', distance: '0.8 km', category: 'Religious' }
        ]
    },
    {
        id: '2',
        title: 'Luxury 4BHK Villa in Saraidhela',
        description: 'Independent luxury villa with private garden and terrace. Located in the posh area of Saraidhela near Big Bazaar.',
        price: 125,
        location: 'Saraidhela',
        type: PropertyType.VILLA,
        status: PropertyStatus.READY,
        listingType: ListingType.BUY,
        bedrooms: 4,
        bathrooms: 4,
        area: 3200,
        facing: 'North-East',
        images: [
            'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=800&q=80'
        ],
        amenities: ['Private Garden', 'Gated Community', 'Modular Kitchen', 'Servant Quarter', '24/7 Security'],
        featured: true,
        newLaunch: false,
        primeCommercial: false,
        agentContact: '+91 9876543210'
    },
    {
        id: '3',
        title: 'Commercial Plot at Bank More',
        description: 'High-value commercial land suitable for shopping complex or office building. Main road frontage.',
        price: 250,
        location: 'Bank More',
        type: PropertyType.PLOT,
        status: PropertyStatus.READY,
        listingType: ListingType.BUY,
        area: 4500,
        dimensions: '50 x 90 ft',
        facing: 'North',
        images: ['https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'],
        amenities: ['Main Road Facing', 'Corner Plot', 'Electricity', 'Water Connection'],
        featured: true,
        newLaunch: false,
        primeCommercial: true,
        agentContact: '+91 9876543210',
        landmarks: [
            { name: 'City Centre', distance: '0.2 km', category: 'Lifestyle' },
            { name: 'Railway Station', distance: '1.5 km', category: 'Transport' },
            { name: 'Bank of India HQ', distance: '0.1 km', category: 'Business' }
        ]
    },
    {
        id: '4',
        title: 'Gated Community Plot near ISM',
        description: 'Secure residential plot within a gated society. Black top roads, street lights, and drainage system already developed.',
        price: 28,
        location: 'Saraidhela',
        type: PropertyType.PLOT,
        status: PropertyStatus.READY,
        listingType: ListingType.BUY,
        area: 1500,
        dimensions: '30 x 50 ft',
        facing: 'West',
        images: ['https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=800&q=80'],
        amenities: ['Gated Community', 'Black Top Road', 'Street Lights', 'Park/Garden'],
        featured: false,
        newLaunch: true,
        primeCommercial: false,
        agentContact: '+91 9876543210',
        landmarks: [
            { name: 'ISM Dhanbad', distance: '0.5 km', category: 'Education' },
            { name: 'Big Bazaar', distance: '2.0 km', category: 'Lifestyle' },
            { name: 'Asian Jalan Hospital', distance: '2.5 km', category: 'Healthcare' }
        ]
    },
    {
        id: '5',
        title: 'Modern Duplex Villa in Kusum Vihar',
        description: 'Newly constructed duplex villa with contemporary architecture. Peaceful neighborhood with elite gentry.',
        price: 85,
        location: 'Kusum Vihar',
        type: PropertyType.VILLA,
        status: PropertyStatus.READY,
        listingType: ListingType.BUY,
        bedrooms: 3,
        bathrooms: 3,
        area: 2400,
        facing: 'South-East',
        images: [allProperties[19], allProperties[20]],
        amenities: ['Terrace Garden', 'Car Parking', 'Vastu Compliant', 'Water Supply'],
        featured: true,
        newLaunch: false,
        primeCommercial: false,
        agentContact: '+91 9876543210'
    },
    {
        id: '6',
        title: 'Farmhouse Land in Govindpur',
        description: 'Expansive land parcel ideal for farmhouse or weekend getaway. Lush greenery and boundary wall done.',
        price: 45,
        location: 'Govindpur',
        type: PropertyType.FARMHOUSE,
        status: PropertyStatus.READY,
        listingType: ListingType.BUY,
        area: 10000,
        dimensions: '100 x 100 ft',
        facing: 'East',
        images: ['https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=800&q=80'],
        amenities: ['Boundary Wall', 'Electricity', 'Water Connection', 'Greenery'],
        featured: false,
        newLaunch: false,
        primeCommercial: false,
        agentContact: '+91 9876543210'
    },
    {
        id: '7',
        title: 'Corner Plot in Dhansar',
        description: 'Two-side open corner plot in Dhansar. Ideal for residential cum commercial use.',
        price: 42,
        location: 'Dhansar',
        type: PropertyType.PLOT,
        status: PropertyStatus.READY,
        listingType: ListingType.BUY,
        area: 1800,
        dimensions: '40 x 45 ft',
        facing: 'North-West',
        images: ['https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80'],
        amenities: ['Corner Plot', 'Road Connectivity', 'Drainage System'],
        featured: false,
        newLaunch: false,
        primeCommercial: false,
        agentContact: '+91 9876543210',
        landmarks: [
            { name: 'Dhansar Thana', distance: '0.3 km', category: 'Business' },
            { name: 'Bank More', distance: '1.2 km', category: 'Lifestyle' },
            { name: 'Patliputra Medical College', distance: '4.0 km', category: 'Healthcare' }
        ]
    },
    {
        id: '8',
        title: 'Shree Vihar Phase 2 - Plots',
        description: 'New launch of residential plots in Shree Vihar township. Booking open at pre-launch prices.',
        price: 18,
        location: 'Govindpur',
        type: PropertyType.PLOT,
        status: PropertyStatus.UNDER_CONSTRUCTION,
        listingType: ListingType.BUY,
        area: 1200,
        dimensions: '30 x 40 ft',
        facing: 'Varied',
        images: ['https://images.unsplash.com/photo-1628744876497-eb30460be9f6?auto=format&fit=crop&w=800&q=80'],
        amenities: ['Gated Community', 'Club House', 'Temple', 'Park'],
        featured: false,
        newLaunch: true,
        primeCommercial: false,
        agentContact: '+91 9876543210',
        landmarks: [
            { name: 'Delhi Public School', distance: '2.0 km', category: 'Education' },
            { name: 'GT Road Highway', distance: '0.5 km', category: 'Transport' },
            { name: 'Local Market', distance: '0.8 km', category: 'Lifestyle' }
        ]
    },
    {
        id: '9',
        title: 'Premium Villa Project',
        description: 'Upcoming luxury villa project in Koyla Nagar with world-class amenities.',
        price: 150,
        location: 'Koyla Nagar',
        type: PropertyType.VILLA,
        status: PropertyStatus.UNDER_CONSTRUCTION,
        listingType: ListingType.BUY,
        bedrooms: 5,
        bathrooms: 5,
        area: 4000,
        images: [allProperties[38]],
        amenities: ['Swimming Pool', 'Gymnasium', 'Home Theater', 'Smart Home'],
        featured: true,
        newLaunch: true,
        primeCommercial: false,
        agentContact: '+91 9876543210'
    },
    {
        id: '10',
        title: 'Commercial Complex Land',
        description: 'Prime land for commercial complex near Steel Gate market.',
        price: 180,
        location: 'Steel Gate',
        type: PropertyType.COMMERCIAL,
        status: PropertyStatus.READY,
        listingType: ListingType.BUY,
        area: 3000,
        dimensions: '50 x 60 ft',
        facing: 'Main Road',
        images: ['https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=800&q=80'],
        amenities: ['Main Road Facing', 'High Footfall'],
        featured: false,
        newLaunch: false,
        primeCommercial: true,
        agentContact: '+91 9876543210'
    },
    {
        id: '11',
        title: 'Budget Residential Plot',
        description: 'Affordable plot for investment in Wasseypur area. Developing zone.',
        price: 12,
        location: 'Wasseypur',
        type: PropertyType.PLOT,
        status: PropertyStatus.READY,
        listingType: ListingType.BUY,
        area: 1000,
        dimensions: '25 x 40 ft',
        facing: 'South',
        images: [
            allProperties[6], allProperties[10], allProperties[5]
        ],
        amenities: ['Electricity', 'Water Connection'],
        featured: false,
        newLaunch: false,
        primeCommercial: false,
        agentContact: '+91 9876543210',
        landmarks: [
            { name: 'Wasseypur Market', distance: '0.5 km', category: 'Lifestyle' },
            { name: 'Dhanbad Station', distance: '2.5 km', category: 'Transport' }
        ]
    },
    {
        id: '12',
        title: 'Fully Furnished Villa for Rent',
        description: 'Company lease preferred. 4BHK fully furnished villa in elite colony.',
        price: 45, // 45k
        location: 'Koyla Nagar',
        type: PropertyType.VILLA,
        status: PropertyStatus.READY,
        listingType: ListingType.RENT,
        bedrooms: 4,
        bathrooms: 3,
        area: 2800,
        images: [
            allProperties[5], allProperties[17], allProperties[29],
        ],
        amenities: ['Furniture', 'AC', 'Power Backup', 'Garage'],
        featured: false,
        newLaunch: false,
        primeCommercial: false,
        agentContact: '+91 9876543210'
    },
    {
        id: '13',
        title: 'Green Valley Township',
        description: 'Upcoming eco-friendly township on Tundi Road. Pre-launch booking open for residential plots with wide roads and drainage.',
        price: 15,
        location: 'Tundi Road',
        type: PropertyType.PLOT,
        status: PropertyStatus.UNDER_CONSTRUCTION,
        listingType: ListingType.BUY,
        area: 1500,
        dimensions: '30 x 50 ft',
        facing: 'East/West',
        images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80'],
        amenities: ['Park', 'Jogging Track', 'Street Lights', 'Security'],
        featured: true,
        newLaunch: true,
        primeCommercial: false,
        agentContact: '+91 9876543210',
        landmarks: [
            { name: 'Birsa Munda Park', distance: '5.0 km', category: 'Lifestyle' },
            { name: 'Govindpur Highway', distance: '3.0 km', category: 'Transport' }
        ]
    },
    {
        id: '14',
        title: 'Industrial Land on GT Road',
        description: 'Large parcel of land suitable for warehousing, factory, or logistics hub. Direct highway access.',
        price: 350,
        location: 'Govindpur',
        type: PropertyType.COMMERCIAL,
        status: PropertyStatus.READY,
        listingType: ListingType.BUY,
        area: 15000,
        dimensions: '100 x 150 ft',
        facing: 'Highway',
        images: ['https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&w=800&q=80'],
        amenities: ['Highway Access', 'Industrial Zone', 'Electricity', 'Water'],
        featured: false,
        newLaunch: false,
        primeCommercial: true,
        agentContact: '+91 9876543210'
    },
    {
        id: '15',
        title: 'Sunrise Enclave Phase 1',
        description: 'Gated community plots near Memco More. Development in full swing. Ideal for investment.',
        price: 22,
        location: 'Bartand',
        type: PropertyType.PLOT,
        status: PropertyStatus.UNDER_CONSTRUCTION,
        listingType: ListingType.BUY,
        area: 1800,
        dimensions: '36 x 50 ft',
        facing: 'North',
        images: [
            allProperties[17], allProperties[29],
        ],
        amenities: ['Gated Community', 'Drainage', 'Water Supply'],
        featured: false,
        newLaunch: true,
        primeCommercial: false,
        agentContact: '+91 9876543210',
        landmarks: [
            { name: 'Memco More', distance: '0.5 km', category: 'Transport' },
            { name: 'Big Bazaar', distance: '3.0 km', category: 'Lifestyle' },
            { name: 'Dhanbad Public School', distance: '1.5 km', category: 'Education' }
        ]
    },
    {
        id: '16',
        title: 'Market Complex Land',
        description: 'Corner plot in the heart of Jharia market. High footfall area suitable for shopping complex.',
        price: 120,
        location: 'Jharia',
        type: PropertyType.COMMERCIAL,
        status: PropertyStatus.READY,
        listingType: ListingType.BUY,
        area: 2500,
        dimensions: '50 x 50 ft',
        facing: 'Corner',
        images: ['https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&w=800&q=80'],
        amenities: ['Market Area', 'Corner Plot', 'High Visibility'],
        featured: true,
        newLaunch: false,
        primeCommercial: true,
        agentContact: '+91 9876543210'
    }
];

export const MOCK_BLOGS: BlogPost[] = [
    {
        id: '1',
        title: 'Why Land Investment is the Best in Dhanbad',
        excerpt: 'Understanding the appreciation rates of plots vs flats in the current market scenario.',
        content: 'Land has always been a goldmine in Dhanbad...',
        date: '2023-11-01',
        author: 'Rahul Sharma',
        imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: '2',
        title: 'Guide to Buying Vastu Compliant Plots',
        excerpt: 'Key vastu tips to check before purchasing a residential plot for your home.',
        content: 'Orientation, slope, and shape of the plot matter significantly...',
        date: '2023-10-25',
        author: 'Amit Verma',
        imageUrl: 'https://images.unsplash.com/photo-1599809275372-b7f5d7ebac64?auto=format&fit=crop&w=600&q=80'
    }
];