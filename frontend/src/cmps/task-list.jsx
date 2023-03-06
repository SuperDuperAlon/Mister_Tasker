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
          <tr>
            <td>
              Task Title:
              <input type="text" name="title" />
            </td>
            <td colSpan={3}>
              Importance:
              <select>
                <option value="one">1</option>
                <option value="two">2</option>
                <option value="three">3</option>
                <option value="four">4</option>
              </select>
            </td>
            <td>
              <button>save</button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
