import { useState } from 'react';
import { trackFormSubmission, trackFormError } from '../utils/tracking';

interface FormData {
  name: string;
  email: string;
  phone: string;
  productInterest: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  productInterest?: string;
  company?: string;
  message?: string;
}

const productOptions = [
  { value: '', label: 'Select a product...' },
  { value: 'flanges', label: 'Stainless Steel Flanges' },
  { value: 'pipes', label: 'Stainless Steel Pipes & Tubes' },
  { value: 'sheets', label: 'Stainless Steel Sheets & Plates' },
  { value: 'coils', label: 'Stainless Steel Coils & Strips' },
  { value: 'fittings', label: 'Stainless Steel Fittings' },
  { value: 'bars', label: 'Stainless Steel Bars & Rods' },
  { value: 'wire', label: 'Stainless Steel Wire & Rope' },
  { value: 'other', label: 'Other / Custom Request' },
];

function validateField(name: string, value: string): string | undefined {
  switch (name) {
    case 'name':
      if (!value.trim()) return 'Name is required';
      if (value.trim().length < 2) return 'Name must be at least 2 characters';
      if (!/^[a-zA-Z\s]+$/.test(value.trim())) return 'Name can only contain letters and spaces';
      return undefined;

    case 'email':
      if (!value.trim()) return 'Email is required';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return 'Please enter a valid email address';
      return undefined;

    case 'phone':
      if (!value.trim()) return 'Phone number is required';
      if (!/^\+?[\d\s\-().]{7,20}$/.test(value.trim())) return 'Please enter a valid phone number';
      return undefined;

    case 'productInterest':
      if (!value) return 'Please select a product';
      return undefined;

    case 'company':
      if (value.trim() && value.trim().length < 2) return 'Company name must be at least 2 characters';
      return undefined;

    case 'message':
      if (value.trim() && value.trim().length < 10) return 'Message must be at least 10 characters';
      return undefined;

    default:
      return undefined;
  }
}

export default function EnquiryForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    productInterest: '',
    company: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateAll = (): boolean => {
    const newErrors: FormErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof FormData]);
      if (error) newErrors[key as keyof FormErrors] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateAll()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        trackFormSubmission('stainless_steel_flanges', formData.productInterest);
        setIsSubmitting(false);
        setSubmissionId(result.submission?.id || null);
        setIsSubmitted(true);
      } else {
        throw new Error(result.error || 'Submission failed');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      trackFormError('stainless_steel_flanges', errorMessage);
      setIsSubmitting(false);
      console.error('[Enquiry Form Error]', errorMessage);
      alert('There was an error submitting your enquiry. Please try again or call us directly.');
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      productInterest: '',
      company: '',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
    setSubmissionId(null);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Thank You!</h3>
        <p className="text-slate-600 mb-4">
          Your enquiry has been received. A sales representative will contact you within 2 hours.
        </p>
        {submissionId && (
          <p className="text-sm text-slate-400 mb-4">Reference: {submissionId}</p>
        )}
        <button
          onClick={handleReset}
          className="bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold py-2 px-6 rounded-lg transition-colors"
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Name */}
      <div className="sm:col-span-2">
        <label htmlFor="name" className="block text-sm font-medium text-slate-200 mb-1">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-2.5 rounded bg-slate-800 border text-white placeholder-slate-400 focus:outline-none transition-colors ${
            errors.name ? 'border-red-500 focus:border-red-500' : 'border-slate-700 focus:border-teal-500'
          }`}
          placeholder="John Smith"
        />
        {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-1">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-2.5 rounded bg-slate-800 border text-white placeholder-slate-400 focus:outline-none transition-colors ${
            errors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-700 focus:border-teal-500'
          }`}
          placeholder="john@company.com"
        />
        {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate-200 mb-1">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-4 py-2.5 rounded bg-slate-800 border text-white placeholder-slate-400 focus:outline-none transition-colors ${
            errors.phone ? 'border-red-500 focus:border-red-500' : 'border-slate-700 focus:border-teal-500'
          }`}
          placeholder="+971 50 123 4567"
        />
        {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-slate-200 mb-1">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className={`w-full px-4 py-2.5 rounded bg-slate-800 border text-white placeholder-slate-400 focus:outline-none transition-colors ${
            errors.company ? 'border-red-500 focus:border-red-500' : 'border-slate-700 focus:border-teal-500'
          }`}
          placeholder="Your company name"
        />
        {errors.company && <p className="mt-1 text-xs text-red-400">{errors.company}</p>}
      </div>

      {/* Product Interest */}
      <div>
        <label htmlFor="productInterest" className="block text-sm font-medium text-slate-200 mb-1">
          Product Interest *
        </label>
        <select
          id="productInterest"
          name="productInterest"
          value={formData.productInterest}
          onChange={handleChange}
          className={`w-full px-4 py-2.5 rounded bg-slate-800 border text-white placeholder-slate-400 focus:outline-none transition-colors ${
            errors.productInterest ? 'border-red-500 focus:border-red-500' : 'border-slate-700 focus:border-teal-500'
          }`}
        >
          {productOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.productInterest && <p className="mt-1 text-xs text-red-400">{errors.productInterest}</p>}
      </div>

      {/* Message */}
      <div className="sm:col-span-2">
        <label htmlFor="message" className="block text-sm font-medium text-slate-200 mb-1">
          Message / Specifications
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          className={`w-full px-4 py-2.5 rounded bg-slate-800 border text-white placeholder-slate-400 focus:outline-none transition-colors resize-y ${
            errors.message ? 'border-red-500 focus:border-red-500' : 'border-slate-700 focus:border-teal-500'
          }`}
          placeholder="Enter your requirements, quantities, or questions..."
        />
        {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
      </div>

      {/* Submit */}
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Submitting...
            </>
          ) : (
            'Send Enquiry'
          )}
        </button>
      </div>
    </form>
  );
}
