"use client"

import { useState } from 'react'
import { User, Mail, Phone, GraduationCap, Users, Code, Lightbulb, Star } from 'lucide-react'
import Link from 'next/link'
import Sponsors from "@/components/Sponsors";

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        university: '',
        yearOfStudy: '',
        major: '',
        experienceLevel: '',
        teamPreference: '',
        dietaryRestrictions: '',
        emergencyContact: '',
        emergencyPhone: '',
        shirtSize: '',
        projectIdeas: '',
        skillsInterests: '',
        previousHackathons: '',
        portfolioLink: '',
        agreeToTerms: false,
        agreeToPhotos: false,
        subscribeNewsletter: false
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        alert('Registration submitted successfully! We\'ll be in touch soon.')
    }

    return (
        <div className="min-h-screen bg-gray-900">
            <header className="bg-gray-800 py-4">
                <div className="container mx-auto px-4">
                    <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-cyan-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                        ← Back to Ember Hacks
                    </Link>
                </div>
            </header>

            <section className="py-20 bg-gray-900">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-orange-500 to-cyan-400 bg-clip-text text-transparent">
                                Register for Ember Hacks
                            </span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Join us for 36 hours of innovation, creativity, and coding at UTM's first-ever hackathon.
                            Registration is free and includes meals, swag, and access to workshops!
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-slate-900 to-zinc-900 rounded-2xl p-8 shadow-xl">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="bg-gray-800 rounded-xl p-6">
                                <h3 className="text-2xl font-semibold mb-6 flex items-center text-orange-400">
                                    <User className="w-6 h-6 mr-2" />
                                    Personal Information
                                </h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-300 mb-2 font-medium">First Name *</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-300"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-300 mb-2 font-medium">Last Name *</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-300"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-300 mb-2 font-medium">Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-300"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-300 mb-2 font-medium">Phone Number *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-300"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-800 rounded-xl p-6">
                                <h3 className="text-2xl font-semibold mb-6 flex items-center text-cyan-400">
                                    <GraduationCap className="w-6 h-6 mr-2" />
                                    Academic Information
                                </h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-300 mb-2 font-medium">University/School *</label>
                                        <input
                                            type="text"
                                            name="university"
                                            value={formData.university}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-300"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-300 mb-2 font-medium">Year of Study *</label>
                                        <select
                                            name="yearOfStudy"
                                            value={formData.yearOfStudy}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-300"
                                        >
                                            <option value="">Select Year</option>
                                            <option value="high-school">High School</option>
                                            <option value="1st-year">1st Year</option>
                                            <option value="2nd-year">2nd Year</option>
                                            <option value="3rd-year">3rd Year</option>
                                            <option value="4th-year">4th Year</option>
                                            <option value="graduate">Graduate</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-gray-300 mb-2 font-medium">Major/Field of Study *</label>
                                        <input
                                            type="text"
                                            name="major"
                                            value={formData.major}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-300"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-800 rounded-xl p-6">
                                <h3 className="text-2xl font-semibold mb-6 flex items-center text-purple-400">
                                    <Code className="w-6 h-6 mr-2" />
                                    Experience & Preferences
                                </h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-300 mb-2 font-medium">Experience Level *</label>
                                        <select
                                            name="experienceLevel"
                                            value={formData.experienceLevel}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300"
                                        >
                                            <option value="">Select Experience</option>
                                            <option value="beginner">Beginner (0-1 years)</option>
                                            <option value="intermediate">Intermediate (1-3 years)</option>
                                            <option value="advanced">Advanced (3+ years)</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-gray-300 mb-2 font-medium">Team Preference</label>
                                        <select
                                            name="teamPreference"
                                            value={formData.teamPreference}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300"
                                        >
                                            <option value="">Select Preference</option>
                                            <option value="have-team">I have a team</option>
                                            <option value="need-team">I need a team</option>
                                            <option value="flexible">I'm flexible</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-gray-300 mb-2 font-medium">Previous Hackathons</label>
                                        <input
                                            type="text"
                                            name="previousHackathons"
                                            value={formData.previousHackathons}
                                            onChange={handleInputChange}
                                            placeholder="How many hackathons have you attended?"
                                            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-300 mb-2 font-medium">Portfolio/LinkedIn</label>
                                        <input
                                            type="url"
                                            name="portfolioLink"
                                            value={formData.portfolioLink}
                                            onChange={handleInputChange}
                                            placeholder="https://..."
                                            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-800 rounded-xl p-6">
                                <h3 className="text-2xl font-semibold mb-6 flex items-center text-green-400">
                                    <Lightbulb className="w-6 h-6 mr-2" />
                                    Additional Information
                                </h3>
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-gray-300 mb-2 font-medium">Skills & Interests</label>
                                        <textarea
                                            name="skillsInterests"
                                            value={formData.skillsInterests}
                                            onChange={handleInputChange}
                                            rows={3}
                                            placeholder="Tell us about your programming languages, frameworks, and interests..."
                                            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-300 mb-2 font-medium">Project Ideas</label>
                                        <textarea
                                            name="projectIdeas"
                                            value={formData.projectIdeas}
                                            onChange={handleInputChange}
                                            rows={3}
                                            placeholder="Any project ideas or themes you're excited about? (Optional)"
                                            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
                                        />
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-gray-300 mb-2 font-medium">T-Shirt Size *</label>
                                            <select
                                                name="shirtSize"
                                                value={formData.shirtSize}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
                                            >
                                                <option value="">Select Size</option>
                                                <option value="xs">XS</option>
                                                <option value="s">S</option>
                                                <option value="m">M</option>
                                                <option value="l">L</option>
                                                <option value="xl">XL</option>
                                                <option value="xxl">XXL</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-gray-300 mb-2 font-medium">Dietary Restrictions</label>
                                            <input
                                                type="text"
                                                name="dietaryRestrictions"
                                                value={formData.dietaryRestrictions}
                                                onChange={handleInputChange}
                                                placeholder="Any allergies or dietary needs?"
                                                className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-800 rounded-xl p-6">
                                <h3 className="text-2xl font-semibold mb-6 flex items-center text-red-400">
                                    <Star className="w-6 h-6 mr-2" />
                                    Emergency Contact
                                </h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-300 mb-2 font-medium">Emergency Contact Name *</label>
                                        <input
                                            type="text"
                                            name="emergencyContact"
                                            value={formData.emergencyContact}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-300"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-300 mb-2 font-medium">Emergency Contact Phone *</label>
                                        <input
                                            type="tel"
                                            name="emergencyPhone"
                                            value={formData.emergencyPhone}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-300"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-800 rounded-xl p-6">
                                <h3 className="text-2xl font-semibold mb-6 text-gray-300">Agreements</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <input
                                            type="checkbox"
                                            name="agreeToTerms"
                                            checked={formData.agreeToTerms}
                                            onChange={handleInputChange}
                                            required
                                            className="mt-1 w-5 h-5 text-orange-400 bg-gray-700 border-gray-600 rounded focus:ring-orange-400"
                                        />
                                        <label className="text-gray-300">
                                            I agree to the <span className="text-orange-400 underline cursor-pointer">terms and conditions</span> and <span className="text-orange-400 underline cursor-pointer">code of conduct</span> *
                                        </label>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <input
                                            type="checkbox"
                                            name="agreeToPhotos"
                                            checked={formData.agreeToPhotos}
                                            onChange={handleInputChange}
                                            className="mt-1 w-5 h-5 text-orange-400 bg-gray-700 border-gray-600 rounded focus:ring-orange-400"
                                        />
                                        <label className="text-gray-300">
                                            I consent to being photographed and having my image used for promotional purposes
                                        </label>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <input
                                            type="checkbox"
                                            name="subscribeNewsletter"
                                            checked={formData.subscribeNewsletter}
                                            onChange={handleInputChange}
                                            className="mt-1 w-5 h-5 text-orange-400 bg-gray-700 border-gray-600 rounded focus:ring-orange-400"
                                        />
                                        <label className="text-gray-300">
                                            Subscribe to our newsletter for updates about future events
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center pt-8">
                                <button
                                    type="submit"
                                    className="px-12 py-4 bg-gradient-to-r from-orange-500 to-cyan-400 text-white font-bold rounded-full text-xl hover:shadow-lg hover:shadow-orange-500/25 transform hover:-translate-y-1 transition duration-300"
                                >
                                    Complete Registration
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-gray-400 mb-4">
                            Have questions about registration? Contact us at{' '}
                            <a href="mailto:sam@utmsu.ca" className="text-orange-400 hover:text-orange-300">
                                sam@utmsu.ca
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Register