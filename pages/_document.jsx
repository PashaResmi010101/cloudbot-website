import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" href="https://media.discordapp.net/attachments/1117200488916598844/1274337148010627174/logo2.png?ex=66c1e274&is=66c090f4&hm=4007157fa47830d073f17b45d625f40740173455f72996845a6dcf1db6c965b2&=&format=webp&quality=lossless&width=473&height=473" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta
            name="description"
            content="How about listening to music without pausing? Create your own playlists with 750+ supported sound platforms and start listening."
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@PashaResmi0101" />
          <meta name="twitter:creator" content="@PashaResmi0101" />
          <meta property="og:url" content="https://cloudbot-website.vercel.app/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Cloud BOT" />
          <link
            rel="icon"
            href="img/logo2.png"
            type="image/x-icon"
          />
          <meta
            property="og:description"
            content="How about listening to music without pausing? Create your own playlists with 750+ supported sound platforms and start listening."
          />
          <meta property="og:image" content="public/img/logo2.png" />
          <meta property="og:image:alt" content="Cloud BOT" />
          <meta property="og:locale" content="en_GB" />
          <meta
            property="og:site_name"
            content="Cloud BOT"
          />
          <meta name="theme-color" content="#087ddd" />
          <link rel="icon" href="public/img/logo2.png" type="image/x-icon" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/css/nprogress.css" />
    
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
