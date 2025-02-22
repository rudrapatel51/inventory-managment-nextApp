import { Customer } from "../types/customer";
import { Deal } from "../types/deal";

export const customers: Customer[] = [
    {
      id: '1',
      name: 'John Smith',
      email: 'john@techcorp.com',
      phone: '+1-555-0123',
      company: 'TechCorp',
      status: 'active',
      lastContact: '2024-02-20',
      value: 50000
    },
    // Add more mock customers...
  ];

  export const deals: Deal[] = [
    {
      id: '1',
      title: 'Enterprise Software License',
      customer: 'TechCorp',
      value: 50000,
      stage: 'negotiation',
      probability: 75,
      expectedCloseDate: '2024-03-15'
    },
    // Add more mock deals...
  ];