import { useState } from 'react'
import './App.css'
import Notifications from './notifications.js';


function NotificationMessage({ notification, onClear }) {
  return (
    <li key={notification.id}>
      <strong>{notification.name}:</strong> {notification.message}
      <button className="btn btn-primary" onClick={onClear}>Clear</button>
    </li>
  );
}

function App() {
  const [notifications, setNotifications] = useState(Notifications);

  const clearNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="App">
      <h1>Notifications ({notifications.length})</h1>
      <button class="btn btn-link" onClick={clearAllNotifications}>Clear All</button>
      <ul>
        {notifications.map(notification => (
          <NotificationMessage
            key={notification.id}
            notification={notification}
            onClear={() => clearNotification(notification.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App
