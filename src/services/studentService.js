// services/studentService.js

const API_URL = "http://127.0.0.1:5000/api/students";

// ==================================================
//  ADD STUDENT
// ==================================================
export const addStudent = async (studentData) => {
  try {
    const response = await fetch(`${API_URL}/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studentData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to add student");
    }

    return data;

  } catch (error) {
    console.error("REQUEST FAILED:", error.message);
    throw error;
  }
};

// ==================================================
//  GET ALL STUDENTS
// ==================================================
export const getStudents = async () => {
  try {
    const response = await fetch(`${API_URL}/`, { method: "GET" });

    const data = await response.json();

    if (!response.ok) {
      throw new Error("Failed to fetch students");
    }

    return data;

  } catch (error) {
    console.error("FETCH STUDENTS FAILED:", error.message);
    throw error;
  }
};

// ==================================================
//  GET STUDENT BY ID (for edit page)
// ==================================================
export const getStudentById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, { method: "GET" });

    const data = await response.json();

    if (!response.ok) {
      throw new Error("Failed to fetch student");
    }

    return data;

  } catch (error) {
    console.error("FETCH STUDENT FAILED:", error.message);
    throw error;
  }
};

// ==================================================
//  UPDATE STUDENT
// ==================================================
export const updateStudent = async (id, updatedData) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to update student");
    }

    return data;

  } catch (error) {
    console.error("UPDATE FAILED:", error.message);
    throw error;
  }
};



// ==================================================
//  DELETE STUDENT
// ==================================================
export const deleteStudent = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE"
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to delete student");
    }

    return data;

  } catch (error) {
    console.error("DELETE FAILED:", error.message);
    throw error;
  }
};
