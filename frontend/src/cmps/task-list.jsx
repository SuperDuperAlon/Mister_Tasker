export function TaskList({ tasks }) {
  
  return (
    <section>
      <table>
        <thead>
          <th>Title</th>
          <th>Importance</th>
          <th>Status</th>
          <th>Tries Count</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task._id}>
              <td>{task.title}</td>
              <td>{task.importance}</td>
              <td>{task.status}</td>
              <td>0</td>
              <td>Actions</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
