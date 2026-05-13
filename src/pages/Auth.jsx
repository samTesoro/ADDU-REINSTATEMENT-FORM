import adduBG from '../images/addu-bg.png';
import adduSeal from '../images/addu-seal-trans.png';
import googleIcon from '../images/google-icon.png';
import TrajanProRegular from '../assets/fonts/TrajanPro-Regular.ttf';

const fontFaceStyle = `
  @font-face {
    font-family: 'TrajanPro-Regular';
    src: url('${TrajanProRegular}') format('truetype');
  }
`;

export default function Auth() {
    return(
        <div className="relative w-full h-screen overflow-hidden" style={{ fontFamily: 'TrajanPro-Regular, sans-serif' }}>
            <style>{fontFaceStyle}</style>
            {/* Background Image */}
            <img 
                src={adduBG} 
                alt="ADDU background" 
                className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>
            
            {/* Content Container */}
            <div className="relative w-full h-full flex flex-col items-start justify-center px-3 sm:px-6 md:px-10 lg:pl-16 xl:pl-24">
                {/* ADDU Seal - Top Right (responsive) */}
                <div className="absolute top-4 sm:top-8 md:top-10 lg:top-12 right-4 sm:right-8 md:right-10 lg:right-12">
                    <img 
                        src={adduSeal} 
                        alt="ADDU seal" 
                        className="w-24 sm:w-32 md:w-48 lg:w-64 h-24 sm:h-32 md:h-48 lg:h-64 opacity-95"
                    />
                </div>
                
                {/* Text Content - Left Side (responsive) */}
                <div className="z-10 max-w-4xl w-full pr-4 sm:pr-6 md:pr-8 lg:pr-0">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4 tracking-wide">
                        ATENEO DE DAVAO UNIVERSITY
                    </h1>
                    <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-white mb-6 sm:mb-8 md:mb-12 font-light tracking-widest">
                        REINSTATEMENT FORM
                    </p>
                    
                    {/* Google Sign In Button */}
                    <button className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg flex items-center gap-2 sm:gap-3 shadow-lg transition-all text-sm sm:text-base" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 600 }}>
                        Sign in with
                        <img 
                            src={googleIcon} 
                            alt="Google icon" 
                            className="w-5 h-5 sm:w-6 sm:h-6"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}