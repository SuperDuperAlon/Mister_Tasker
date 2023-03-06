


export function TaskList({
  tasks,
  onRemoveStay,
  onEditStay,
  onClickOutSideTheBar,
  openSearchBar,
  // onOpenStay,
}) {
  return (
    <section>
      <ul className="task-list">
        {tasks.map((task) => 
          <li key={task._id}>{task.title}</li>
        )}
      </ul>
    </section>
  )
}
