import './Contact.css'
import emailjs from '@emailjs/browser';
import {useState} from "react";


function Contact() {

    const [form, setForm] = useState({name: '', email: '', message: ''});
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [attempted, setAttempted] = useState(false);
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setAttempted(true);
        console.log(attempted, 'sttempteds')
        const newErrors = { name: '', email: '', message: '' };
        if (!form.name) newErrors.name = 'missing';
        if (!form.email) newErrors.email = 'missing';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'invalid';
        if (!form.message) newErrors.message = 'missing';
        else if (form.message.length < 10) newErrors.message = 'short';

        setErrors(newErrors);
        if (Object.values(newErrors).some(Boolean)) return;

        setStatus('sending');
        try {
            await emailjs.send(
                'service_bpkryhk',
                'template_xqmytp8',
                { name: form.name, email: form.email, message: form.message },
                '5xZmRZzZRhY0r-Zew'
            );
            setStatus('success');
            setForm({ name: '', email: '', message: '' });
            setAttempted(false);
            setErrors({ name: '', email: '', message: '' });
        } catch {
            setStatus('error');
        }
    };




    return (
        <section id="contact" className="contact-section">
            <div className=" d-flex flex-column justify-content-center align-items-center">
                <h1 className="font-text" style={{color: 'var(--accent)'}}>&nbsp; Get In Touch &nbsp;</h1>
                <form className="d-flex flex-column" style={{width: '100%'}} onSubmit={handleSubmit} noValidate>
                    <div style={{ textAlign: 'left'}}>
                        <label className="text-color">Name</label>
                        {attempted && errors.name === 'missing' && (
                            <p className="error-message">* A name is required to submit</p>
                        )}
                        <input
                            style={{marginBottom: '10px'}}
                            name="name"
                            className="form-control"
                            type="text"
                            placeholder="Enter name"
                            required
                            value={form.name}
                            onChange={handleChange}
                        />

                        <label className="text-color">Email</label>
                        {attempted && errors.email === 'missing' && (
                            <p className="error-message">* A valid email is required to submit</p>
                        )}
                        {attempted && errors.email === 'invalid' && (
                            <p className="error-message">* Please enter a valid email</p>
                        )}
                        <input
                            style={{marginBottom: '10px'}}
                            name="email"
                            className="form-control"
                            type="text"
                            placeholder="Enter email"
                            required
                            value={form.email}
                            onChange={handleChange}
                        />

                        <label className="text-color">Message</label>
                        {attempted && errors.message === 'missing' && (
                            <p className="error-message">* A message is required to submit</p>
                        )}
                        {attempted && errors.message === 'short' && (
                            <p className="error-message">* Please enter a message with at least 10 characters</p>
                        )}
                        <textarea
                            style={{marginBottom: '10px'}}
                            name="message"
                            className="form-control"
                            rows={4}
                            required
                            value={form.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <div className="d-flex justify-content-center" style={{paddingTop: '10px'}}>
                        <button
                            type="submit"
                            className="btn global-btn"
                            disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending...' : 'Submit'}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;