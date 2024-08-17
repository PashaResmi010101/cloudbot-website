import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    let messages = [
        'Have you lost your way, kiddo?',
        'Damn it! This dead-end road.',
        'The Aurors blocked this road, Harry!',
        'Hey sen burada ne yapıyorsun çabuk çık buradan!',
        'Sayfa bulunamadı işte amk malı ne bekliyon hala burda?'
    ];

    return <ErrorPage code={404} message={messages[Math.floor(Math.random()*messages.length)] || "Sayfa bulunamadı ne bekliyon amk?"} />
}

export default UnkownPage;

