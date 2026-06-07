import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://4.224.186.213/evaluation-service/notifications",
        {
          headers: {
            Authorization:
              "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJic2hyaWRoYUBnaXRhbS5pbiIsImV4cCI6MTc4MDgxNTkyMCwiaWF0IjoxNzgwODE1MDIwLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiOWNhNWZiMWQtYjYwZS00ZjAxLWI4NGEtZTdkNGZiNjQzY2VjIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiYiBzaHJpZGhhcmt1bWFyYSIsInN1YiI6IjI1ZDA1NmJmLWU5YjQtNDA4Ny05NzY0LTgwMTA4MzNhOGE5ZiJ9LCJlbWFpbCI6ImJzaHJpZGhhQGdpdGFtLmluIiwibmFtZSI6ImIgc2hyaWRoYXJrdW1hcmEiLCJyb2xsTm8iOiIyMDIzMDA3MjEyIiwiYWNjZXNzQ29kZSI6IndnS3RnWiIsImNsaWVudElEIjoiMjVkMDU2YmYtZTliNC00MDg3LTk3NjQtODAxMDgzM2E4YTlmIiwiY2xpZW50U2VjcmV0IjoiZ3hEam5OdVdTQnl1Z01WayJ9.JnaspbQlGjQwIGOKly0BXu-haGk06vSUWYSB3OYv9HA",
          },
        }
      )
      .then((res) => {
        setNotifications(res.data.notifications || []);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Notifications</h1>

      {notifications.map((n) => (
        <div
          key={n.ID}
          style={{
            border: "1px solid #ccc",
            margin: "10px",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          <h3>{n.Message}</h3>
          <p>Type: {n.Type}</p>
          <p>{n.Timestamp}</p>
        </div>
      ))}
    </div>
  );
}

export default App;