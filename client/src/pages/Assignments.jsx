import React, { useState } from "react";
import { FaChevronDown, FaRegImage } from "react-icons/fa";
import { CiCircleRemove } from "react-icons/ci";
import axios from "axios";

const assignmentsList = [
  {
    id: 1,
    name: "Biology Assignment",
    date: "October 15, 2024",
    form: "Form 4",
  },
  {
    id: 2,
    name: "Chemistry Assignment",
    date: "October 10, 2024",
    form: "Form 3",
  },
  {
    id: 3,
    name: "Kiswahili Assignment",
    date: "September 12, 2024",
    form: "Form 2",
  },
  {
    id: 4,
    name: "English Assignment",
    date: "September 15, 2024",
    form: "Form 1",
  },
];

function Assignments() {
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); 

  // Handle file selection and preview
  function handleFileUpload(e) {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      if (selectedFile.type.startsWith("image/")) {
        setFilePreview(URL.createObjectURL(selectedFile));
      } else {
        setFilePreview(null);
      }
    }
  }

  
  const handleSubmit = async () => {
    if (!file) {
      setMessage("No file selected!");
      setMessageType("error"); 
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    const token = "e1e1d097a1f3890a1d3a95a6fed57f296f24d4ba"; 

    try {
      const response = await axios.post("http://127.0.0.1:8000/assignments/", formData, {
        headers: {
          "Authorization": `Token ${token}`, 
          "Content-Type": "multipart/form-data", 
        },
      });

      if (response.status === 201) {
        setMessage("File uploaded successfully!");
        setMessageType("success"); 
        setFile(null);
        setFilePreview(null);
      } else {
        setMessage("Failed to upload file.");
        setMessageType("error");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      setMessage("Error uploading file.");
      setMessageType("error"); 
    }
  };

  return (
    <div className="p-4 lg:p-20">
      <div className="border rounded-md min-h-[200px] p-10 flex flex-col justify-between items-center">
        <input
          className="hidden"
          type="file"
          id="file"
          onChange={handleFileUpload}
        />

        <label htmlFor="file" className="flex items-center gap-4 cursor-pointer">
          <FaRegImage fontSize={40} />
          Upload Assignment
        </label>

        {file && (
          <div className="my-4 relative">
            {filePreview ? (
              <img
                src={filePreview}
                alt="Preview"
                className="rounded-md object-cover w-[100px] h-[100px]"
              />
            ) : (
              <div className="flex flex-col items-center">
                <FaRegImage fontSize={40} />
                <p className="text-sm mt-2">{file.name}</p>
              </div>
            )}
            <span
              className="absolute -top-2 -right-6 cursor-pointer"
              onClick={() => {
                setFile(null);
                setFilePreview(null);
              }}
            >
              <CiCircleRemove color="red" fontSize={24} />
            </span>
          </div>
        )}
        
        
        {message && (
          <div
            className={`mb-4 text-center ${messageType === "success" ? "text-green-500" : "text-red-500"}`}
          >
            {message}
          </div>
        )}

        <div className="flex gap-4 mt-4">
          <button
            onClick={() => document.getElementById("file").click()}
            className="border border-black p-2 rounded-md"
          >
            Upload
          </button>
          <button
            onClick={handleSubmit}
            className="border border-black p-2 rounded-md"
          >
            Submit
          </button>
        </div>
      </div>

      <div>
        <p className="flex justify-between items-center my-6">
          <span>Previously uploaded assignments</span>
          <span className="flex gap-2 items-center">
            All <FaChevronDown fontSize={14} />
          </span>
        </p>
        <div className="md:px-4">
          {assignmentsList.map((assignment) => (
            <div
              key={assignment.id}
              className="flex border rounded-md items-center justify-between mb-4 p-6 hover:bg-slate-100 cursor-pointer"
            >
              <p>
                {assignment.name} / {assignment.form}
              </p>
              <p>{assignment.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Assignments;
