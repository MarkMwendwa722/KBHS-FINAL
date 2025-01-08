import { useState } from 'react';
import axios from 'axios';

const Admissions = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    form: '',
    admission_number: '',
    hostel: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/admissions/',
        formData,
        {
          headers: {
            'Authorization': 'Token e1e1d097a1f3890a1d3a95a6fed57f296f24d4ba',
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Response:', response);
      setSuccessMessage('Admission successfully submitted!');
      setErrorMessage('');

      setFormData({
        first_name: '',
        last_name: '',
        form: '',
        admission_number: '',
        hostel: '',
      });

      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } catch (error) {
      if (error.response) {
        console.log('Response data:', error.response.data);
        setErrorMessage('There was an error submitting the form. Please try again.');
      } else {
        console.error('Error:', error);
        setErrorMessage('There was an error. Please check your internet connection.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      <main className="flex flex-col items-center flex-1 w-full">
        <div className="w-full">
          <h1 className="text-lg font-semibold mt-10 mb-4 ml-[36.5%] text-left">
            Admission Form
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="first_name"
              >
                First Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="first_name"
                name="first_name"
                type="text"
                value={formData.first_name}
                onChange={handleChange}
                placeholder="First Name"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="last_name"
              >
                Last Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="last_name"
                name="last_name"
                type="text"
                value={formData.last_name}
                onChange={handleChange}
                placeholder="Last Name"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="form"
            >
              Form
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="form"
              name="form"
              type="text"
              value={formData.form}
              onChange={handleChange}
              placeholder="Form"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="admission_number"
            >
              Admission Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="admission_number"
              name="admission_number"
              type="text"
              value={formData.admission_number}
              onChange={handleChange}
              placeholder="Admission Number"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="hostel"
            >
              Hostel
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="hostel"
              name="hostel"
              type="text"
              value={formData.hostel}
              onChange={handleChange}
              placeholder="Hostel"
              required
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              className="bg-custom-green hover:bg-custom-green text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>

        {successMessage && (
          <div className="bg-green-200 text-green-800 p-3 rounded mb-4">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="bg-red-200 text-red-800 p-3 rounded mb-4">
            {errorMessage}
          </div>
        )}
      </main>
    </div>
  );
};

export default Admissions;
