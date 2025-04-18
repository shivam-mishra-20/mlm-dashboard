export default function ReferralLinkCard() {
    const referralLink = "https://yourapp.com/register?ref=shivam123";
  
    const copyToClipboard = () => {
      navigator.clipboard.writeText(referralLink);
      alert("Referral link copied!");
    };
  
    return (
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
        <h2 className="text-lg font-bold mb-2">Your Referral Link</h2>
        <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-3 rounded">
          <span className="text-sm">{referralLink}</span>
          <button
            onClick={copyToClipboard}
            className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
          >
            Copy
          </button>
        </div>
      </div>
    );
  }
  