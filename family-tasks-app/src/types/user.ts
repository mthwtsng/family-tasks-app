export interface User {
    id: string;
    username: string;
    role: 'parent' | 'child';
    points: number;
    tasksCompleted: number;
}