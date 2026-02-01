// services/staffService.js

const API_URL = "http://127.0.0.1:5000/api/staff";


// ==================================================




//  ADD STAFF
// ==================================================


export const addStaff = async (staffData) =>{

    try{

        const response = await fetch(`${API_URL}/add` , {
            method: "POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(staffData),
        });

        const data =  await response.json();

        if(!response.ok){
            throw new Error(data.error || "Failed to add Staff")
        }
        return data;

    }
    catch (error){

         console.error("REQUEST FAILED:", error.message);
    throw error;

    }

};





// ==================================================
//  GET ALL STAFF
// ==================================================

export const getStaff = async () =>{

    try{
        const response = await fetch(`${API_URL}/`  , {method: "GET"})
            const data = await response.json();

        if(!response.ok){
            throw new Error("Failed to fetch staff")
        }    

        return data;


    }
    catch (error){
            console.error("FETCH STAFF FAILED:", error.message);
                throw error;

    }

}

// ==================================================
//  GET STAFF BY ID (for edit page)
// ==================================================



export const getStaffById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, { method: "GET" });

    const data = await response.json();

    if (!response.ok) {
      throw new Error("Failed to fetch staff");
    }

    return data;

  } catch (error) {
    console.error("FETCH STAFF FAILED:", error.message);
    throw error;
  }
};




// ==================================================
//  UPDATE STUDENT
// ==================================================
export const updateStaff = async (id, updatedData) => {
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
      throw new Error(data.error || "Failed to update staff");
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
export const deleteStaff = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE"
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to delete staff");
    }

    return data;

  } catch (error) {
    console.error("DELETE FAILED:", error.message);
    throw error;
  }
};
