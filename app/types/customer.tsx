export interface Customer {
    id: string;
    name: string;
    email: string;
    phone: string;
    company: string;
    status: 'active' | 'inactive' | 'pending';
    lastContact: string;
    value: number;
  }