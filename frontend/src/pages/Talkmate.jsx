import { useEffect } from "react";
import bg from '../assets/bg.png';

const Talkmate = () => {
  useEffect(() => {
    const injectScript = document.createElement("script");
    injectScript.src = "https://cdn.botpress.cloud/webchat/v2.4/inject.js";
    injectScript.async = true;
    document.body.appendChild(injectScript);

    injectScript.onload = () => {
      if (window.botpress) {
        window.botpress.on("webchat:ready", () => {
          window.botpress.open();
        });

        window.botpress.init({
          botId: "5014c851-268b-4c88-ac15-b130d1fbb548",
          clientId: "bb484039-ccdb-4a11-8693-1aadc16297aa",
          selector: "#webchat",
          configuration: {
            composerPlaceholder: "Hey.. Let's talk and learn. Just say Hi..",
            botName: "Talkmate",
            botAvatar: "https://files.bpcontent.cloud/2025/04/27/08/20250427081918-BYQBJS80.jpeg",
            website: {},
            email: {},
            phone: {},
            termsOfService: {},
            privacyPolicy: {},
            color: "#D8B4F8",
            variant: "solid",
            themeMode: "light",
            fontFamily: "rubik",
            radius: 3,
            additionalStylesheetUrl: "https://files.bpcontent.cloud/2025/04/27/09/20250427093104-3GOZMJB0.css",
            allowFileUpload: true,
          }
        });
      }
    };

    return () => {
      document.body.removeChild(injectScript);
    };
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      
      {/* Left side */}
      <div style={{
        flex: 0.25,
        backgroundColor: '#D8B4F8',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        fontFamily: '"Comic Sans MS", cursive, sans-serif',
        textAlign: 'center',
        borderRadius: '10px'
      }}>
        
        <div>
          <h1 
            style={{ fontSize: '2rem', color: 'black' }}
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            Welcome, Little Star!
          </h1>

          <p 
            style={{ fontSize: '1.2rem', marginTop: '1rem', color: '#374151' }}
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            I am your talk buddy! <br /> Let's explore together.
          </p>
        </div>

        {/* Buttons Section */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          marginTop: '2rem'
        }}>
          
          {/* Text Button */}
          <button style={{
            backgroundColor: '#4f46e5',
            color: 'white',
            border: 'none',
            padding: '1rem 1.5rem',
            borderRadius: '10px',
            fontFamily: '"Comic Sans MS", cursive, sans-serif',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: '1.2rem',
            transition: 'transform 0.3s ease, background-color 0.3s ease'
          }}
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            📝 Text
          </button>

          {/* Talk Button */}
          <button style={{
            backgroundColor: '#10b981',
            color: 'white',
            border: 'none',
            padding: '1rem 1.5rem',
            borderRadius: '10px',
            fontFamily: '"Comic Sans MS", cursive, sans-serif',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: '1.2rem',
            transition: 'transform 0.3s ease, background-color 0.3s ease'
          }}
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            🗣️ Talk
          </button>

          {/* Upload Button */}
          <button style={{
            backgroundColor: '#f59e0b',
            color: 'white',
            border: 'none',
            padding: '1rem 1.5rem',
            borderRadius: '10px',
            fontFamily: '"Comic Sans MS", cursive, sans-serif',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: '1.2rem',
            transition: 'transform 0.3s ease, background-color 0.3s ease'
          }}
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            📤 Upload
          </button>

        </div>
      </div>

      {/* Right side */}
      <>
        <style>{`
          #webchat .bpWebchat {
            position: unset;
            width: 100vw;
            height: 100vh;
            max-height: 100%;
            max-width: 100%;
          }
          #webchat .bpFab {
            display: flex;
          }
        `}</style>

        <div 
          id="webchat"
          style={{
            flex: 1,
            width: '100%',
            height: '100%',
            margin: '0 auto',
            marginRight: '5px',
            paddingTop: '0',
            overflow: 'hidden',
            display: 'flex',
            backgroundImage: `url(${bg})`,
            borderRadius: '10px'
          }}
        />
      </>
      
    </div>
  );
};

export default Talkmate;
