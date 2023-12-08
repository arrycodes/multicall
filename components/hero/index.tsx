import SendButton from "../connectbtn"
import SwitchBtn from "../connectbtn/select"

const Hero = ()  => {

    return(
        <section id="hero" className="d-flex align-items-center">
    <div className="container" data-aos="zoom-out" data-aos-delay="100">
      <h1>Decentralised <span>Protocol</span></h1>
      <h2>Decentralized protocol for syncing <br/>various Wallets</h2>
      <h2> This is not an app but a protocol that establishes a remote resolution between all noncustodial wallet.</h2>
      <div className="d-flex">
       <SendButton />
       <SwitchBtn />
      </div>
    </div>
  </section>
    )
}

export default Hero