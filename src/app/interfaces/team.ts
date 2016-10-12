import { TeamMember } from './team-member';

export interface Team {
    totalRaisedAmount: number,
    fundraisingGoal: number,
    createdOn: string,
    avatarImageUrl: string,
    teamID: number,
    name: string,
    teamURL: string,
    members: TeamMember[]
}
