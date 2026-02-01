const API_URL = "http://localhost:5000/api/courses";

// ==================================================
//  ADD COURSE
// ==================================================
export const addCourse = async (courseData) => {
  try {
    const response = await fetch(`${API_URL}/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(courseData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to add course");
    }

    return data;
  } catch (error) {
    console.error("ADD COURSE FAILED:", error.message);
    throw error;
  }
};

// ==================================================
//  GET ALL COURSES
// ==================================================

export const getCourses = async () => {
  try {
    const response = await fetch(`${API_URL}/` , {method:"GET"});
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to fetch courses");
    }

    return data;
  } catch (error) {
    console.error("FETCH COURSES FAILED:", error.message);
    throw error;
  }
};








// ==================================================
//  GET COURSE BY ID
// ==================================================
export const getCourseById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, { method: "GET" });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to fetch course");
    }

    return data;
  } catch (error) {
    console.error("FETCH COURSE FAILED:", error.message);
    throw error;
  }
};

// ==================================================
//  UPDATE COURSE
// ==================================================
export const updateCourse = async (id, updatedData) => {
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
      throw new Error(data.error || "Failed to update course");
    }

    return data;
  } catch (error) {
    console.error("UPDATE COURSE FAILED:", error.message);
    throw error;
  }
};

// ==================================================
//  DELETE COURSE
// ==================================================
export const deleteCourse = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to delete course");
    }

    return data;
  } catch (error) {
    console.error("DELETE COURSE FAILED:", error.message);
    throw error;
  }
};
