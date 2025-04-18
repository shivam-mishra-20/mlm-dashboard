import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Profile = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 ml-64 p-6">
        <Navbar />
        <div className="text-xl font-semibold">User Profile</div>
        <div className="bg-white p-6 rounded-xl shadow-md mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="text-sm text-gray-500">Full Name</div>
              <div className="text-lg font-semibold">John Doe</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Email</div>
              <div className="text-lg font-semibold">john.doe@example.com</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Phone</div>
              <div className="text-lg font-semibold">+91 9876543210</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
