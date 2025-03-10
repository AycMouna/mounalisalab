import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { UploadIcon, CreditCardIcon, FileTextIcon, ArrowRightIcon, CheckIcon } from 'lucide-react';

const ExternalUpload = () => {
  const [file, setFile] = useState(null);
  const [email, setEmail] = useState('');
  const [resultCode, setResultCode] = useState('');
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [step, setStep] = useState('upload'); // upload, payment, complete
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    // Validate file and email
    if (!file || !email) {
      return;
    }
    
    // Proceed to payment
    setStep('payment');
  };

  const handlePayment = (e) => {
    e.preventDefault();
    // Simulate payment processing
    setPaymentComplete(true);
    
    // Generate a random result access code
    const code = Math.random().toString(36).substring(2, 10).toUpperCase();
    setResultCode(code);
    
    // Complete the upload process
    setUploadComplete(true);
    setStep('complete');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  const handleCheckResults = () => {
    navigate('/check-results');
  };

  const handleUploadAnother = () => {
    // Reset form and go back to upload step
    setFile(null);
    setEmail('');
    setStep('upload');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-rose-50 py-12 px-4">
      <div className="max-w-xl w-full bg-white rounded-xl shadow-lg p-8" role="main">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">External Scan Upload</h1>
        
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className={`flex flex-col items-center ${step === 'upload' ? 'text-blue-600' : 'text-gray-500'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step === 'upload' ? 'bg-blue-100 border-2 border-blue-600' : 'bg-gray-100'}`}>
                <UploadIcon size={20} />
              </div>
              <span className="text-sm">Upload</span>
            </div>
            <div className={`flex-1 h-1 mx-2 ${step === 'upload' ? 'bg-gray-200' : 'bg-blue-400'}`}></div>
            <div className={`flex flex-col items-center ${step === 'payment' ? 'text-blue-600' : (step === 'complete' ? 'text-gray-500' : 'text-gray-300')}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step === 'payment' ? 'bg-blue-100 border-2 border-blue-600' : (step === 'complete' ? 'bg-gray-100' : 'bg-gray-50')}`}>
                <CreditCardIcon size={20} />
              </div>
              <span className="text-sm">Payment</span>
            </div>
            <div className={`flex-1 h-1 mx-2 ${step === 'complete' ? 'bg-blue-400' : 'bg-gray-200'}`}></div>
            <div className={`flex flex-col items-center ${step === 'complete' ? 'text-blue-600' : 'text-gray-300'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step === 'complete' ? 'bg-blue-100 border-2 border-blue-600' : 'bg-gray-50'}`}>
                <FileTextIcon size={20} />
              </div>
              <span className="text-sm">Complete</span>
            </div>
          </div>
        </div>

        {step === 'upload' && (
          <form onSubmit={handleUpload} className="space-y-6">
            <div className="p-4 bg-blue-50 rounded-lg text-blue-800 mb-4">
              <h2 className="text-lg font-semibold mb-2">External Patient Upload</h2>
              <p className="text-sm">
                Upload your scan file for AI analysis without creating an account. 
                You'll be able to check your results later using a unique code.
              </p>
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
                value={email}
                onChange={handleEmailChange}
                placeholder="We'll send your results here"
              />
            </div>

            <div>
              <label htmlFor="scan-file" className="block text-gray-700 text-sm font-medium mb-2">
                Upload Scan File
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
                <UploadIcon size={32} className="text-gray-400 mb-3" />
                <p className="text-sm text-gray-500 mb-2">
                  {file ? file.name : "Drop your file here, or click to browse"}
                </p>
                <input
                  id="scan-file"
                  type="file"
                  className="sr-only"
                  onChange={handleFileChange}
                  accept=".jpg,.jpeg,.png,.pdf,.dicom"
                />
                <button
                  type="button"
                  onClick={() => document.getElementById('scan-file').click()}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg text-sm"
                >
                  Browse Files
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                type="submit"
                disabled={!file || !email}
                className={`py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                  !file || !email
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                Continue to Payment
              </button>
              <Link
                to="/login"
                className="py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-colors text-center"
              >
                Back to Login
              </Link>
            </div>
          </form>
        )}

        {step === 'payment' && (
          <form onSubmit={handlePayment} className="space-y-6">
            <div className="p-4 bg-blue-50 rounded-lg text-blue-800 mb-4">
              <h2 className="text-lg font-semibold mb-2">Payment Required</h2>
              <p className="text-sm">
                A one-time payment is required for external scan analysis. 
                Your results will be available within 24-48 hours.
              </p>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-medium text-gray-800 mb-2">Order Summary</h3>
              <div className="flex justify-between text-sm mb-2">
                <span>Scan Analysis (External Patient)</span>
                <span>$49.99</span>
              </div>
              <div className="border-t border-gray-200 my-2 pt-2 flex justify-between font-medium">
                <span>Total</span>
                <span>$49.99</span>
              </div>
            </div>

            {/* Payment form fields would go here in a real application */}
            <div className="space-y-4">
              <div>
                <label htmlFor="card-number" className="block text-gray-700 text-sm font-medium mb-2">
                  Card Number
                </label>
                <input
                  id="card-number"
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="expiry" className="block text-gray-700 text-sm font-medium mb-2">
                    Expiry Date
                  </label>
                  <input
                    id="expiry"
                    type="text"
                    placeholder="MM/YY"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
                  />
                </div>
                <div>
                  <label htmlFor="cvv" className="block text-gray-700 text-sm font-medium mb-2">
                    CVV
                  </label>
                  <input
                    id="cvv"
                    type="text"
                    placeholder="123"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                type="submit"
                className="py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Complete Payment
              </button>
              <button
                type="button"
                onClick={() => setStep('upload')}
                className="py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-colors"
              >
                Back
              </button>
            </div>
          </form>
        )}

        {step === 'complete' && (
          <div className="space-y-6">
            <div className="p-6 bg-green-50 rounded-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckIcon size={32} className="text-green-600" />
              </div>
              <h2 className="text-xl font-semibold text-green-800 mb-2">Upload Successful!</h2>
              <p className="text-sm text-green-700 mb-4">
                Your scan has been uploaded and is being processed. Results will be available in 24-48 hours.
              </p>
              
              <div className="p-4 bg-white rounded-lg border border-green-200 mb-4">
                <h3 className="font-medium text-gray-800 mb-2">Your Result Access Code</h3>
                <div className="flex items-center justify-center">
                  <span className="text-xl font-mono tracking-wider py-2 px-4 bg-gray-100 rounded">{resultCode}</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Save this code. You'll need it to check your results later.
                </p>
              </div>
              
              <p className="text-sm">
                We've also sent this code to {email}
              </p>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-medium text-gray-800 mb-3">What's Next?</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-blue-600 text-xs">1</span>
                  </span>
                  <span>Your scan is being analyzed by our AI system</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-blue-600 text-xs">2</span>
                  </span>
                  <span>Results will be ready within 24-48 hours</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-blue-600 text-xs">3</span>
                  </span>
                  <span>You'll receive an email notification when ready</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-2 mt-0.5">
                    <span className="text-blue-600 text-xs">4</span>
                  </span>
                  <span>Use your access code to view results online</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={handleCheckResults}
                className="py-3 px-4 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <span>Check Results</span>
                <ArrowRightIcon size={16} className="ml-2" />
              </button>
              <button
                type="button"
                onClick={handleUploadAnother}
                className="py-3 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-colors"
              >
                Upload Another Scan
              </button>
            </div>

            <div className="text-center mt-6">
              <p className="text-sm text-gray-600 mb-2">Want to create an account for easier management?</p>
              <button
                type="button"
                onClick={handleRegister}
                className="text-blue-600 hover:text-blue-800 font-medium text-sm"
              >
                Register Now
              </button>
            </div>
          </div>
        )}

        {/* Footer information */}
        <div className="mt-8 pt-4 border-t border-gray-200 text-center text-xs text-gray-500">
          <p>For assistance, contact support@medicalscan.com</p>
          <p className="mt-1">© 2025 MedicalScan AI. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default ExternalUpload;