function Work({
  workInfo,
  handleWorkChange,
  handlePrev,
  addWork,
  workArray,
  deleteWork,
}) {
  return (
    <div className="form">
      <form onSubmit={addWork}>
        <h1>Work Experience:</h1>
        <p>
          <label htmlFor="company">
            Company:
            <input
              type="text"
              name="company"
              id="company"
              placeholder="North Texas Racquet Club"
              value={workInfo.company}
              onChange={handleWorkChange}
            />
          </label>
        </p>
        <p>
          <label htmlFor="title">
            Job Title:
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Tennis Pro"
              value={workInfo.title}
              onChange={handleWorkChange}
            />
          </label>
        </p>
        <p>
          <label htmlFor="desc">
            Job Description:
            <textarea
              name="desc"
              id="desc"
              rows={2}
              cols={60}
              placeholder="Worked alongside other tennis pros in running our elite tennis academy."
              value={workInfo.desc}
              onChange={handleWorkChange}
            />
          </label>
        </p>
        <p>
          <label htmlFor="startWork">
            Start Date:
            <input
              type="date"
              name="startWork"
              id="startWork"
              value={workInfo.start}
              onChange={handleWorkChange}
            />
          </label>
        </p>
        <p>
          <label htmlFor="endWork">
            End Date:
            <input
              type="date"
              name="endWork"
              id="endWork"
              value={workInfo.end}
              onChange={handleWorkChange}
            />
          </label>
        </p>
        <div className="buttons">
          <button onClick={handlePrev}>Back</button>
          <button onClick={addWork}>Add</button>
        </div>
      </form>

      {workArray.map((entry, index) => (
        <div key={index} className="formList">
          {entry.company} - {entry.title}
          <button onClick={() => deleteWork(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Work;
