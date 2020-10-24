export interface Notice {
        id: number,
        sender: number,
        course: number,
        batch: number,
        student: number,
        body: string,
}
export interface NoticePost {
        // id: number,
        sender: number,
        course: number,
        batch: number,
        student: number,
        body: string
}


export interface Batch {
        id: number,
        name: string,
        course: number
}

export interface Course {
        id: number,
        title: string,
        tutor: number
}

export interface Login{
        username: string,
        password: string,
}