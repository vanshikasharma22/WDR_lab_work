import pool from './db.js';

// ============================
// Fetch Faculty List
// ============================
export async function fetchFacultyList(req, res) {
    try {
        const [result] = await pool.query("SELECT * FROM faculty");
        res.json(result);
    } catch (err) {
        console.log("Unable to fetch faculty ", err);
        res.status(500).json({ error: "Error fetching faculty list" });
    }
}

// ============================
// Insert New Faculty
// ============================
export async function insertFaculty(req, res) {
    try {
        const { facultyid, facultyname, age, dob, qualification } = req.body;

        const sql = `
            INSERT INTO faculty (facultyid, facultyname, age, dob, qualification)
            VALUES (?, ?, ?, ?, ?)
        `;

        const values = [facultyid, facultyname, age, dob, qualification];

        const [result] = await pool.query(sql, values);

        res.json({
            message: "Faculty inserted successfully",
            insertedId: result.insertId
        });

    } catch (err) {
        console.log("Unable to insert faculty ", err);
        res.status(500).json({ error: "Error inserting faculty" });
    }
}

// ============================
// Update Faculty
// ============================
export async function updateFaculty(req, res) {
    try {
        const { id } = req.params;  // facultyid
        const { facultyname, age, dob, qualification } = req.body;

        const sql = `
            UPDATE faculty
            SET facultyname=?, age=?, dob=?, qualification=?
            WHERE facultyid=?
        `;

        const values = [facultyname, age, dob, qualification, id];

        const [result] = await pool.query(sql, values);

        res.json({
            message: "Faculty updated successfully",
            affectedRows: result.affectedRows
        });

    } catch (err) {
        console.log("Unable to update faculty ", err);
        res.status(500).json({ error: "Error updating faculty" });
    }
}
