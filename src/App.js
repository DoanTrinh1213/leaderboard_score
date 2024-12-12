import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import EditForm from "./components/EditForm";

function App() {
  const [scoreData, setScoreData] = useState([
    {
      studentId: "1",
      studentName: "Nguyễn Văn A",
      attendanceScore: 8,
      plusScore: 3,
      projectScore: 7,
    },
    {
      studentId: "2",
      studentName: "Trần Thị B",
      attendanceScore: 9,
      plusScore: 2,
      projectScore: 9,
    },
  ]);
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openEditForm = (index) => {
    setSelectedIndex(index);
    setIsEditFormVisible(true); 
  };

  const closeEditForm = () => {
    setIsEditFormVisible(false); 
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ScoreList
              scoreData={scoreData}
              setScoreData={setScoreData}
              openEditForm={openEditForm}
            />
          }
        />
      </Routes>

      {isEditFormVisible && (
        <div className="modal-overlay">
          <div className="edit-form-modal">
            <EditForm
              scoreData={scoreData}
              setScoreData={setScoreData}
              index={selectedIndex}
              closeEditForm={closeEditForm}
            />
          </div>
        </div>
      )}
    </Router>
  );
}

function ScoreList({ scoreData, setScoreData, openEditForm }) {

  const handleDelete = (index) => {
    const confirmDelete = window.confirm("Bạn có chắc muốn xóa?");
    if (confirmDelete) {
      const updatedData = scoreData.filter((_, i) => i !== index);
      setScoreData(updatedData);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="main-title">THÔNG TIN ĐIỂM</h1>
        <table className="score-table">
          <thead>
            <tr>
              <th>Mã sinh viên</th>
              <th>Tên sinh viên</th>
              <th>Số buổi điểm danh</th>
              <th>Điểm cộng</th>
              <th>Điểm project</th>
              <th>Tùy chỉnh</th>
            </tr>
          </thead>
          <tbody>
            {scoreData.map((student, index) => (
              <tr key={index}>
                <td>{student.studentId}</td>
                <td>{student.studentName}</td>
                <td>{student.attendanceScore}</td>
                <td>{student.plusScore}</td>
                <td>{student.projectScore}</td>
                <td>
                  <i
                    className="bi bi-pencil-square edit-icon"
                    onClick={() => openEditForm(index)} // Mở modal chỉnh sửa
                    title="Chỉnh sửa"
                  ></i>
                  <i
                    className="bi bi-trash delete-icon"
                    onClick={() => handleDelete(index)}
                    title="Xóa"
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
