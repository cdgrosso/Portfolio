import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: any = {};
    if (!form.name) newErrors.name = 'Name is required';
    if (!form.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Invalid email';
    if (!form.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length) {
      setErrors(validation);
    } else {
      alert('Message sent!');
      setForm({ name: '', email: '', message: '' });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <label>Name</label>
        <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} onBlur={() => setErrors(validate())} className="w-full border" />
        {errors.name && <p className="text-red-600">{errors.name}</p>}
      </div>
      <div>
        <label>Email</label>
        <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} onBlur={() => setErrors(validate())} className="w-full border" />
        {errors.email && <p className="text-red-600">{errors.email}</p>}
      </div>
      <div>
        <label>Message</label>
        <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} onBlur={() => setErrors(validate())} className="w-full border" />
        {errors.message && <p className="text-red-600">{errors.message}</p>}
      </div>
      <button type="submit" className="bg-blue-800 text-white px-4 py-2">Submit</button>
    </form>
  );
};

export default Contact;
