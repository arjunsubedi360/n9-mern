import React, { useState } from 'react';

function ContactForm() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted:', formState);
        // You can add form validation and submission logic here
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Message:
                <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                />
            </label>
            <br />
            <input type="submit" value="Submit" />
        </form>
    );
}

export default ContactForm;
