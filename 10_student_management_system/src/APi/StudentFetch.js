const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function getStudent() {
    try {
        const res = await fetch(`${BASE_URL}/allStudent`);

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message);
        }

        return data.students;
    } catch (error) {
        throw new Error(error.message);
    }
}
export async function AddStudents(student) {
    try {
        const res = await fetch(`${BASE_URL}/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(student),
        });
        const data = await res.json();
        if (!res.ok) {
            throw new Error(data.message || "Failed to add student");
        }

        console.log("Response:", data);


        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function DeleteStudent(id) {
    try {
        const res = await fetch(`${BASE_URL}/${id}`, {
            method: "DELETE",
        });
        const data = await res.json();
        console.log("data", data);
        if (!res.ok) {
            throw new Error(data.message || "Failed to delete student");
        }
        return data;
    } catch (error) {
        throw new Error(error.message);
    }

}
export async function UpdateStudent(id, student){
    try {
        const res = await fetch(`${BASE_URL}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message || "Student update failed");
    }

    return data;
    } catch (error) {
        throw new Error(error.message);
    }
}