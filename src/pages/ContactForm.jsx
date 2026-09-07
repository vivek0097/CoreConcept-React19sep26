import React, {useState} from 'react';
 
 const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

//input handler
    const handleChange = (e) => {   
    const {name, value} = e.target;
    setForm((prevForm) => ({
        ...prevForm,
        [name]: value
    }));
  }
    
    

//form submit handler
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        // Perform form submission logic here

        setTimeout(() => {
            setForm({
                name: '',
                email: '',
                message: ''
            });
        }, 1000);
    }


  return (
    <div>   
        <h1>this  is  contact form  component</h1>
            <div className="contact-form bg-gray-100 p-6 rounded-lg shadow-md  flex justify-center border-2 h-40vh border-indigo-600"> 
                    <form className="w-1/2 max-w-md flex flex-col space-y-4 " onSubmit={handleSubmit}>
                        <input type="text" placeholder="Enter your name" name='name' value={form.name} onChange={handleChange} />
                        <input type="email" placeholder="Enter your email" name='email' value={form.email} onChange={handleChange}/>
                        <textarea placeholder="Enter your message" name='message' value={form.message} onChange={handleChange}></textarea>
                        <button type="submit" className='bg-red-400 text-white cursor-pointer'>Submit</button>   
                    </form>
            </div>
  
    </div>
  )
}

export default ContactForm;
