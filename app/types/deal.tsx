export interface Deal {
    id: string;
    title: string;
    customer: string;
    value: number;
    stage: 'prospecting' | 'qualification' | 'proposal' | 'negotiation' | 'closed';
    probability: number;
    expectedCloseDate: string;
  }
  