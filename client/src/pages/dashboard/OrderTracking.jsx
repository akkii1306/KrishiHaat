import React from 'react';

const OrderTracking = ({ events = [] }) => {
  // events: [{date, title, description, status}]
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Order Tracking</h2>
      {events.length === 0 ? (
        <p className="text-gray-600">No tracking information available.</p>
      ) : (
        <ol className="relative border-l border-gray-200">
          {events.map((e, idx) => (
            <li key={idx} className="mb-10 ml-6">
              <span className={"absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full bg-" + (e.status === 'done' ? 'green-500' : 'gray-300')}></span>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold">{e.title}</h3>
                <time className="text-sm text-gray-400">{e.date}</time>
              </div>
              <p className="text-sm text-gray-600">{e.description}</p>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default OrderTracking;
