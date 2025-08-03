import React from 'react';
import Logo from './Logo';

interface FormHeaderProps {
  title: string;
}

const FormHeader: React.FC<FormHeaderProps> = ({ title }) => {
  return (
    <div className="text-center space-y-4">
      <Logo size="medium" />
      <div className="bg-slate-100 inline-block px-8 py-3 rounded-lg">
        <h2 className="text-slate-900 font-bold text-xl">{title}</h2>
      </div>
    </div>
  );
};

export default FormHeader;