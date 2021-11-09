

interface UserDontFount{
    readonly type: 'auth/user-not-found',
}
interface WrongPassword{
    readonly type: 'auth/wrong-password',
  
}

export type MessageAction = UserDontFount | WrongPassword