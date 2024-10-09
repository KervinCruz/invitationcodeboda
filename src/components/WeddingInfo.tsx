import React from 'react';
import { Calendar, MapPin, Users, Hash, Ticket, LogOut } from 'lucide-react';
import invitations from '../data/invitations.json';

interface WeddingInfoProps {
  guestName: string;
  username: string;
  onLogout: () => void;
}

const WeddingInfo: React.FC<WeddingInfoProps> = ({ guestName, username, onLogout }) => {
  const invitation = invitations.find(inv => inv.username === username);

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-light text-primary-400 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Fhilwend</h1>
        <h2 className="text-2xl font-semibold text-secondary-600 mb-2">&</h2>
        <h1 className="text-4xl font-light text-primary-400" style={{ fontFamily: "'Playfair Display', serif" }}>Josue</h1>
      </div>
      <div className="space-y-6">
        <div className="flex items-center">
          <Calendar className="text-primary-400 mr-4" size={24} />
          <div>
            <h3 className="font-semibold text-lg text-secondary-700">Fecha y Hora</h3>
            <p className="text-secondary-600">Sábado 23 de Noviembre a las 5pm</p>
          </div>
        </div>
        <div className="flex items-center">
          <MapPin className="text-primary-400 mr-4" size={24} />
          <div>
            <h3 className="font-semibold text-lg text-secondary-700">Dirección</h3>
            <a
              href="https://goo.gl/maps/your-wedding-location"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:underline"
            >
              Ver ubicación en Google Maps
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <Users className="text-primary-400 mr-4" size={24} />
          <div>
            <h3 className="font-semibold text-lg text-secondary-700">Nombre del Invitado</h3>
            <p className="text-secondary-600">{guestName}</p>
          </div>
        </div>
        {invitation && (
          <>
            <div className="flex items-center">
              <Hash className="text-primary-400 mr-4" size={24} />
              <div>
                <h3 className="font-semibold text-lg text-secondary-700">Número de Mesa</h3>
                <p className="text-secondary-600">{invitation.tableNumber}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Ticket className="text-primary-400 mr-4" size={24} />
              <div>
                <h3 className="font-semibold text-lg text-secondary-700">Código de Entrada</h3>
                <p className="font-mono text-xl text-secondary-600">{invitation.entryCode}</p>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="mt-8 flex justify-center">
        <button
          onClick={onLogout}
          className="flex items-center bg-primary-400 text-white py-2 px-4 rounded-md hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
        >
          <LogOut className="mr-2" size={20} />
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default WeddingInfo;