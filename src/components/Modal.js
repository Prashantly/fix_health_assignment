import React, { useEffect, useState } from 'react'
import styles from "../assets/stylesheets/modal.module.css"
import { doctors } from "../doctors"
import Select from 'react-select'

const Modal = () => {
    // State to manage form data

    const [cities, setCities] = useState([])
    const [cityDoctors, setCityDoctors] = useState([])
    const [selectedCity, setSelectedCity] = useState('')
    const [formData, setFormData] = useState({
        name: "",
        phoneNum: "",
        age: "",
        city: "",
        company: "",
        chiefComplaints: "",
        previousExperience: false,
    })

    useEffect(() => {
        getDoctors()
    }, [selectedCity])

    // useEffect to get cities when the component mounts
    useEffect(() => {

        getCities();

        // Check if there is a 'city' parameter in the URL
        let urlParams = new URLSearchParams(window.location.search);
        const cityParam = urlParams.get('city');
        if (cityParam) {
            const capitalizedCity = cityParam.charAt(0).toUpperCase() + cityParam.slice(1);
            console.log(capitalizedCity)
            setSelectedCity(capitalizedCity);
        }

    }, []);

    function getCities() {
        let result = doctors.map((doc) => doc.city)
        setCities(result)
    }

    //get doctors based on selected city option
    function getDoctors() {
        if (selectedCity !== '') {
            let filteredDoctors = doctors.filter((doc) => doc.city === selectedCity)
            setCityDoctors(filteredDoctors)
        }
    }

    const handleInputChange = (e) => {

        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({
            ...formData,
            [e.target.name]: value
        })
    }

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id={styles.consultForm}>Consultation booking form</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className={styles.modalBody}>
                        <form className={styles.consulationForm} onSubmit={(e) => e.preventDefault()}>
                            <fieldset>
                                <input type="text" placeholder="Your Name" name="name" value={formData.name} onChange={handleInputChange} />
                            </fieldset>

                            <fieldset>
                                <input type="number" name="phoneNum" value={formData.phoneNum} onChange={handleInputChange} placeholder="Your Phone Number" />
                            </fieldset>

                            <fieldset>
                                <input type="number" name="age" value={formData.age} onChange={handleInputChange} placeholder='Your Age' />
                            </fieldset>

                            <fieldset>
                                <Select
                                    placeholder="Select Your City..."
                                    options={selectedCity
                                        ? [{ label: selectedCity, value: selectedCity }]
                                        : Array.from(new Set(cities)).map(city => ({ label: city, value: city }))
                                    }
                                    onChange={(selectedOption) => {
                                        // Handle the selected option if needed
                                        setSelectedCity(selectedOption.value);
                                    }}
                                />
                            </fieldset>

                            <fieldset>
                                <input type="text" name="company" value={formData.company} onChange={handleInputChange} placeholder='Your Company' />
                            </fieldset>

                            {
                                formData.age > 40 && <fieldset className="mb-2">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="previousExperience"
                                            name="previousExperience"
                                            checked={formData.previousExperience}
                                            onChange={handleInputChange}
                                        />
                                        <label className="form-check-label" htmlFor="previousExperience">Any previous experience with physiotherapy</label>
                                    </div>
                                </fieldset>
                            }

                            <fieldset>
                                <textarea id="chief_complaints" cols="50" rows="3" placeholder="Type your chief complaints here..." name="chiefComplaints" value={formData.chiefComplaints} onChange={handleInputChange}></textarea>
                            </fieldset>

                            <fieldset className={styles.customSelectContainer}>
                                <Select className='mb-2' placeholder="Best available doctors"
                                    options={cityDoctors.map((doc) => ({
                                        value: doc.id,
                                        label: `${doc.name} - ${doc.expertise}`
                                    }))}
                                />
                            </fieldset>

                            <button type="submit">Book Consultation</button>
                        </form>
                    </div>
                    <div className="modal-footer mt-3">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal