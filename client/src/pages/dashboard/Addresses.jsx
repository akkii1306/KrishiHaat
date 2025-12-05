import { useState, useEffect } from 'react';

const Addresses = () => {
  const [addresses, setAddresses] = useState([]);
  const [form, setForm] = useState({ address: '', city: '', postalCode: '', country: '' });

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('addresses') || '[]');
    setAddresses(stored);
  }, []);

  const saveAddresses = (next) => {
    setAddresses(next);
    localStorage.setItem('addresses', JSON.stringify(next));
  };

  const handleAdd = () => {
    if (!form.address) return;
    const next = [...addresses, { ...form, id: Date.now() }];
    saveAddresses(next);
    setForm({ address: '', city: '', postalCode: '', country: '' });
  };

  const remove = (id) => saveAddresses(addresses.filter(a => a.id !== id));

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Manage Addresses</h2>
      <div className="space-y-3 mb-4">
        <input placeholder="Street Address" value={form.address} onChange={(e)=>setForm({...form,address:e.target.value})} className="w-full border rounded px-3 py-2" />
        <input placeholder="City" value={form.city} onChange={(e)=>setForm({...form,city:e.target.value})} className="w-full border rounded px-3 py-2" />
        <input placeholder="Postal Code" value={form.postalCode} onChange={(e)=>setForm({...form,postalCode:e.target.value})} className="w-full border rounded px-3 py-2" />
        <input placeholder="Country" value={form.country} onChange={(e)=>setForm({...form,country:e.target.value})} className="w-full border rounded px-3 py-2" />
        <div className="flex gap-2">
          <button onClick={handleAdd} className="bg-[#347928] text-white px-4 py-2 rounded">Add</button>
        </div>
      </div>
      <div className="space-y-3">
        {addresses.length === 0 ? (
          <p className="text-gray-600">No saved addresses.</p>
        ) : (
          addresses.map(a => (
            <div key={a.id} className="p-3 border rounded flex justify-between items-start">
              <div>
                <div className="font-semibold">{a.address}</div>
                <div className="text-sm text-gray-600">{a.city} • {a.postalCode} • {a.country}</div>
              </div>
              <button onClick={()=>remove(a.id)} className="text-red-500">Remove</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Addresses;
