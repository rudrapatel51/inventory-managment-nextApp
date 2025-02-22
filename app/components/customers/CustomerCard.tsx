import { Customer } from "@/app/types/customer";

interface CustomerCardProps {
    customer: Customer;
    onSelect: (customer: Customer) => void;
  }
  
  export const CustomerCard: React.FC<CustomerCardProps> = ({ customer, onSelect }) => {
    return (
      <div className="card bg-base-200 hover:bg-base-300 cursor-pointer" onClick={() => onSelect(customer)}>
        <div className="card-body">
          <h3 className="card-title">{customer.name}</h3>
          <p className="text-sm">{customer.company}</p>
          <div className="flex justify-between items-center mt-2">
            <span className={`badge ${customer.status === 'active' ? 'badge-success' : 'badge-warning'}`}>
              {customer.status}
            </span>
            <span className="text-xl font-bold">${customer.value.toLocaleString()}</span>
          </div>
        </div>
      </div>
    );
  };