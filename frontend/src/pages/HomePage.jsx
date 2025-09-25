import React, { useState } from 'react';

const HomePage = () => {
    const [email, setEmail] = useState('');
    const [roomCode, setRoomCode] = useState('');

    const handleEnterRoom = () => {
        console.log('Entering room:', { email, roomCode });
        // Here you would handle room entry logic
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleEnterRoom();
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                        <img 
                            src="/meet.png" 
                            alt="Video Call" 
                            className="w-16 h-16 object-contain"
                        />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Video Call</h1>
                    <p className="text-gray-600">Join or create a video call room</p>
                </div>

                {/* Main Form */}
                <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-lg border border-gray-100">
                    <div className="space-y-6">
                        {/* Email Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onKeyPress={handleKeyPress}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-700 placeholder-gray-400"
                            />
                        </div>

                        {/* Room Code Input */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Room Code
                            </label>
                            <input
                                type="text"
                                placeholder="Enter room code"
                                value={roomCode}
                                onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
                                onKeyPress={handleKeyPress}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-700 placeholder-gray-400 uppercase tracking-wider"
                            />
                        </div>

                        {/* Enter Room Button */}
                        <button
                            onClick={handleEnterRoom}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
                        >
                            <div className="flex items-center justify-center space-x-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                </svg>
                                <span>Enter Room</span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-8 text-sm text-gray-500">
                    <p>Secure • End-to-End Encrypted • HD Quality</p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;