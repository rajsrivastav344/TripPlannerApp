
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BookNow = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const selectedService = location.state;

    const [cart, setCart] = useState([]);

    useEffect(() => {
        if (selectedService) {
            // ✅ Check if already in cart
            setCart((prevCart) => {
                const exists = prevCart.find((item) => item.name === selectedService.name);
                if (exists) {
                    return prevCart.map((item) =>
                        item.name === selectedService.name
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    );
                }
                return [...prevCart, { ...selectedService, quantity: 1 }];
            });
        }
    }, [selectedService]);

    const updateQuantity = (id, quantity) => {
        if (quantity <= 0) {
            setCart(cart.filter((item) => item.name !== id));
        } else {
            setCart(
                cart.map((item) =>
                    item.name === id ? { ...item, quantity } : item
                )
            );
        }
    };

    const totalPrice = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Selected Booking */}
            <div>
                <h2 className="text-xl font-bold mb-4">Your Booking</h2>
                {cart.length === 0 ? (
                    <p className="text-gray-500">No items booked yet.</p>
                ) : (
                    <div className="space-y-4">
                        {cart.map((item, index) => (
                            <div key={index} className="p-4 border rounded-lg shadow">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    style={{ width: "100%", borderRadius: "8px" }}
                                />
                                <h3 className="font-semibold mt-2">{item.name}</h3>
                                <p>{item.details}</p>
                                <p>
                                    ₹{item.price} × {item.quantity} ={" "}
                                    <strong>₹{item.price * item.quantity}</strong>
                                </p>
                                <div className="flex items-center gap-2 mt-2">
                                    <button
                                        className="px-3 py-1 bg-gray-300 rounded"
                                        onClick={() =>
                                            updateQuantity(item.name, item.quantity - 1)
                                        }
                                    >
                                        -
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button
                                        className="px-3 py-1 bg-gray-300 rounded"
                                        onClick={() =>
                                            updateQuantity(item.name, item.quantity + 1)
                                        }
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        ))}
                        <h3 className="text-lg font-bold">Total: ₹{totalPrice}</h3>

                        {/* ✅ Add More Services */}
                        <button
                            className="w-full bg-gray-500 text-white p-3 rounded-lg"
                            onClick={() => navigate("/services")} 
                        >
                            + Add More Services
                        </button>

                        {/* Confirm Booking */}
                        <button className="w-full bg-blue-600 text-white p-3 rounded-lg">
                            Confirm Booking
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookNow;
