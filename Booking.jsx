import React, { useState } from "react";
import axios from "axios";

export default function BookNow() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        people: 1,
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/booking", form);
            setMessage(res.data.message);
            setForm({
                name: "",
                email: "",
                phone: "",
                service: "",
                date: "",
                people: 1,
            });
        } catch (err) {
            setMessage("Booking failed, try again!");
        }
    };

    return (
        <div className="book-container" style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
            <h2>Book Your Adventure</h2>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>

                <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />

                <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />

                <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required />

                <select name="service" value={form.service} onChange={handleChange} required>
                    <option value="">-- Select Service --</option>
                    <option value="Paragliding">Paragliding</option>
                    <option value="Rafting">Rafting</option>
                    <option value="Skydiving">Skydiving</option>
                    <option value="Camping">Camping</option>
                </select>

                <input type="date" name="date" value={form.date} onChange={handleChange} required />

                <input type="number" name="people" value={form.people} onChange={handleChange} min="1" required />

                <button type="submit" style={{ padding: "10px", background: "#007bff", color: "white", border: "none", borderRadius: "6px" }}>
                    Book Now
                </button>
            </form>

            {message && <p style={{ marginTop: "15px" }}>{message}</p>}
        </div>
    );
}
