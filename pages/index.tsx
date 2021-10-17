import Head from 'next/head'

export const Home = (): JSX.Element => (
  <div className="app-container container">
    <Head>
      <title>Piece of Cake Certificate</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="/app.css" />
    </Head>

    <main>
      <div className="row">
        <div className="app-sidebar">
          <img className="app-logo" src="/logo.svg" alt="Piece of Cake Certificate" />
          <div className="app-certificate-elements">
            <button className="app-button">Text</button>
            <button className="app-button">Signature</button>
            <button className="app-button">Photo</button>
            <button className="app-button">Field name</button>
          </div>
          <button className="app-download-certificates app-button">
            Download
            <div>
              <img src="/download-icon.svg" alt="" />
            </div>
          </button>
        </div>
        <div className="app-content">
          <div className="app-certificate app-certificate--a4">
            <p className="app-paper-name">A4 paper</p>
          </div>
        </div>
      </div>
    </main>
  </div>
)

export default Home
