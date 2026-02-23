import React, { useState } from 'react';
import { Customer } from '../types';
import { 
    Search, Filter, MoreVertical, Phone, Mail, MapPin, 
    DollarSign, Home, Clock, CheckCircle2, X, User, 
    ChevronRight, CreditCard, FileText, Calendar
} from 'lucide-react';

const MOCK_CUSTOMERS: Customer[] = [
    {
        id: '1',
        name: 'Rajesh Kumar',
        email: 'rajesh.kumar@example.com',
        phone: '+91 98765 43210',
        address: '123, Green Park, Dhanbad',
        status: 'VIP',
        avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
        totalPaid: 4500000,
        pendingAmount: 500000,
        notes: 'Interested in commercial properties near Bank More.',
        propertiesBought: [
            { propertyId: 'p1', title: 'Luxury Villa in Hirapur', price: 4500000, date: '2023-05-15' }
        ],
        interestedProperties: [
            { propertyId: 'p3', title: 'Commercial Shop in Bank More', status: 'Offer Made' }
        ],
        paymentHistory: [
            { id: 'pay1', amount: 100000, date: '2023-01-10', description: 'Booking Amount', status: 'Paid' },
            { id: 'pay2', amount: 2000000, date: '2023-03-15', description: 'First Installment', status: 'Paid' },
            { id: 'pay3', amount: 2400000, date: '2023-05-15', description: 'Final Payment', status: 'Paid' }
        ]
    },
    {
        id: '2',
        name: 'Priya Sharma',
        email: 'priya.sharma@example.com',
        phone: '+91 98765 12345',
        address: '45, Housing Colony, Dhanbad',
        status: 'Active',
        avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
        totalPaid: 1200000,
        pendingAmount: 0,
        notes: 'Looking for a 2BHK apartment for investment.',
        propertiesBought: [],
        interestedProperties: [
            { propertyId: 'p2', title: '2BHK Apartment in Saraidhela', status: 'Viewed' },
            { propertyId: 'p5', title: 'Plot in Govindpur', status: 'Contacted' }
        ],
        paymentHistory: []
    },
    {
        id: '3',
        name: 'Amit Singh',
        email: 'amit.singh@example.com',
        phone: '+91 91234 56789',
        address: '78, Steel Gate, Dhanbad',
        status: 'Inactive',
        totalPaid: 0,
        pendingAmount: 0,
        notes: 'Enquired about plots but no recent activity.',
        propertiesBought: [],
        interestedProperties: [
            { propertyId: 'p4', title: 'Residential Plot in Barwadda', status: 'Viewed' }
        ],
        paymentHistory: []
    },
    {
        id: '4',
        name: 'Sneha Gupta',
        email: 'sneha.gupta@example.com',
        phone: '+91 88776 65544',
        address: '12, Luby Circular Road, Dhanbad',
        status: 'Active',
        avatarUrl: 'https://images.unsplash.com/photo-1573496359-14251017c5c9?auto=format&fit=crop&w=150&q=80',
        totalPaid: 50000,
        pendingAmount: 0,
        notes: 'Paid token amount for a flat, waiting for loan approval.',
        propertiesBought: [],
        interestedProperties: [
            { propertyId: 'p6', title: '3BHK Flat in Dhansar', status: 'Offer Made' }
        ],
        paymentHistory: [
            { id: 'pay4', amount: 50000, date: '2023-10-01', description: 'Token Amount', status: 'Paid' }
        ]
    }
];

