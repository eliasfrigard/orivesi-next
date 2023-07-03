import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

const authOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {
        email: { label: 'Sähköposti', type: 'email', placeholder: 'info@orivesiallstars.net' },
        password: { label: 'Salasana', type: 'password', placeholder: '***********' },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials

        if (!email || !password) throw new Error('email/password missing!')

        if (email === 'elias_frigard@hotmail.com' && password === 'password') {
          return { id: "1", name: "Elias", email: "jsmith@example.com" }
        } else {
          return null
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  secret: process.env.SECRET,
}

export default NextAuth(authOptions)
