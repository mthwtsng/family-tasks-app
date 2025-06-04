export interface Task {
    id: string;
    title: string;
    description: string;
    deadline: Date;
    points: number;
    status: 'available' | 'claimed' | 'completed' | 'approved' | 'denied';
    claimedBy?: string; // ID of the child who claimed the task
    completedAt?: Date;
    approvedAt?: Date;
}