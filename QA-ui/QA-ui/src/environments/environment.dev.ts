export const environment = {
    production : false,
    BASE_URL: 'http://localhost:3000/',
    QUESTION_BASE_URL: 'http://localhost:3000/questions/',
    QUESTION: {
        GET_ALL_QUESTIONS:'list',
        ADD_Question:'add?username=',
        VIEW_QUESTION:'view?username=',
        VQ:'vq?id=',
        UPDATE:'update?id=',
        DELETE:'delete?id=',
        VQA:'viewqa?question='
    },
    NEWUSER_BASE_URL: 'http://localhost:3000/users/',
    USER: {
        ADD_USER:'add',
        LOGIN: 'login',
        PROFILE: 'profile',
        UPDATE: 'update?username=',
        DELETE:'delete?username='
    },
    NEWANSWER_BASE_URL: 'http://localhost:3000/answers/',
    ANSWER: {
        VIEW_QA:'view?question=',
        ADD_ANSWER:'add',
        VA:'vq?username='
    }
};