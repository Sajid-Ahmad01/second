import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiArrowGoBackFill } from "react-icons/ri";

const Apply = () => {
    const navigate = useNavigate();

    
    const [details, setdetails] = useState({
        name: "",
        age: "",
        date: "",
        time: ""
    });

    
    const [entry, setentry] = useState([]);

    
    useEffect(() => {
        const savedEntries = localStorage.getItem('appointments');
        if (savedEntries) {
            setentry(JSON.parse(savedEntries)); 
        }
    }, []);

    const setValue = (event) => {
        const { name, value } = event.target;
        setdetails((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();    
        const updatedEntries = [...entry, details];
        setentry(updatedEntries);

        
        localStorage.setItem('appointments', JSON.stringify(updatedEntries));

        
        alert('Appointment Submitted!');
        setdetails({
            name: "",
            age: "",
            date: "",
            time: ""
        });

        
        navigate('/');
    };

    return (
        <div className="p-6 max-w-md mx-auto bg-gray-100 rounded-md shadow-md">
            <button
                onClick={() => navigate('/')}
                className="flex items-center gap-2 mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                <RiArrowGoBackFill size={20} /> Back to Home Page
            </button>
            <form onSubmit={handleSubmit}>
                <fieldset className="mb-4">
                    <legend className="font-semibold">Enter your Name</legend>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={details.name}
                        onChange={setValue}
                        className="w-full p-2 mt-2 border rounded"
                        required
                    />
                </fieldset>
                <fieldset className="mb-4">
                    <legend className="font-semibold">Enter your Age</legend>
                    <input
                        type="number"
                        name="age"
                        placeholder="Enter your age"
                        value={details.age}
                        onChange={setValue}
                        className="w-full p-2 mt-2 border rounded"
                        required
                    />
                </fieldset>
                <fieldset className="mb-4">
                    <legend className="font-semibold">Select a Date</legend>
                    <input
                        type="date"
                        name="date"
                        value={details.date}
                        onChange={setValue}
                        className="w-full p-2 mt-2 border rounded"
                        required
                    />
                </fieldset>
                <fieldset className="mb-4">
                    <legend className="font-semibold">Select a Time</legend>
                    <input
                        type="time"
                        name="time"
                        value={details.time}
                        onChange={setValue}
                        className="w-full p-2 mt-2 border rounded"
                        required
                    />
                </fieldset>
                <button
                    type="submit"
                    className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                    Submit Appointment
                </button>
            </form>

            
        </div>
    );
};

export default Apply;