export const AdminCustomers: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredCustomers = MOCK_CUSTOMERS.filter(customer => 
        customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.phone.includes(searchTerm)
    );

    const handleViewDetails = (customer: Customer) => {
        setSelectedCustomer(customer);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCustomer(null);
    };

    return (
        <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-heading font-bold text-slate-900">Customer Management</h1>
                    <p className="text-slate-500 text-sm">View and manage customer details and history.</p>
                </div>
                <div className="flex gap-3 w-full sm:w-auto">
                    <div className="relative flex-1 sm:flex-none">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        <input 
                            type="text" 
                            placeholder="Search customers..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full sm:w-64 pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:border-brand-primary outline-none shadow-sm"
                        />
                    </div>
                    <button className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:text-brand-primary shadow-sm">
                        <Filter size={20} />
                    </button>
                </div>
            </div>

            {/* Customer Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCustomers.map(customer => (
                    <div key={customer.id} className="bg-white rounded-2xl shadow-soft border border-slate-100 overflow-hidden hover:shadow-lg transition group">
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden border-2 border-white shadow-sm">
                                        {customer.avatarUrl ? (
                                            <img src={customer.avatarUrl} alt={customer.name} className="w-full h-full object-cover" />
                                        ) : (
                                            <User className="text-slate-400" size={24} />
                                        )}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">{customer.name}</h3>
                                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                                            customer.status === 'VIP' ? 'bg-purple-100 text-purple-700' :
                                            customer.status === 'Active' ? 'bg-green-100 text-green-700' :
                                            'bg-slate-100 text-slate-600'
                                        }`}>
                                            {customer.status}
                                        </span>
                                    </div>
                                </div>
                                <button className="text-slate-400 hover:text-slate-600">
                                    <MoreVertical size={20} />
                                </button>
                            </div>

                            <div className="space-y-3 mb-6">
                                <div className="flex items-center text-sm text-slate-600">
                                    <Mail size={16} className="mr-3 text-slate-400" />
                                    <span className="truncate">{customer.email}</span>
                                </div>
                                <div className="flex items-center text-sm text-slate-600">
                                    <Phone size={16} className="mr-3 text-slate-400" />
                                    <span>{customer.phone}</span>
                                </div>
                                <div className="flex items-center text-sm text-slate-600">
                                    <MapPin size={16} className="mr-3 text-slate-400" />
                                    <span className="truncate">{customer.address}</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-slate-50 rounded-xl">
                                <div>
                                    <p className="text-xs text-slate-500 mb-1">Properties Bought</p>
                                    <p className="font-bold text-slate-900">{customer.propertiesBought.length}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 mb-1">Total Paid</p>
                                    <p className="font-bold text-brand-primary">₹{(customer.totalPaid / 100000).toFixed(1)} L</p>
                                </div>
                            </div>

                            <button 
                                onClick={() => handleViewDetails(customer)}
                                className="w-full py-3 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 hover:border-brand-primary hover:text-brand-primary transition flex items-center justify-center group-hover:shadow-md"
                            >
                                View Details <ChevronRight size={18} className="ml-2" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Customer Details Modal */}
            {isModalOpen && selectedCustomer && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col animate-in slide-in-from-bottom-4 duration-300">
                        {/* Modal Header */}
                        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center overflow-hidden border-4 border-white shadow-md">
                                    {selectedCustomer.avatarUrl ? (
                                        <img src={selectedCustomer.avatarUrl} alt={selectedCustomer.name} className="w-full h-full object-cover" />
                                    ) : (
                                        <User className="text-slate-400" size={32} />
                                    )}
                                </div>
                                <div>
                                    <h2 className="text-2xl font-heading font-bold text-slate-900">{selectedCustomer.name}</h2>
                                    <div className="flex items-center gap-2 text-sm text-slate-500">
                                        <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                                            selectedCustomer.status === 'VIP' ? 'bg-purple-100 text-purple-700' :
                                            selectedCustomer.status === 'Active' ? 'bg-green-100 text-green-700' :
                                            'bg-slate-100 text-slate-600'
                                        }`}>
                                            {selectedCustomer.status}
                                        </span>
                                        <span>• Customer ID: {selectedCustomer.id}</span>
                                    </div>
                                </div>
                            </div>
                            <button 
                                onClick={closeModal}
                                className="p-2 bg-white rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition shadow-sm border border-slate-100"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="flex-1 overflow-y-auto p-6 md:p-8">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {/* Left Column: Contact & Summary */}
                                <div className="space-y-6">
                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                        <h3 className="font-bold text-slate-900 mb-4 flex items-center"><User size={18} className="mr-2 text-brand-primary"/> Contact Info</h3>
                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3">
                                                <Mail size={18} className="text-slate-400 mt-0.5" />
                                                <div>
                                                    <p className="text-xs text-slate-500">Email Address</p>
                                                    <p className="text-sm font-medium text-slate-900">{selectedCustomer.email}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <Phone size={18} className="text-slate-400 mt-0.5" />
                                                <div>
                                                    <p className="text-xs text-slate-500">Phone Number</p>
                                                    <p className="text-sm font-medium text-slate-900">{selectedCustomer.phone}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <MapPin size={18} className="text-slate-400 mt-0.5" />
                                                <div>
                                                    <p className="text-xs text-slate-500">Address</p>
                                                    <p className="text-sm font-medium text-slate-900">{selectedCustomer.address}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                        <h3 className="font-bold text-slate-900 mb-4 flex items-center"><FileText size={18} className="mr-2 text-brand-primary"/> Notes</h3>
                                        <p className="text-sm text-slate-600 italic leading-relaxed">
                                            "{selectedCustomer.notes}"
                                        </p>
                                    </div>
                                </div>

                                {/* Right Column: Properties & Payments */}
                                <div className="lg:col-span-2 space-y-8">
                                    {/* Financial Summary */}
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                                            <p className="text-xs font-bold text-green-600 uppercase tracking-wider mb-1">Total Paid</p>
                                            <p className="text-2xl font-bold text-green-700">₹{(selectedCustomer.totalPaid / 100000).toFixed(2)} L</p>
                                        </div>
                                        <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                                            <p className="text-xs font-bold text-red-600 uppercase tracking-wider mb-1">Pending</p>
                                            <p className="text-2xl font-bold text-red-700">₹{(selectedCustomer.pendingAmount / 100000).toFixed(2)} L</p>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                                            <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">Properties</p>
                                            <p className="text-2xl font-bold text-blue-700">{selectedCustomer.propertiesBought.length}</p>
                                        </div>
                                    </div>

                                    {/* Properties Section */}
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-4 flex items-center"><Home size={20} className="mr-2 text-brand-primary"/> Property Portfolio</h3>
                                        
                                        {selectedCustomer.propertiesBought.length > 0 && (
                                            <div className="mb-6">
                                                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 ml-1">Purchased Properties</h4>
                                                <div className="space-y-3">
                                                    {selectedCustomer.propertiesBought.map((prop, idx) => (
                                                        <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex justify-between items-center">
                                                            <div className="flex items-center gap-3">
                                                                <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                                                                    <CheckCircle2 size={20} />
                                                                </div>
                                                                <div>
                                                                    <p className="font-bold text-slate-900">{prop.title}</p>
                                                                    <p className="text-xs text-slate-500">Purchased on {prop.date}</p>
                                                                </div>
                                                            </div>
                                                            <p className="font-bold text-slate-900">₹{(prop.price / 100000).toFixed(1)} L</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {selectedCustomer.interestedProperties.length > 0 && (
                                            <div>
                                                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 ml-1">Interested / Enquired</h4>
                                                <div className="space-y-3">
                                                    {selectedCustomer.interestedProperties.map((prop, idx) => (
                                                        <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex justify-between items-center">
                                                            <div className="flex items-center gap-3">
                                                                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                                                    <Clock size={20} />
                                                                </div>
                                                                <div>
                                                                    <p className="font-bold text-slate-900">{prop.title}</p>
                                                                    <p className="text-xs text-slate-500">ID: {prop.propertyId}</p>
                                                                </div>
                                                            </div>
                                                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                                                prop.status === 'Offer Made' ? 'bg-purple-100 text-purple-700' :
                                                                prop.status === 'Contacted' ? 'bg-blue-100 text-blue-700' :
                                                                'bg-slate-100 text-slate-600'
                                                            }`}>
                                                                {prop.status}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Payment History */}
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-4 flex items-center"><CreditCard size={20} className="mr-2 text-brand-primary"/> Payment History</h3>
                                        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                                            <table className="w-full text-left">
                                                <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider font-bold">
                                                    <tr>
                                                        <th className="p-4">Date</th>
                                                        <th className="p-4">Description</th>
                                                        <th className="p-4">Amount</th>
                                                        <th className="p-4 text-right">Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-slate-100">
                                                    {selectedCustomer.paymentHistory.length > 0 ? (
                                                        selectedCustomer.paymentHistory.map((pay) => (
                                                            <tr key={pay.id} className="hover:bg-slate-50">
                                                                <td className="p-4 text-sm text-slate-600">{pay.date}</td>
                                                                <td className="p-4 text-sm font-medium text-slate-900">{pay.description}</td>
                                                                <td className="p-4 text-sm font-bold text-slate-900">₹{pay.amount.toLocaleString()}</td>
                                                                <td className="p-4 text-right">
                                                                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                                                                        pay.status === 'Paid' ? 'bg-green-100 text-green-700' :
                                                                        pay.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                                                                        'bg-red-100 text-red-700'
                                                                    }`}>
                                                                        {pay.status}
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                        ))
                                                    ) : (
                                                        <tr>
                                                            <td colSpan={4} className="p-8 text-center text-slate-400 text-sm">
                                                                No payment history available.
                                                            </td>
                                                        </tr>
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
                            <button 
                                onClick={closeModal}
                                className="px-6 py-2.5 rounded-xl border border-slate-200 font-bold text-slate-600 hover:bg-white transition"
                            >
                                Close
                            </button>
                            <button className="px-6 py-2.5 rounded-xl bg-brand-primary text-white font-bold hover:bg-blue-700 shadow-lg flex items-center">
                                <Mail size={18} className="mr-2" /> Send Email
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
