import React, { /* useState,  useEffect, useRef */ } from 'react';
import '../styles/styles.less';

function Footer() {
  return (
    <div className="app" id="app_footer">
      <div className="footer_container">
        <h2>What do you want to do next?</h2>
        <div className="footer_elements">
          <div className="footer_element footer_element_1">
            <div className="footer_content anchor_videos" id="anchor_videos">
              <div className="">
                <h3>Watch the videos</h3>
                <div className="iframe_container youtube_iframe">
                  <iframe src="https://www.youtube.com/embed/_jpNG1eEEwI" title="Economic Development in Africa Report" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" />
                </div>
                <ul>
                  <li>
                    <a href="https://youtu.be/jDh5jdDhtzQ" target="_blank" rel="noreferrer">Français</a>
                    {', '}
                    <a href="https://youtu.be/rK8L9hkhLjg" target="_blank" rel="noreferrer">Español</a>
                    {', '}
                    <a href="https://youtu.be/eaGxRN7ZX2s" target="_blank" rel="noreferrer">العربية</a>
                    {', '}
                    <a href="https://youtu.be/PC5EKFQyRco" target="_blank" rel="noreferrer">简体中文</a>
                    {', '}
                    <a href="https://youtu.be/oyacvaHFZs4" target="_blank" rel="noreferrer">Русский</a>
                    {', '}
                    <a href="https://youtu.be/6LLxcGQI9yA" target="_blank" rel="noreferrer">Português</a>
                    {', '}
                    <a href="https://youtu.be/5KQ7IMaO7VM" target="_blank" rel="noreferrer">Kiswahili</a>
                  </li>
                </ul>
              </div>
              <ul>
                <li>
                  <strong>Download the report video:</strong>
                  {' '}
                  <a href="https://vimeo.com/854722140" target="_blank" rel="noreferrer">English</a>
                  {', '}
                  <a href="https://vimeo.com/854722369" target="_blank" rel="noreferrer">Français</a>
                  {', '}
                  <a href="https://vimeo.com/854723336" target="_blank" rel="noreferrer">Español</a>
                  {', '}
                  <a href="https://vimeo.com/854723577" target="_blank" rel="noreferrer">العربية</a>
                  {', '}
                  <a href="https://vimeo.com/854723733" target="_blank" rel="noreferrer">简体中文</a>
                  {', '}
                  <a href="https://vimeo.com/854723095" target="_blank" rel="noreferrer">Русский</a>
                  {', '}
                  <a href="https://vimeo.com/854722839" target="_blank" rel="noreferrer">Português</a>
                  {', '}
                  <a href="https://vimeo.com/854722605" target="_blank" rel="noreferrer">Kiswahili</a>
                </li>
              </ul>
              <h4>Watch the press conference (Nairobi, Kenya)</h4>
              <div className="iframe_container youtube_iframe">
                <iframe src="https://www.youtube.com/embed/nH0xRZQAnfA" title="Economic Development in Africa Report Press Conference" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" />
              </div>
              <ul>
                <li>
                  <strong>Download:</strong>
                  {' '}
                  <a href="https://vimeo.com/855456106" target="_blank" rel="noreferrer">Video</a>
                  ,
                  {' '}
                  <a href=" https://bit.ly/47BSLFl" target="_blank" rel="noreferrer">Audio</a>
                </li>
              </ul>
              <h4>Interview with the report’s lead author, Habiba Ben Barka</h4>
              <div className="iframe_container youtube_iframe">
                <iframe src="https://www.youtube.com/embed/eLo3fadu0lo" title="Interview with the report’s lead author, Habiba Ben Barka" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" />
              </div>
              <ul>
                <li>
                  <strong>Download:</strong>
                  {' '}
                  <a href="https://vimeo.com/854741677" target="_blank" rel="noreferrer">English</a>
                </li>
              </ul>
            </div>
            <div className="footer_content anchor_podcasts" id="anchor_podcasts">
              <h3>Podcasts</h3>
              <p>Listen to the Weekly Tradecast episodes that explore some of the main issues in the report</p>
              <div className="iframe_container">
                <iframe title="Disruption and demand: How Africa can help diversify global supply chains" height="150" width="100%" style={{ border: 'none', minWidth: 'min(100%, 430px)' }} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/player-v2/?i=ck86k-1474a78-pb&btn-skin=009EDB&download=1&font-color=000000&fonts=Verdana&from=pb6admin&logo_link=none&rtl=0&share=1&size=240&skin=ffffff" allowFullScreen />
                <span className="text"><a href="/podcast/disruption-and-demand-how-africa-can-help-diversify-global-supply-chains">Disruption and demand: How Africa can help diversify global supply chains</a></span>
              </div>
              {/* <ul className="podcasts_container">
                <li>
                  <span className="icon" />
                  <span className="text"><a href="/podcast/not-fantastic-when-its-plastic-stemming-tide-ocean-rubbish">Not fantastic when it’s plastic</a></span>
                </li>
                <li>
                  <span className="icon" />
                  <span className="text"><a href="/podcast/sea-trouble-turning-our-ships-green">Sea of trouble</a></span>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
