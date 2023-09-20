'use client';

import { SessionAuth } from 'supertokens-auth-react/recipe/session';

export default function Profile() {
    return (
            <SessionAuth>
                <div>Logged in!</div>
            </SessionAuth>
    );
}