import { useState } from "react";
import "../App.css";
import Cv from "./Cv";
import Info from "./Info";
import Education from "./Education";
import Work from "./Work";
import { useLocalStorage } from "../hooks/useLocalStorage";

function App() {
  const [profileInfo, setProfileInfo] = useLocalStorage("profile", {
    fullName: "",
    jobTitle: "",
    email: "",
    phone: "",
    address: "",
  });

  const [educationInfo, setEducationInfo] = useState({
    school: "",
    start: "",
    end: "",
    degree: "",
  });

  const [educationArray, setEducationArray] = useLocalStorage("education", []);

  const [workInfo, setWorkInfo] = useState({
    company: "",
    title: "",
    desc: "",
    startWork: "",
    endWork: "",
  });

  const [workArray, setWorkArray] = useLocalStorage("work", []);

  const forms = [
    <Info
      key="infoForm"
      profileInfo={profileInfo}
      handleInfoChange={handleInfoChange}
      handleNext={nextForm}
    />,
    <Education
      key="educationForm"
      educationInfo={educationInfo}
      handleEducationChange={handleEducationChange}
      handleNext={nextForm}
      handlePrev={prevForm}
      addEducation={addEducation}
      educationArray={educationArray}
      deleteEducation={deleteEducation}
    />,
    <Work
      key="workForm"
      workInfo={workInfo}
      handleWorkChange={handleWorkChange}
      handleNext={nextForm}
      handlePrev={prevForm}
      addWork={addWork}
      workArray={workArray}
      deleteWork={deleteWork}
    />,
  ];

  const [currentForm, setCurrentForm] = useState(0);

  function nextForm(event) {
    event.preventDefault();
    setCurrentForm((prev) => {
      return prev < forms.length - 1 ? prev + 1 : prev;
    });
  }

  function prevForm(event) {
    event.preventDefault();
    setCurrentForm((prev) => {
      return prev > 0 ? prev - 1 : prev;
    });
  }

  function handleInfoChange(event) {
    setProfileInfo({
      ...profileInfo,
      [event.target.name]: event.target.value,
    });
  }

  function handleEducationChange(event) {
    setEducationInfo({
      ...educationInfo,
      [event.target.name]: event.target.value,
    });
  }

  function handleWorkChange(event) {
    setWorkInfo({
      ...workInfo,
      [event.target.name]: event.target.value,
    });
  }

  function addEducation(event) {
    event.preventDefault();
    setEducationArray([...educationArray, educationInfo]);
  }

  function deleteEducation(indexToDelete) {
    setEducationArray(
      educationArray.filter((_, index) => index !== indexToDelete)
    );
  }

  function addWork(event) {
    event.preventDefault();
    setWorkArray([...workArray, workInfo]);
  }

  function deleteWork(indexToDelete) {
    setWorkArray(workArray.filter((_, index) => index !== indexToDelete));
  }

  return (
    <>
      {forms[currentForm]}
      <Cv
        profileInfo={profileInfo}
        educationArray={educationArray}
        workArray={workArray}
      />
    </>
  );
}

export default App;
