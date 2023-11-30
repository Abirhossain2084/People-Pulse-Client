

import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Swal from 'sweetalert2';

const ContactUsPage = () => {
    const axiosSecure = useAxiosSecure();

    const { register, handleSubmit,reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
          // Assuming there's an API endpoint for storing contact form data
          await axiosSecure.post('/contact-us', data);
    
          // Handle success
          Swal.fire({
            icon: 'success',
            title: 'Form submitted successfully!',
            showConfirmButton: false,
            timer: 1500,
          });
    
          // Reset the form after successful submission
          reset();
        } catch (error) {
          console.error('Error submitting form:', error);
    
          // Handle error
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong. Please try again later.',
          });
        }
      };

    return (
        <div className="container mx-auto grid justify-center p-4 relative" style={{ backgroundImage: 'url("https://i.ibb.co/nQ3ZT4S/alex-kotliarskyi-QBp-ZGq-EMs-Kg-unsplash.jpg")', backgroundSize: 'cover' }}>
      <div className="dark-overlay absolute top-0 left-0 w-full h-full bg-black opacity-20 pointer-events-none"></div>

      <SectionTitle
        heading={'Contact us'}
        subheading={'Feel free to submit your opinion'}
      />


            <div className='bg-slate-400 p-10 rounded-lg'>
                {/* Contact form */}
                <form onSubmit={handleSubmit(onSubmit)} className="mt-4 grid">
                    <label className="block mb-2">Name:</label>
                    <input
                        {...register('name', { required: 'Name is required' })}
                        className="border p-2 mb-2"
                    />
                    {errors.name && <span className="text-red-600">{errors.name.message}</span>}

                    <label className="block mb-2">Email:</label>
                    <input
                        {...register('email', { required: 'Email is required', pattern: /\S+@\S+\.\S+/ })}
                        className="border p-2 mb-2"
                    />
                    {errors.email && <span className="text-red-600">{errors.email.message}</span>}

                    <label className="block mb-2">Message:</label>
                    <textarea
                        {...register('message', { required: 'Message is required' })}
                        className="border p-2 mb-2"
                    />
                    {errors.message && <span className="text-red-600">{errors.message.message}</span>}

                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                        Submit
                    </button>
                </form>
            </div>


        </div>
    );
};

export default ContactUsPage;
