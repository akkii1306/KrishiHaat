import { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';

const Profile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [form, setForm] = useState({ name: user?.name || '', email: user?.email || '' });
  const [editing, setEditing] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSave = () => {
    if (!form.name.trim()) return toast.error('Name is required');
    updateUser({ name: form.name });
    setEditing(false);
    toast.success('Profile updated');
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Profile</h2>
      <div className="space-y-3">
        <div>
          <label className="text-sm text-gray-600">Name</label>
          <input name="name" value={form.name} onChange={handleChange} disabled={!editing} className="w-full border rounded px-3 py-2 mt-1" />
        </div>
        <div>
          <label className="text-sm text-gray-600">Email</label>
          <input name="email" value={form.email} disabled className="w-full border rounded px-3 py-2 mt-1 bg-gray-50" />
        </div>
        <div className="flex gap-3">
          {editing ? (
            <>
              <button onClick={handleSave} className="bg-[#347928] text-white px-4 py-2 rounded">Save</button>
              <button onClick={() => { setEditing(false); setForm({ name: user?.name || '', email: user?.email || '' }); }} className="px-4 py-2 rounded border">Cancel</button>
            </>
          ) : (
            <button onClick={() => setEditing(true)} className="px-4 py-2 rounded border">Edit Profile</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
