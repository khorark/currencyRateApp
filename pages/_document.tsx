import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    public static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    public render() {
        return (
            <html>
                <Head>
                    <meta name={'viewport'} content={'initial-scale=1.0, width=device-width'} key={'viewport'} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}
