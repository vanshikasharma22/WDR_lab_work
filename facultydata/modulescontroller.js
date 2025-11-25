import pool from './db.js';

// ============================
// Fetch Modules List
// ============================
export async function fetchModuleList(req, res) {
    try {
        const [result] = await pool.query("SELECT * FROM modules");
        res.json(result);
    } catch (err) {
        console.log("Unable to fetch modules ", err);
        res.status(500).json({ error: "Error fetching modules list" });
    }
}

// ============================
// Insert New Module
// ============================
export async function insertModule(req, res) {
    try {
        const { moduleid, modulename, description, duration } = req.body;

        const sql = `
            INSERT INTO modules (moduleid, modulename, description, duration)
            VALUES (?, ?, ?, ?)
        `;

        const values = [moduleid, modulename, description, duration];

        const [result] = await pool.query(sql, values);

        res.json({
            message: "Module inserted successfully",
            insertedId: result.insertId
        });

    } catch (err) {
        console.log("Unable to insert module ", err);
        res.status(500).json({ error: "Error inserting module" });
    }
}

// ============================
// Update Module
// ============================
export async function updateModule(req, res) {
    try {
        const { id } = req.params; // moduleid
        const { modulename, description, duration } = req.body;

        const sql = `
            UPDATE modules
            SET modulename=?, description=?, duration=?
            WHERE moduleid=?
        `;

        const values = [modulename, description, duration, id];

        const [result] = await pool.query(sql, values);

        res.json({
            message: "Module updated successfully",
            affectedRows: result.affectedRows
        });

    } catch (err) {
        console.log("Unable to update module ", err);
        res.status(500).json({ error: "Error updating module" });
    }
}
