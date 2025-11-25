import pool from './db.js';

// ============================
// Fetch Course List
// ============================
export async function fetchCourseList(req, res) {
    try {
        const [result] = await pool.query("SELECT * FROM course");
        res.json(result);
    } catch (err) {
        console.log("Unable to fetch courses ", err);
        res.status(500).json({ error: "Error fetching course list" });
    }
}

// ============================
// Insert New Course
// ============================
export async function insertCourse(req, res) {
    try {
        const { courseid, coursename, duration, min_enrollment, max_enrollment } = req.body;

        const sql = `
            INSERT INTO course (courseid, coursename, duration, min_enrollment, max_enrollment)
            VALUES (?, ?, ?, ?, ?)
        `;

        const values = [courseid, coursename, duration, min_enrollment, max_enrollment];

        const [result] = await pool.query(sql, values);

        res.json({
            message: "Course inserted successfully",
            insertedId: result.insertId
        });
    } catch (err) {
        console.log("Unable to insert course ", err);
        res.status(500).json({ error: "Error inserting course" });
    }
}

// ============================
// Update Existing Course
// ============================
export async function updateCourse(req, res) {
    try {
        const { id } = req.params; 
        const { coursename, duration, min_enrollment, max_enrollment } = req.body;

        const sql = `
            UPDATE course 
            SET coursename=?, duration=?, min_enrollment=?, max_enrollment=?
            WHERE courseid=?
        `;

        const values = [coursename, duration, min_enrollment, max_enrollment, id];

        const [result] = await pool.query(sql, values);

        res.json({
            message: "Course updated successfully",
            affectedRows: result.affectedRows
        });
    } catch (err) {
        console.log("Unable to update course ", err);
        res.status(500).json({ error: "Error updating course" });
    }
}
