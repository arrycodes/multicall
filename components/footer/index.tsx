import { useWeb3Modal } from '@web3modal/wagmi/react'


  


const Footer = () => {


  const {open}= useWeb3Modal()

  const handleClick = (e: Event) => {
  
    e.preventDefault()
    open()
    console.log("Opened")
  }


    return(
        <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
    
              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>Multical Protocol<span>.</span></h3>
                <p>
                  <strong> Privacy Statement </strong><br />
                  <strong>Terms and Condition</strong><br />
                </p>
              </div>
    
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="#" onClick={(e) => handleClick(e)}>Staking</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#" onClick={(e) => handleClick(e)}>Multicall</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#" onClick={(e) => handleClick(e)}>Deployment</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#" onClick={(e) => handleClick(e)}>Auto Trade</a></li>
                  
                </ul>
              </div>
    
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Resources</h4>
                <ul>
                  
                  <li><i className="bx bx-chevron-right"></i> <a href="#" onClick={(e) => handleClick(e)}>Migration</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#" onClick={(e) => handleClick(e)}>Defi App</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#" onClick={(e) => handleClick(e)}>Launch Pad</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="#" onClick={(e) => handleClick(e)}>Coin News</a></li>
                </ul>
              </div>
    
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Social Networks</h4>
                <div className="social-links mt-3">
                  <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                  <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                  <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                  <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                  <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
              </div>
    
            </div>
          </div>
        </div>
    
        <div className="container py-4">
          <div className="copyright">
            &copy; Copyright <strong><span>Multical Chains Explorer</span></strong>. All Rights Reserved
          </div>
        </div>
      </footer>
    
    )
}

export default Footer