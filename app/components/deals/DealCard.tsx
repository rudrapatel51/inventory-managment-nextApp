import { Deal } from "@/app/types/deal";

interface DealCardProps {
    deal: Deal;
    onSelect: (deal: Deal) => void;
  }
  
  export const DealCard: React.FC<DealCardProps> = ({ deal, onSelect }) => {
    const stageColors = {
      prospecting: 'badge-info',
      qualification: 'badge-primary',
      proposal: 'badge-secondary',
      negotiation: 'badge-warning',
      closed: 'badge-success'
    };
  
    return (
      <div className="card bg-base-200 hover:bg-base-300 cursor-pointer" onClick={() => onSelect(deal)}>
        <div className="card-body">
          <h3 className="card-title">{deal.title}</h3>
          <p className="text-sm">{deal.customer}</p>
          <div className="flex justify-between items-center mt-2">
            <span className={`badge ${stageColors[deal.stage]}`}>
              {deal.stage}
            </span>
            <span className="text-xl font-bold">${deal.value.toLocaleString()}</span>
          </div>
          <div className="mt-2">
            <div className="flex justify-between text-sm">
              <span>Probability: {deal.probability}%</span>
              <span>Close: {new Date(deal.expectedCloseDate).toLocaleDateString()}</span>
            </div>
            <progress 
              className="progress progress-success w-full mt-1" 
              value={deal.probability} 
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    );
  };