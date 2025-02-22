'use client';

import { useState } from 'react';
import { DashboardLayout } from '../layout/DashboardLayout';
import { DealCard } from './DealCard';
import { Deal } from '@/app/types/deal';
import { deals } from '@/app/data/mockData';

export default function DealsPage() {
  const [selectedDeal, setSelectedDeal] = useState<Deal | null>(null);
  const [filterStage, setFilterStage] = useState<Deal['stage'] | 'all'>('all');

  const filteredDeals = filterStage === 'all' 
    ? deals 
    : deals.filter(deal => deal.stage === filterStage);

  const stages: Deal['stage'][] = ['prospecting', 'qualification', 'proposal', 'negotiation', 'closed'];

  return (
    <DashboardLayout title="Deals">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <select 
              className="select select-bordered"
              value={filterStage}
              onChange={(e) => setFilterStage(e.target.value as Deal['stage'] | 'all')}
            >
              <option value="all">All Stages</option>
              {stages.map(stage => (
                <option key={stage} value={stage}>
                  {stage.charAt(0).toUpperCase() + stage.slice(1)}
                </option>
              ))}
            </select>
          </div>
          <button className="btn btn-primary">New Deal</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDeals.map(deal => (
            <DealCard
              key={deal.id}
              deal={deal}
              onSelect={setSelectedDeal}
            />
          ))}
        </div>

        {selectedDeal && (
          <dialog className="modal modal-open">
            <div className="modal-box">
              <h3 className="font-bold text-lg">{selectedDeal.title}</h3>
              <div className="py-4">
                <p><strong>Customer:</strong> {selectedDeal.customer}</p>
                <p><strong>Value:</strong> ${selectedDeal.value.toLocaleString()}</p>
                <p><strong>Stage:</strong> {selectedDeal.stage}</p>
                <p><strong>Probability:</strong> {selectedDeal.probability}%</p>
                <p><strong>Expected Close Date:</strong> {selectedDeal.expectedCloseDate}</p>
              </div>
              <div className="modal-action">
                <button className="btn" onClick={() => setSelectedDeal(null)}>Close</button>
              </div>
            </div>
          </dialog>
        )}
      </div>
    </DashboardLayout>
  );
}