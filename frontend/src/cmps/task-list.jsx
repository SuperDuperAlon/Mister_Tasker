export function TaskList({ tasks }) {
  
  return (
    <section>
      <table>
        <thead>
          <th>Title</th>
          <th>Importance</th>
          <th>Status</th>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task._id}>
              <td>{task.title}</td>
              <td>{task.importance}</td>
              <td>{task.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
