"use client"
import { useWeb3Modal } from '@web3modal/wagmi/react'



interface Props {
  title: string,
  message: string

}

const Item = (prop: Props) => {
  const {title, message} = prop
const {open}= useWeb3Modal()

const handleClick = (e: Event) => {

  open()
  console.log("Opened")
}
    return(

        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0" onClick={(e) => handleClick(e)}>
        <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
          <div className="icon"><i className="bx bx-file"></i></div>
          <h4 className="title"><a href="" onClick={(e) => handleClick(e)}>{title}</a></h4>
          <p className="description" onClick={(e) => handleClick(e)}>{message}</p>
        </div>
      </div>
    )
   
}

export default Item