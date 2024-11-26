import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AppointmentsTable = () => {
    const navigate = useNavigate();
    const [appointments, setAppointments] = useState([]);

    
    useEffect(() => {
        const savedAppointments = localStorage.getItem('appointments');
        if (savedAppointments) {
            setAppointments(JSON.parse(savedAppointments)); 
        }
    }, []);

    
    const handleDelete = (indexToDelete) => {
        const updatedAppointments = appointments.filter((_, index) => index !== indexToDelete);
        setAppointments(updatedAppointments); 
        localStorage.setItem('appointments', JSON.stringify(updatedAppointments)); 
        alert('Appointment deleted!');
    };

    return (
        <div className="p-6 max-w-4xl mx-auto bg-gray-100 rounded-md shadow-md">
            <button
                onClick={() => navigate('/')}
                className="flex items-center gap-2 mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Back to Home
            </button>
            <h1 className="text-2xl font-bold mb-4">Appointments</h1>
            {appointments.length > 0 ? (
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2">Name</th>
                            <th className="border border-gray-300 px-4 py-2">Age</th>
                            <th className="border border-gray-300 px-4 py-2">Date</th>
                            <th className="border border-gray-300 px-4 py-2">Time</th>
                            <th className="border border-gray-300 px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((appointment, index) => (
                            <tr key={index} className="text-center">
                                <td className="border border-gray-300 px-4 py-2">{appointment.name}</td>
                                <td className="border border-gray-300 px-4 py-2">{appointment.age}</td>
                                <td className="border border-gray-300 px-4 py-2">{appointment.date}</td>
                                <td className="border border-gray-300 px-4 py-2">{appointment.time}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <button
                                        onClick={() => handleDelete(index)}
                                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No appointments found.</p>
            )}
        </div>
    );
};

export default AppointmentsTable;
