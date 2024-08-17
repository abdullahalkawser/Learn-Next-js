import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

console.log("GOOGLE_CLIENT_ID", process.env.GOOGLE_CLIENT_ID);
console.log("GOOGLE_CLIENT_SECRET", process.env.GOOGLE_CLIENT_SECRET);
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
}

const handelar = NextAuth(authOptions);

export { handelar as GET, handelar as POST };
