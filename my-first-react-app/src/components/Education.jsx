function Education({
  educationInfo,
  handleEducationChange,
  handleNext,
  handlePrev,
  addEducation,
  educationArray,
  deleteEducation,
}) {
  return (
    <div className="form">
      <form onSubmit={addEducation}>
        <h1>Education Info:</h1>
        <p>
          <label htmlFor="school">
            Institution Name:
            <input
              type="text"
              name="school"
              id="school"
              placeholder="The University of Louisiana at Lafayette"
              value={educationInfo.school}
              onChange={handleEducationChange}
            />
          </label>
        </p>
        <p>
          <label htmlFor="start">
            Start Date:
            <input
              type="date"
              name="start"
              id="start"
              value={educationInfo.start}
              onChange={handleEducationChange}
            />
          </label>
        </p>
        <p>
          <label htmlFor="end">
            Graduation Date:
            <input
              type="date"
              name="end"
              id="end"
              value={educationInfo.end}
              onChange={handleEducationChange}
            />
          </label>
        </p>
        <p>
          <label htmlFor="degree">
            Degree:
            <input
              type="text"
              name="degree"
              id="degree"
              value={educationInfo.degree}
              onChange={handleEducationChange}
            />
          </label>
        </p>
        <div className="buttons">
          <button onClick={handlePrev}>Back</button>
          <button onClick={addEducation}>Add</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </form>

      <div className="formListContainer">
        {educationArray.map((entry, index) => {
          return (
            <div key={index} className="formList">
              {entry.school} - {entry.degree}
              <button onClick={() => deleteEducation(index)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Education;
