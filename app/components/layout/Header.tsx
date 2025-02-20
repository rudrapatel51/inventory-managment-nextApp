interface HeaderProps {
    title: string;
  }
  
  export const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
      <header className="bg-base-100 border-b border-base-300 p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">{title}</h2>
          <div className="flex items-center gap-4">
            <div className="dropdown dropdown-end">
              <button className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <i className="icon icon-bell"></i>
                  <span className="badge badge-sm badge-primary indicator-item">3</span>
                </div>
              </button>
            </div>
            <div className="dropdown dropdown-end">
              <button className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="/placeholder-avatar.jpg" alt="User avatar" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  };
  