import Head from "next/head"

const About = () => {
    return (
        <>
            <Head>
                <title>Ninja List | About</title>
                <meta name='keywords' content='ninjas'></meta>
            </Head>
            <div>
                <h1>About</h1>
                <p>This is some text here.</p>
                <p>This is some more text</p>
            </div>
        </>
    );
}
 
export default About;