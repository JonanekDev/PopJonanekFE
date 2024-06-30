export interface User {
  userId: number;
  username: string;
  email: string;
  verified: boolean;
  totalClicks: number;
  clicks: number;
  discordId: string;
  avatarId: number;
  regDate: Date;
  lastLogDate: Date;
  authToken?: string;
}
