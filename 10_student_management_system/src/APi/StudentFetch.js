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
        console.log("Response:", data);

        if (!res.ok) {
            throw new Error(data.message || "Failed to add student");
        }

        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}