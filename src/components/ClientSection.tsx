import React from 'react'; //
import { clients } from '../data/projects';

export default function ClientSection() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-12 text-center">
          Trusted by
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-12 gap-x-8">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center group">
              <span className="text-sm font-medium text-gray-400 group-hover:text-black transition-colors duration-300 text-center break-keep">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}