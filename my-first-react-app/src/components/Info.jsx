function Info({ profileInfo, handleInfoChange, handleNext }) {
  return (
    <div className="form">
      <form onSubmit={handleNext}>
        <h1>Personal Info:</h1>
        <p>
          <label htmlFor="fullName">
            Your Name:
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Hunter Kael"
              value={profileInfo.fullName}
              onChange={handleInfoChange}
            />
          </label>
        </p>
        <p>
          <label htmlFor="fullName">
            Job Title:
            <input
              type="text"
              name="jobTitle"
              id="jobTitle"
              placeholder="Aspiring Developer"
              value={profileInfo.jobTitle}
              onChange={handleInfoChange}
            />
          </label>
        </p>
        <p>
          <label htmlFor="email">
            Email:
            <input
              type="text"
              name="email"
              id="email"
              placeholder="htkael@gmail.com"
              value={profileInfo.email}
              onChange={handleInfoChange}
            />
          </label>
        </p>
        <p>
          <label htmlFor="phone">
            Phone Number:
            <input
              type="tell"
              name="phone"
              id="phone"
              placeholder="504-315-9255"
              value={profileInfo.phone}
              onChange={handleInfoChange}
            />
          </label>
        </p>
        <p>
          <label htmlFor="address">
            Home Address:
            <input
              type="text"
              name="address"
              id="address"
              placeholder="5995 Gordon Street"
              value={profileInfo.address}
              onChange={handleInfoChange}
            />
          </label>
        </p>
        <button onClick={handleNext}>Next</button>
      </form>
    </div>
  );
}

export default Info;
