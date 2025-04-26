import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ isOpen, onClose, title, message, type = 'info' }) => {
  if (!isOpen) return null;

  const getTypeStyles = () => {
    switch (type) {
      case 'success':
        return 'border-green-500 bg-green-900/20';
      case 'error':
        return 'border-red-500 bg-red-900/20';
      default:
        return 'border-blue-500 bg-blue-900/20';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className={`relative z-50 w-full max-w-md p-6 mx-4 rounded-2xl border ${getTypeStyles()}`}
      >
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-secondary mb-6">{message}</p>
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-white bg-tertiary rounded-lg hover:bg-tertiary/80 transition-colors"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Modal; 