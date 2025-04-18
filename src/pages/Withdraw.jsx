import React, { useState } from 'react';
import { AlertCircle, CheckCircle, CreditCard, DollarSign, ArrowDown, Clock } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const Withdraw = () => {
  const { userData } = useAppContext();
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('bank');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [error, setError] = useState('');
  
  // Recent withdrawals data
  const withdrawals = [
    { id: 1, date: '2023-06-15', amount: '₹5,000', method: 'Bank Transfer', status: 'completed' },
    { id: 2, date: '2023-05-22', amount: '₹3,500', method: 'UPI', status: 'completed' },
    { id: 3, date: '2023-04-10', amount: '₹7,000', method: 'Bank Transfer', status: 'completed' },
    { id: 4, date: '2023-03-28', amount: '₹2,500', method: 'PayPal', status: 'pending' }
  ];
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!amount || isNaN(parseFloat(amount))) {
      setError('Please enter a valid amount');
      return;
    }
    
    if (parseFloat(amount) > userData.withdrawable) {
      setError(`You can only withdraw up to ₹${userData.withdrawable.toLocaleString()}`);
      return;
    }
    
    if (parseFloat(amount) < 500) {
      setError('Minimum withdrawal amount is ₹500');
      return;
    }
    
    // Clear errors and show confirmation
    setError('');
    setShowConfirmation(true);
  };
  
  const processWithdrawal = () => {
    // Here you would handle the actual withdrawal process
    // For now, just close the confirmation dialog
    setShowConfirmation(false);
    
    // Reset the form
    setAmount('');
    setPaymentMethod('bank');
    
    // Show success message (in a real app, you'd likely use a toast)
    alert('Withdrawal request submitted successfully!');
  };
  
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Withdraw Funds</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Available Balance Card */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold opacity-90">Available Balance</h2>
            <DollarSign className="h-6 w-6 opacity-80" />
          </div>
          <div className="mt-4">
            <p className="text-3xl font-bold">₹{userData.withdrawable.toLocaleString()}</p>
            <p className="mt-1 text-sm opacity-75">Available for withdrawal</p>
          </div>
          <div className="mt-6 flex items-center text-sm">
            <ArrowDown className="h-4 w-4 mr-1" />
            <span>Last updated today</span>
          </div>
        </div>
        
        {/* Withdrawal Status */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 border border-gray-100 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Withdrawal Status</h2>
            <Clock className="h-6 w-6 text-gray-400" />
          </div>
          <div className="mt-4">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
              <p className="text-sm text-gray-600 dark:text-gray-400">No pending withdrawals</p>
            </div>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
              Processing times: 1-3 business days<br />
              Minimum withdrawal: ₹500
            </p>
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 border border-gray-100 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Payment Methods</h2>
          <div className="mt-4 space-y-2">
            <button className="w-full py-2 px-4 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-650 transition-colors rounded-lg flex items-center justify-between">
              <span className="text-gray-700 dark:text-gray-300">Bank Transfer</span>
              <CheckCircle className="h-5 w-5 text-green-500" />
            </button>
            <button className="w-full py-2 px-4 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-650 transition-colors rounded-lg flex items-center justify-between">
              <span className="text-gray-700 dark:text-gray-300">UPI</span>
              <CheckCircle className="h-5 w-5 text-green-500" />
            </button>
            <button className="w-full py-2 px-4 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-650 transition-colors rounded-lg flex items-center justify-between">
              <span className="text-gray-700 dark:text-gray-300">PayPal</span>
              <CheckCircle className="h-5 w-5 text-green-500" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Withdrawal Form */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Request Withdrawal</h2>
        
        {error && (
          <div className="mb-4 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 text-red-700 dark:text-red-400 p-4 rounded">
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 mr-2" />
              <p>{error}</p>
            </div>
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Amount (₹)
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">₹</span>
                </div>
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">INR</span>
                </div>
              </div>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Min: ₹500 · Max: ₹{userData.withdrawable.toLocaleString()}
              </p>
            </div>
            
            <div>
              <label htmlFor="payment-method" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Payment Method
              </label>
              <select
                id="payment-method"
                name="payment-method"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option value="bank">Bank Transfer</option>
                <option value="upi">UPI</option>
                <option value="paypal">PayPal</option>
              </select>
            </div>
          </div>
          
          {paymentMethod === 'bank' && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="bank-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Bank Name
                </label>
                <input
                  type="text"
                  name="bank-name"
                  id="bank-name"
                  className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Enter bank name"
                />
              </div>
              <div>
                <label htmlFor="account-number" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Account Number
                </label>
                <input
                  type="text"
                  name="account-number"
                  id="account-number"
                  className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Enter account number"
                />
              </div>
              <div>
                <label htmlFor="ifsc" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  IFSC Code
                </label>
                <input
                  type="text"
                  name="ifsc"
                  id="ifsc"
                  className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Enter IFSC code"
                />
              </div>
              <div>
                <label htmlFor="account-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Account Holder Name
                </label>
                <input
                  type="text"
                  name="account-name"
                  id="account-name"
                  className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Enter account holder name"
                />
              </div>
            </div>
          )}
          
          {paymentMethod === 'upi' && (
            <div className="mt-6">
              <label htmlFor="upi-id" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                UPI ID
              </label>
              <input
                type="text"
                name="upi-id"
                id="upi-id"
                className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Enter UPI ID (example@bank)"
              />
            </div>
          )}
          
          {paymentMethod === 'paypal' && (
            <div className="mt-6">
              <label htmlFor="paypal-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                PayPal Email
              </label>
              <input
                type="email"
                name="paypal-email"
                id="paypal-email"
                className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Enter PayPal email address"
              />
            </div>
          )}
          
          <div className="mt-8">
            <button
              type="submit"
              className="w-full md:w-auto inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              <CreditCard className="h-5 w-5 mr-2" />
              Request Withdrawal
            </button>
          </div>
        </form>
      </div>
      
      {/* Withdrawal History */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Withdrawal History</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Date</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Amount</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Method</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {withdrawals.map((withdrawal) => (
                <tr key={withdrawal.id} className="hover:bg-gray-50 dark:hover:bg-gray-750">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{withdrawal.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{withdrawal.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{withdrawal.method}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      withdrawal.status === 'completed'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                    }`}>
                      {withdrawal.status === 'completed' ? (
                        <>
                          <CheckCircle className="mr-1 h-3 w-3" />
                          Completed
                        </>
                      ) : (
                        <>
                          <Clock className="mr-1 h-3 w-3" />
                          Pending
                        </>
                      )}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 dark:bg-gray-900 opacity-75"></div>
            </div>
            
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            
            <div className="inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 sm:mx-0 sm:h-10 sm:w-10">
                    <CreditCard className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white" id="modal-title">
                      Confirm Withdrawal
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        You are about to withdraw <span className="font-semibold text-gray-900 dark:text-white">₹{parseFloat(amount).toLocaleString()}</span> to 
                        your {paymentMethod === 'bank' ? 'bank account' : paymentMethod === 'upi' ? 'UPI ID' : 'PayPal account'}.
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        Processing time is typically 1-3 business days. Would you like to proceed?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button 
                  type="button" 
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={processWithdrawal}
                >
                  Confirm
                </button>
                <button 
                  type="button" 
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setShowConfirmation(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Withdraw;