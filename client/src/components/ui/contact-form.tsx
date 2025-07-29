import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name: boolean;
  email: boolean;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({
    name: false,
    email: false
  });

  const { toast } = useToast();

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: false
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let isValid = true;
    const newErrors: FormErrors = {
      name: false,
      email: false
    };

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = true;
      isValid = false;
    }

    // Validate email
    if (!formData.email.trim() || !validateEmail(formData.email)) {
      newErrors.email = true;
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message! We will get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-forest-green font-semibold mb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`form-input ${errors.name ? 'border-red-500' : ''}`}
            required
          />
          {errors.name && (
            <div className="text-red-500 text-sm mt-1">Please enter your name</div>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-forest-green font-semibold mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`form-input ${errors.email ? 'border-red-500' : ''}`}
            required
          />
          {errors.email && (
            <div className="text-red-500 text-sm mt-1">Please enter a valid email address</div>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-forest-green font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className="form-input resize-none"
            placeholder="Tell us how we can help you..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-forest-green hover:bg-forest-green/90 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-[1.02] shadow-lg"
        >
          <i className="fas fa-paper-plane mr-2"></i>
          Send Message
        </button>
      </form>
    </div>
  );
}
