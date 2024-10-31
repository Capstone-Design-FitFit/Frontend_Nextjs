'use client'

import { createContext, useContext, useState, useEffect } from 'react';

// AuthContext 생성
const AuthContext = createContext();

// AuthProvider 컴포넌트 정의
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // 로그인 함수
    const login = (userData) => {
        setUser(userData);
        // 로컬 스토리지에 사용자 정보를 저장하여 새로고침 후에도 유지
        sessionStorage.setItem('user', JSON.stringify(userData));
        console.log(userData);
        console.log(user);
    };

    // 로그아웃 함수
    const logout = () => {
        setUser(null);
        console.log("Logout");
        sessionStorage.removeItem('user');
    };

    // 페이지 새로고침 시 로컬 스토리지에서 사용자 정보 가져오기
    useEffect(() => {
        const storedUser = sessionStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setIsLoading(false);
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

// AuthContext를 사용하기 위한 커스텀 훅
export const useAuth = () => useContext(AuthContext);
