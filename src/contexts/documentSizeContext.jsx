import React,{ createContext, useContext, useEffect, useState } from 'react';

const DocumentSizeContext = createContext();

const DocumentSizeProvider = ({children}) => {
    const getWindowSize = () => {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
    }
    const [windowSize, setWindowSize] = useState(getWindowSize());
    const { innerWidth, innerHeight } = windowSize;

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
        window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <DocumentSizeContext.Provider value={{ innerWidth, innerHeight }}>
            {children}
        </DocumentSizeContext.Provider>
    )
}

const useDocumentSize = () => useContext(DocumentSizeContext);

export { useDocumentSize, DocumentSizeProvider }

