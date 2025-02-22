'use client';

import { useState } from 'react';
import { DashboardLayout } from '../layout/DashboardLayout';
import { CustomerCard } from './CustomerCard';
import { Customer } from '@/app/types/customer';
import { customers } from '@/app/data/mockData';

export default function CustomersPage() {
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout title="Customers">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div className="form-control w-full max-w-xs">
            <input
              type="text"
              placeholder="Search customers..."
              className="input input-bordered"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="btn btn-primary">Add Customer</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCustomers.map(customer => (
            <CustomerCard
              key={customer.id}
              customer={customer}
              onSelect={setSelectedCustomer}
            />
          ))}
        </div>

        {selectedCustomer && (
          <dialog className="modal modal-open">
            <div className="modal-box">
              <h3 className="font-bold text-lg">{selectedCustomer.name}</h3>
              <div className="py-4">
                <p><strong>Email:</strong> {selectedCustomer.email}</p>
                <p><strong>Phone:</strong> {selectedCustomer.phone}</p>
                <p><strong>Company:</strong> {selectedCustomer.company}</p>
                <p><strong>Status:</strong> {selectedCustomer.status}</p>
                <p><strong>Last Contact:</strong> {selectedCustomer.lastContact}</p>
                <p><strong>Value:</strong> ${selectedCustomer.value.toLocaleString()}</p>
              </div>
              <div className="modal-action">
                <button className="btn" onClick={() => setSelectedCustomer(null)}>Close</button>
              </div>
            </div>
          </dialog>
        )}
      </div>
    </DashboardLayout>
  );
}