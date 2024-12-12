import React, { useState } from "react";
import "../styles/editform.css";


function EditForm({ scoreData, setScoreData, index, closeEditForm }) {
  const student = scoreData[index];
  const [formData, setFormData] = useState({ ...student });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = [...scoreData];
    updatedData[index] = formData; 
    setScoreData(updatedData);
    closeEditForm(); 
  };

  return (
    <div className="edit-form">
      <h1>Chỉnh sửa thông tin điểm </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Mã sinh viên:</label>
          <input
            type="text"
            name="studentId"
            value={formData.studentId}
            onChange={handleChange}
            disabled
          />
        </div>
        <div>
          <label>Tên sinh viên:</label>
          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Số buổi điểm danh:</label>
          <input
            type="number"
            name="attendanceScore"
            value={formData.attendanceScore}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Điểm cộng:</label>
          <input
            type="number"
            name="plusScore"
            value={formData.plusScore}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Điểm project:</label>
          <input
            type="number"
            name="projectScore"
            value={formData.projectScore}
            onChange={handleChange}
          />
        </div>
        <div className="button-container">
          <button type="submit">Lưu</button>
          <button type="button" onClick={closeEditForm}>
            Hủy
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditForm;
