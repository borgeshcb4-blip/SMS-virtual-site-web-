
import React, { useEffect, useState } from 'react';

interface SocialProofToastProps {
    user: string;
    service: string;
    timeAgo: string;
    location?: string;
    onExited: () => void;
}

export const SocialProofToast: React.FC<SocialProofToastProps> = ({ user, service, timeAgo, location, onExited }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const enterTimeout = setTimeout(() => setIsVisible(true), 10);
        const exitTimeout = setTimeout(() => setIsVisible(false), 4500);
        const unmountTimeout = setTimeout(onExited, 5000);

        return () => {
            clearTimeout(enterTimeout);
            clearTimeout(exitTimeout);
            clearTimeout(unmountTimeout);
        };
    }, [onExited]);

    return (
        <div 
            className={`transition-all duration-500 ease-in-out transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}
            role="status"
            aria-live="polite"
        >
            <div className="flex items-center gap-3 bg-gradient-to-r from-blue-500/80 to-teal-400/80 backdrop-blur-md border border-white/20 rounded-lg shadow-lg px-4 py-2 max-w-[90vw] sm:max-w-md w-fit">
                <p className="text-sm text-white leading-snug">
                    <strong>{user}</strong> ativou conta no {service}{' '}
                    {location && `em ${location}`}{' '}
                    <span className="opacity-80">{timeAgo}</span>
                </p>
            </div>
        </div>
    );
};
