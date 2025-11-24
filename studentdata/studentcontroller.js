import pool from './db.js';

// ============================
// Fetch Students
// ============================
export async function fetchStudentsList(req, res) {
    try {
        const [result] = await pool.query("SELECT * FROM student");
        res.json(result);
    } catch (err) {
        console.log("Unable to fetch data ", err);
        res.status(500).json({ error: "Error fetching data" });
    }
}

// ============================
// Insert Student
// ============================
export async function insertStudent(req, res) {
    try {
        const { name, age, city } = req.body;

        const sql = "INSERT INTO student (name, age, city) VALUES (?, ?, ?)";
        const values = [name, age, city];

        const [result] = await pool.query(sql, values);

        res.json({
            message: "Student inserted successfully",
            insertedId: result.insertId
        });
    } catch (err) {
        console.log("Unable to insert data ", err);
        res.status(500).json({ error: "Error inserting data" });
    }
}

// ============================
// Update Student
// ============================
export async function updateStudent(req, res) {
    try {
        const { id } = req.params;
        const { name, age, city } = req.body;

        const sql = "UPDATE student SET name=?, age=?, city=? WHERE id=?";
        const values = [name, age, city, id];

        const [result] = await pool.query(sql, values);

        res.json({
            message: "Student updated successfully",
            affectedRows: result.affectedRows
        });
    } catch (err) {
        console.log("Unable to update data ", err);
        res.status(500).json({ error: "Error updating data" });
    }
}

// ============================
// Delete Student
// ============================
export async function deleteStudent(req, res) {
    try {
        const { id } = req.params;

        const sql = "DELETE FROM student WHERE id=?";
        const [result] = await pool.query(sql, [id]);

        res.json({
            message: "Student deleted successfully",
            affectedRows: result.affectedRows
        });
    } catch (err) {
        console.log("Unable to delete data ", err);
        res.status(500).json({ error: "Error deleting data" });
    }
}
