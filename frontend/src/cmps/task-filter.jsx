export function TaskFilter() {
  return (
    <>
      <div className="task-filter flex">
        Filters:
        <form className="input checkbox">
          Importance
          <input type="checkbox" name="one" />
          <label for="one">1</label>
          <input type="checkbox" name="two" />
          <label for="two">2</label>
          <input type="checkbox" name="three" />
          <label for="three">3</label>
          <input type="checkbox" name="four" />
          <label for="four">4</label>
        </form>
        |
        <form className="input text">
          Filter by Text
          <input type="text" />
        </form>
        |
        <form className="input checkbox">
          Status
          <input type="checkbox" name="new" />
          <label for="new">new</label>
          <input type="checkbox" name="done" />
          <label for="done">done</label>
          <input type="checkbox" name="fail" />
          <label for="fail">fail</label>
        </form>
      </div>
    </>
  );
}
