/**
 * Verto - Daily Logic Puzzle
 * Copyright (C) 2026 Mutabie Canada Inc.
 * * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 */

import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Verto - The Daily Logic Path';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: '#F8FAFC', // slate-50
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                }}
            >
                {/* Decorative Grid Pattern Background */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: 'radial-gradient(circle, #CBD5E1 2px, transparent 2px)',
                        backgroundSize: '40px 40px',
                        opacity: 0.3,
                    }}
                />

                {/* Main Logo Content */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                        {/* Abstract Icon representing 1 -> 2 connection */}
                        <div style={{ display: 'flex', background: '#2563EB', width: '80px', height: '80px', borderRadius: '20px', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 25px -5px rgba(37, 99, 235, 0.4)' }}>
                            <div style={{ color: 'white', fontSize: '48px', fontWeight: 'bold' }}>1</div>
                        </div>
                        <div style={{ width: '60px', height: '8px', background: '#2563EB', borderRadius: '4px' }}></div>
                        <div style={{ display: 'flex', background: '#fff', border: '4px solid #2563EB', width: '80px', height: '80px', borderRadius: '20px', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ color: '#2563EB', fontSize: '48px', fontWeight: 'bold' }}>2</div>
                        </div>
                    </div>

                    <div style={{ fontSize: '120px', fontWeight: 900, letterSpacing: '-0.05em', color: '#0F172A', lineHeight: 1 }}>
                        Verto
                    </div>
                    <div style={{ fontSize: '32px', fontWeight: 500, color: '#64748B', marginTop: '10px' }}>
                        The Daily Hamiltonian Path Challenge
                    </div>
                </div>

                {/* Branding Footer */}
                <div style={{ position: 'absolute', bottom: '40px', fontSize: '24px', color: '#94A3B8' }}>
                    Mutabie Canada Inc.
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
