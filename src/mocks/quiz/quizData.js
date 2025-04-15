import { images } from "./loadImages";

export const QuizData = [
    {
        id: "1",
        title: "귀로 듣고 맞춰요!",
        subTitle: "문장을 음성으로 들려줄게요.\n들은 순서대로 문장을 선택해보세요!",
        image: images["quiz1"],
        mode: "listenUp",
    },
    {
        id: "2",
        title: "연관된 걸 찾아요!",
        subTitle: "가운데 빈칸과 관련된 단어를 찾아보세요.\n무엇과 연관돼 있을까요?",
        image: images["quiz2"],
        mode: "connect",
    },
    {
        id: "3",
        title: "그림으로 생각해요!",
        subTitle: "그림을 보고 어떤 문장이 어울릴지\n생각해보세요!",
        image: images["quiz3"],
        image2: images["quiz4"],
        mode: "picture",
    }
]