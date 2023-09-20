'use client';

import React from 'react';
import SuperTokensReact, { SuperTokensWrapper } from 'supertokens-auth-react';

import { frontendConfig } from '../../config/frontendConfig';

if (typeof window !== 'undefined') {
    // we only want to call this init function on the frontend, so we check typeof window !== 'undefined'
    SuperTokensReact.init(frontendConfig());
}

export default function SuperTokensLayout({ children }: { children: React.ReactNode }) {
    return <SuperTokensWrapper>{children}</SuperTokensWrapper>;
}