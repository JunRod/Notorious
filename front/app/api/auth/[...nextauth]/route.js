import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            profile(profile) {

                return {
                    id: profile?.sub,
                    username: profile?.email,
                }
            }
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {label: "Username", type: "text", placeholder: "JuNRod"},
                password: {label: "Password", type: "password", placeholder: "*********"}
            },
            async authorize(credentials) {
                return {
                    username: credentials?.username,
                    password: credentials?.password
                }
            },
        }),
    ],
    callbacks: {
        async jwt({token,user}) {

            if (user) {
                token.username = user?.username
                token.password = user?.password
            }

            return token
        },
        async session({token}) {
            return token
        }
    },
}

const handler = NextAuth(authOptions)

export {
    handler as GET,
    handler as POST,
}
