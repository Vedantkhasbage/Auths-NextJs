import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";

const handler=NextAuth({
    providers: [
        CredentialsProvider({
          // The name to display on the sign in form (e.g. "Sign in with...")
          name: "Email and password",
          credentials: {
            username: { label: "Username", type: "text", placeholder: "vedant" },
            password: { label: "Password", type: "password", placeholder:"12345" }
          },
          async authorize(credentials, req) {
            // Add logic here to look up the user from the credentials supplied
    
            console.log(credentials?.username)
            console.log(credentials?.password)
              const user={
                name:"vedant",
                id:"12",
                username:"vedant@gmail.com"
            }
    
            if (user) {
              // Any object returned will be saved in `user` property of the JWT
              return user
            } else {
              // If you return null then an error will be displayed advising the user to check their details.
              return null
      
              // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
            }
          }
        })
      ],
      secret:process.env.NEXTAUTH_SECRET
        })
    export {handler as GET,handler as POST}
