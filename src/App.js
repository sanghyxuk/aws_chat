import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NicknamePage from "./pages/NicknamePage";
import ChatRoomPage from "./pages/ChatRoomPage";
import { NicknameProvider, useNickname } from "./context/NicknameContext";
import IPhoneMockup from "./Mockup/IPhoneMockup";

const ProtectedRoute = ({ children }) => {
    const { nickname } = useNickname();
    if (!nickname) {
        return <Navigate to="/" />;
    }
    return children;
};

const App = () => {
    return (
        <NicknameProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<NicknamePage />} />
                    <Route
                        path="/chat"
                        element={
                        <IPhoneMockup>
                                <ChatRoomPage />
                        </IPhoneMockup>

                        }
                    />
                </Routes>
            </Router>
        </NicknameProvider>
    );
};

export default App;
