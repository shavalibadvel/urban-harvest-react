import { useSelector } from "react-redux";
import StatCard from "../components/StatCard";
import { mockStats, mockOrders } from "../data/mockData";
import "../styles/Dashboard.css";

function Dashboard() {
  const user = useSelector((state) => state.auth.user);

  const getStatusClass = (status) => {
    if (status === "Delivered") return "badge-green";
    if (status === "Pending") return "badge-orange";
    if (status === "Shipped") return "badge-blue";
    return "";
  };

  return (
    <div className="dashboard">
      <div className="dashboard-welcome">
        <h1>Welcome back, Admin 👋</h1>
        <p>Here's what's happening with your store today.</p>
      </div>

      <div className="stats-grid">
        {mockStats.map((stat) => (
          <StatCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            color={stat.color}
          />
        ))}
      </div>
      <div className="recent-orders">
        <div className="section-header">
          <h2>Recent Orders</h2>
          <button className="view-all-btn">View All</button>
        </div>

        <div className="table-wrapper">
          <table className="orders-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Item</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {mockOrders.map((order) => (
                <tr key={order.id}>
                  <td className="order-id">{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.item}</td>
                  <td className="amount">{order.amount}</td>
                  <td>{order.date}</td>
                  <td>
                    <span className={"badge " + getStatusClass(order.status)}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
