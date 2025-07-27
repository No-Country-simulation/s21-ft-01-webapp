interface ModalLogoutProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ModalLogout: React.FC<ModalLogoutProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
      <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-primary">¿Cerrar sesión?</h2>
        <p className="text-gray-600 mb-6">Vas a salir de tu cuenta de CapyBank.</p>

        <div className="flex justify-end gap-4">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition">
            Cancelar
          </button>
          <button onClick={onConfirm} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalLogout;
