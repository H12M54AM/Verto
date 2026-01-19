/**
 * Verto - Daily Logic Puzzle
 * Copyright (C) 2026 Mutabie Canada Inc.
 * * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 */

import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://verto.mutabie.ca';

/**
 * Recursively scans the src/app directory to find all pages.
 * Explicitly handles route groups (folders in parantheses) by not including them in the URL.
 */
function getRoutes(dir: string, currentRoute = ''): string[] {
    let routes: string[] = [];
    
    // Safety check if directory exists (e.g. during certain build phases)
    if (!fs.existsSync(dir)) return [];

    const files = fs.readdirSync(dir);

    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            // Ignore system folders and api routes
            if (file.startsWith('_') || file.startsWith('.') || file === 'api') continue;

            // Handle Route Groups e.g. "(marketing)" - don't add to URL but recurse
            const isRouteGroup = file.startsWith('(') && file.endsWith(')');
            const nextRouteSegment = isRouteGroup ? currentRoute : `${currentRoute}/${file}`;
            
            routes = [...routes, ...getRoutes(fullPath, nextRouteSegment)];
        } else if (file === 'page.tsx' || file === 'page.js' || file === 'page.jsx') {
            // Found a page!
            routes.push(currentRoute || '/');
        }
    }
    return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
    const appDir = path.join(process.cwd(), 'src/app');
    const allRoutes = getRoutes(appDir);
    
    // Deduplicate routes just in case
    const uniqueRoutes = Array.from(new Set(allRoutes));

    return uniqueRoutes.map((route) => ({
        url: `${BASE_URL}${route === '/' ? '' : route}`,
        lastModified: new Date(),
        changeFrequency: route === '/' ? 'daily' : 'weekly',
        priority: route === '/' ? 1.0 : 0.8,
    }));
}
