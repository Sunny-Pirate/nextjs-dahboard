import type {NextAuthConfig} from 'next-auth';


const protectedRoutes = ["/dashboard", "/profile"];
const isRouteProtected = (path: string) => protectedRoutes.some(protectedPath => path.startsWith(protectedPath));

export  const authConfig = {
    providers:[],
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const currentPath = nextUrl.pathname;
            if (isRouteProtected(currentPath)) {
                if (isLoggedIn) return true;
                return false; // Redirect unauthenticated users to login page
            } else if (isLoggedIn) {
                return Response.redirect(new URL("/dashboard", nextUrl));
            }
            return true;
        },
    },
} satisfies NextAuthConfig