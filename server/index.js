require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// --- Mongo ---
mongoose
    .connect(process.env.MONGO_URI, { dbName: "tripplanner" })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.error("Mongo error:", err));

// --- Models ---
const bookingSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        email: { type: String, required: true, trim: true },
        phone: { type: String, required: true, trim: true },
        service: { type: String, required: true, trim: true },
        date: { type: String, required: true }, // keep as string (YYYY-MM-DD)
        people: { type: Number, required: true, min: 1 },
        status: {
            type: String,
            enum: ["pending", "confirmed", "cancelled"],
            default: "pending",
        },
        notes: { type: String, default: "" },
    },
    { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);

// --- Simple Admin auth (header: X-Admin-Key: <ADMIN_KEY>) ---
function adminOnly(req, res, next) {
    const key = req.header("X-Admin-Key");
    if (!key || key !== process.env.ADMIN_KEY) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    next();
}

// --- Public route (used by Book Now page) ---
app.post("/api/bookings", async (req, res) => {
    try {
        const booking = new Booking(req.body);
        await booking.save();
        res.json({ message: "Booking successful!", booking });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Booking failed!", error: error.message });
    }
});

// --- Admin routes ---
app.get("/api/bookings", adminOnly, async (req, res) => {
    try {
        const {
            q,               // text search
            status,          // pending|confirmed|cancelled
            service,         // filter by service name
            dateFrom,        // YYYY-MM-DD
            dateTo,          // YYYY-MM-DD
            page = 1,
            limit = 20,
        } = req.query;

        const filter = {};
        if (status) filter.status = status;
        if (service) filter.service = service;
        if (q) {
            filter.$or = [
                { name: new RegExp(q, "i") },
                { email: new RegExp(q, "i") },
                { phone: new RegExp(q, "i") },
            ];
        }
        if (dateFrom || dateTo) {
            const range = {};
            if (dateFrom) range.$gte = dateFrom;
            if (dateTo) range.$lte = dateTo;
            filter.date = range;
        }

        const skip = (Number(page) - 1) * Number(limit);
        const [items, total] = await Promise.all([
            Booking.find(filter).sort({ createdAt: -1 }).skip(skip).limit(Number(limit)),
            Booking.countDocuments(filter),
        ]);

        res.json({ items, total, page: Number(page), pages: Math.ceil(total / Number(limit)) });
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Failed to fetch bookings" });
    }
});

app.patch("/api/bookings/:id/status", adminOnly, async (req, res) => {
    try {
        const { status, notes } = req.body;
        const booking = await Booking.findByIdAndUpdate(
            req.params.id,
            { ...(status && { status }), ...(notes !== undefined && { notes }) },
            { new: true }
        );
        if (!booking) return res.status(404).json({ message: "Not found" });
        res.json({ message: "Updated", booking });
    } catch (e) {
        console.error(e);
        res.status(400).json({ message: "Update failed", error: e.message });
    }
});

app.delete("/api/bookings/:id", adminOnly, async (req, res) => {
    try {
        const del = await Booking.findByIdAndDelete(req.params.id);
        if (!del) return res.status(404).json({ message: "Not found" });
        res.json({ message: "Deleted" });
    } catch (e) {
        console.error(e);
        res.status(400).json({ message: "Delete failed" });
    }
});

// Quick stats for dashboard cards
app.get("/api/bookings-stats", adminOnly, async (req, res) => {
    const [total, pending, confirmed, cancelled] = await Promise.all([
        Booking.countDocuments({}),
        Booking.countDocuments({ status: "pending" }),
        Booking.countDocuments({ status: "confirmed" }),
        Booking.countDocuments({ status: "cancelled" }),
    ]);
    res.json({ total, pending, confirmed, cancelled });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
