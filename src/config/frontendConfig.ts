import EmailPasswordReact from 'supertokens-auth-react/recipe/emailpassword'
import SessionReact from 'supertokens-auth-react/recipe/session'
import { appInfo } from './appInfo'

export const frontendConfig = () => {
    return {
        appInfo,
        recipeList: [
            EmailPasswordReact.init(),
            SessionReact.init(),
        ],
        windowHandler: (oI: any) => {
            return {
                ...oI,
                location: {
                    ...oI.location,
                    // setHref: (href: string) => {
                    //     Router.push(href)
                    // },
                },
            }
        },
    }
}