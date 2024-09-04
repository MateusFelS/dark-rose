import { FaEnvelope, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto py-4 px-6">
        <div className="flex justify-center items-center">
          <p className="text-sm">&copy; 2024 - Familia Quatro Patas. Todos os direitos reservados.</p>
          <div className="ml-4 flex space-x-4">
            <a href="https://www.instagram.com/familia_quatropatas/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="cursor-pointer hover:scale-125 ease-in duration-300" color="#E1306C" size={30} />
            </a>
            <a href="mailto:?client=GMAIL&to=ac.watanabe@outlook.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope className="cursor-pointer hover:scale-125 ease-in duration-300" color="gray" size={30} /> 
            </a>
            <a href="wa.me/5562998404719" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp  className="cursor-pointer hover:scale-125 ease-in duration-300" color="green" size={30} />
            </a> 
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
