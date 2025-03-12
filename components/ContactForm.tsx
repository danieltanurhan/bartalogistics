import React from 'react';

const ContactForm: React.FC = () => {
    return (
        <form className="flex flex-col max-w-md mx-auto p-4 bg-white rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <label htmlFor="name" className="mb-2">Name</label>
            <input type="text" id="name" className="mb-4 p-2 border rounded" required />

            <label htmlFor="email" className="mb-2">Email</label>
            <input type="email" id="email" className="mb-4 p-2 border rounded" required />

            <label htmlFor="message" className="mb-2">Message</label>
            <textarea id="message" className="mb-4 p-2 border rounded" rows={4} required></textarea>

            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Send</button>
        </form>
    );
};

export default ContactForm;