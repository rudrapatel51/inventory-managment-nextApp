import { DashboardLayout } from '../../components/layout/DashboardLayout';

export default function DashboardPage() {
  return (
    <DashboardLayout title="Dashboard">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Add your dashboard content here */}
        <div className="card bg-base-200">
          <div className="card-body">
            <h3 className="card-title">Total Customers</h3>
            <p className="text-3xl font-bold">1,234</p>
          </div>
        </div>
        <div className="card bg-base-200">
          <div className="card-body">
            <h3 className="card-title">Active Deals</h3>
            <p className="text-3xl font-bold">56</p>
          </div>
        </div>
        <div className="card bg-base-200">
          <div className="card-body">
            <h3 className="card-title">Pending Tasks</h3>
            <p className="text-3xl font-bold">23</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}