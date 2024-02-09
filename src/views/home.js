import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>vantali</title>
        <meta property="og:title" content="vantali" />
      </Helmet>
      <Navbar
        brandingLogo="/vantali_logo_black-200h.png"
        rootClassName="navbar-root-class-name"
      ></Navbar>
      <section className="home-section">
        <div className="home-hero">
          <div className="home-content">
            <main className="home-main">
              <header className="home-header">
                <h1 className="home-heading">
                  <span className="home-text">Do Less.</span>
                  <br className="home-text01"></br>
                  <span className="home-text02">Care More.</span>
                  <br></br>
                </h1>
                <span className="home-caption">
                  <br className="home-text04"></br>
                  <span className="home-text05">
                    Effortlessly transform doctor-patient conversations into
                    EHRs, say good bye to manual prescription writing with our
                    speech-to-prescription technology, and explore medical case
                    studies
                  </span>
                  <br></br>
                </span>
              </header>
            </main>
          </div>
        </div>
      </section>
      <section className="home-section1">
        <header className="home-header1">
          <header className="home-left">
            <h2 className="home-heading1 section-heading">Features</h2>
          </header>
        </header>
        <main className="home-cards">
          <animate-on-reveal
            animation="zoomIn"
            duration="700ms"
            delay="0s"
            direction="normal"
            easing="ease"
            iteration="1"
          >
            <section data-thq-animate-on-reveal="true" className="home-card">
              <main className="home-content1">
                <h1 className="home-header2">Effortless EHR Documentation</h1>
                <p className="home-description">
                  <span className="home-text07">
                    Convert doctor-patient conversations into clear and accurate
                    Electronic Health Record (EHR) documents
                  </span>
                  <br></br>
                </p>
              </main>
            </section>
          </animate-on-reveal>
          <animate-on-reveal
            animation="zoomIn"
            duration="700ms"
            delay="0s"
            direction="normal"
            easing="ease"
            iteration="1"
          >
            <section data-thq-animate-on-reveal="true" className="home-card1">
              <main className="home-content2">
                <h1 className="home-header3">
                  <span className="home-text09">Speech To Prescription</span>
                  <br></br>
                </h1>
                <p className="home-description1">
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text12">
                    Simplify prescription writing with voice recognition
                    technology, convert speech to prescription in real time
                  </span>
                  <br></br>
                </p>
              </main>
            </section>
          </animate-on-reveal>
          <animate-on-reveal
            animation="zoomIn"
            duration="700ms"
            delay="0s"
            direction="normal"
            easing="ease"
            iteration="1"
          >
            <section data-thq-animate-on-reveal="true" className="home-card2">
              <main className="home-content3">
                <h1 className="home-header4">Explore Medical Case Studies</h1>
                <p className="home-description2">
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text15">
                    Access our rich respository of medical cases to stay
                    informed and make informed decisions, providing healthcare
                    professionals with valuable insights 
                  </span>
                  <br></br>
                </p>
              </main>
            </section>
          </animate-on-reveal>
        </main>
      </section>
      <footer className="home-footer">
        <div className="home-content4">
          <div className="home-container1">
            <main className="home-subscribe">
              <main className="home-main1">
                <h1 className="home-heading2">Subscribe to our newsletter</h1>
                <div className="home-input-field">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="home-textinput input"
                  />
                  <div className="home-buy button">
                    <span className="home-text17">Join</span>
                    <span className="home-text18">
                      <span className="home-text19">Subscribe now</span>
                      <br></br>
                    </span>
                  </div>
                </div>
              </main>
            </main>
          </div>
        </div>
      </footer>
      <div>
        <div className="home-container3">
          <Script
            html={`<script>
    /*
Accordion - Code Embed
*/

/* listenForUrlChangesAccordion() makes sure that if you changes pages inside your app,
the Accordions will still work*/

const listenForUrlChangesAccordion = () => {
      let url = location.href;
      document.body.addEventListener(
        "click",
        () => {
          requestAnimationFrame(() => {
            if (url !== location.href) {
              runAccordionCodeEmbed();
              url = location.href;
            }
          });
        },
        true
      );
    };


const runAccordionCodeEmbed = () => {
    const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
    const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
    const accordionIcons = document.querySelectorAll('[data-role="accordion-icon"]'); // All accordion icons

    accordionContents.forEach((accordionContent) => {
        accordionContent.style.display = "none"; //Hides all accordion contents
    });

    accordionContainers.forEach((accordionContainer, index) => {
        accordionContainer.addEventListener("click", () => {
            accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
            });

            accordionIcons.forEach((accordionIcon) => {
                accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
            });

            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        });
    });
}

runAccordionCodeEmbed()
listenForUrlChangesAccordion()

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
