"use server"

import { currentUser } from "@clerk/nextjs"
import { db } from "./db";

export const getAuthUserDetails = async () => {
    const user = await currentUser();
    if (!user) {
        return
    }
    const userdData =await db.user.findUnique({
        where: {
            email: user.emailAddresses[0].emailAddress,
        },
        include: {
            Agency: {
                include: {
                }
            }
        }
    })
}