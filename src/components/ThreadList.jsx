import { ThreadListTile } from "./ThreadListItem"

const mockedData = [
    [
        {
        "subject_id": 10,
        "question_id": 20,
        "thread_id": "5ca388e1a59a5a12444ba107",
        "reply_to": "5cab51c4a59a5a124c196b1d",
        "text": "fsdfsdf",
        "created_at": "2019-04-24 07:36:39",
        "subject": "Pay",
        "question": "I think I get too little in terms of my experience",
        "team": "Demo team here.",
        "id": "5cc01207a59a5a02bc68e007"
        },
        {
        "question_id": 20,
        "subject_id": 10,
        "score": 9,
        "thread_id": "5ca388e1a59a5a12444ba107",
        "text": "wfewef",
        "created_at": "2019-04-08 13:51:00",
        "acknowledged": true,
        "subject": "Pay",
        "question": "I think I get too little in terms of my experience",
        "team": "Demo team here.",
        "id": "5cab51c4a59a5a124c196b1d"
        },
        {
        "question_id": 20,
        "subject_id": 10,
        "score": 5,
        "thread_id": "5ca388e1a59a5a12444ba107",
        "text": "fdsfdsf",
        "created_at": "2019-04-02 16:08:01",
        "subject": "Pay",
        "question": "I think I get too little in terms of my experience",
        "team": "Demo team here.",
        "id": "5ca388e1a59a5a12444ba108"
        }
    ],
    [
        {
        "question_id": 15,
        "subject_id": 8,
        "score": 10,
        "thread_id": "5cbf364ea59a5a4bea15bc44",
        "text": "I am very happy!",
        "created_at": "2019-04-23 15:59:10",
        "subject": "Freedom of action",
        "question": "I find that my leader gives me the freedom I need to make decisions about the things that lie within my field of work",
        "team": "Demo team here.",
        "id": "5cbf364ea59a5a4bea15bc45"
        }
    ]
]

export const ThreadList = () => {
    return mockedData.map(data => <ThreadListTile data={data} /> )
}