import { format } from "date-fns";

const formatDate = (dateString) => {
  return format(new Date(dateString), "MMM yyyy");
};

function Cv({ profileInfo, educationArray, workArray }) {
  const educationEntries = educationArray.map((entry, index) => (
    <div key={index} className="infoEntry">
      <div className="infoLeft">
        <h3 className="school">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-circle"
          >
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
          {entry.school}
        </h3>
        <div className="degree">{entry.degree}</div>
      </div>
      <div className="dates">
        <div className="start">{formatDate(entry.start)}</div>
        <div>-</div>
        <div className="end">{formatDate(entry.end)}</div>
      </div>
    </div>
  ));

  const workEntries = workArray.map((entry, index) => (
    <div key={index} className="infoEntry">
      <div className="infoLeft">
        <h3 className="company">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-circle"
          >
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
          {entry.company}
        </h3>
        <div className="title">{entry.title}</div>
        <div className="desc">{entry.desc}</div>
      </div>
      <div className="dates">
        <div className="start">{formatDate(entry.startWork)}</div>
        <div>-</div>
        <div className="end">{formatDate(entry.endWork)}</div>
      </div>
    </div>
  ));

  return (
    <div className="resume">
      <div className="header">
        <div className="mainName">
          <h1 className="name">{profileInfo.fullName}</h1>
          <h2 className="jobTitle">{profileInfo.jobTitle}</h2>
        </div>
        <div className="contacts">
          {profileInfo.email && (
            <div className="iconText">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              {profileInfo.email}
            </div>
          )}
          {profileInfo.phone && (
            <div className="iconText">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-phone"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              {profileInfo.phone}
            </div>
          )}
          {profileInfo.address && (
            <div className="iconText">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-map-pin"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              {profileInfo.address}
            </div>
          )}
        </div>
      </div>
      <div className="main">
        <div className="infoSection">
          {educationArray.length > 0 && (
            <>
              <h2 className="sectionHeader">Education:</h2>
              {educationEntries}
            </>
          )}
        </div>
        <div className="infoSection">
          {workArray.length > 0 && (
            <>
              <h2 className="sectionHeader">Work Experience:</h2>
              {workEntries}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cv;
